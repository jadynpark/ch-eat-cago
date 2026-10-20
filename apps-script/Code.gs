/**
 * Ch-eat-cago backend: a Google Sheet that powers jadynpark.github.io/ch-eat-cago
 *
 * Tabs:
 *   Restaurants: your list. Edit any cell and the site picks it up within ~30 seconds.
 *   Comments: what friends post from the site. Delete a row, or put an "x" in "hide", to remove one.
 *
 * Setup: see README.md → "Connect the Google Sheet".
 * If you change THIS code later: Deploy → Manage deployments → ✏️ → Version: New version → Deploy.
 */

const SOURCE_URL = 'https://jadynpark.github.io/ch-eat-cago/restaurants.js';
const TAB_R = 'Restaurants';
const TAB_C = 'Comments';
const CACHE_SECONDS = 30;

const HEADERS = ['name', 'status', 'tag', 'category', 'type', 'neighborhood', 'price',
  'food', 'value', 'vibe', 'service', 'last_visited', 'notes', 'address', 'lat', 'lng',
  'reserve_url', 'reserve_via', 'reserve_note'];
const C_HEADERS = ['timestamp', 'restaurant', 'name', 'comment', 'hide'];

const CATEGORIES = ['American', 'Italian & European', 'Mediterranean & Latin', 'Japanese',
  'Chinese, Korean & SE Asian', 'Dessert & Bars'];
const STATUS_TO_SHEET = { been: 'Been', want: 'Want to go', closed: 'Closed', 'maybe-closed': 'Maybe closed' };
const STATUS_FROM_SHEET = { 'been': 'been', 'want to go': 'want', 'want': 'want', 'closed': 'closed', 'maybe closed': 'maybe-closed' };
const VIAS = ['OpenTable', 'Resy', 'Tock', 'SevenRooms', 'Website', 'Phone', 'Walk-in'];

/* ------------------------------------------------------------------ */
/* One-time setup: run this once from the editor (▶ Run → setup).      */
/* ------------------------------------------------------------------ */
function setup() {
  const ss = SpreadsheetApp.getActive();
  let sh = ss.getSheetByName(TAB_R);
  if (sh && sh.getLastRow() > 1) {
    throw new Error('The "Restaurants" tab already has data. Delete that tab first if you really want to re-import.');
  }
  if (!sh) sh = ss.insertSheet(TAB_R, 0);

  const txt = UrlFetchApp.fetch(SOURCE_URL + '?t=' + Date.now()).getContentText();
  const start = txt.indexOf('[', txt.indexOf('const RESTAURANTS'));
  const list = JSON.parse(txt.slice(start, txt.lastIndexOf(']') + 1));

  const rows = list.map(function (r) {
    const tags = r.tags || [];
    const status = r.status || (tags.indexOf('closed') >= 0 ? 'closed' : tags.indexOf('maybe-closed') >= 0 ? 'maybe-closed'
      : tags.indexOf('wishlist') >= 0 ? 'want' : 'been');
    const tag = r.tag !== undefined ? r.tag : (tags.indexOf('fave') >= 0 ? 'fave' : tags.indexOf('skip') >= 0 ? 'skip' : '');
    const rt = r.ratings || {};
    const rs = r.reserve || {};
    const v = function (x) { return x === null || x === undefined ? '' : x; };
    return [r.name, STATUS_TO_SHEET[status] || 'Been', tag ? tag.charAt(0).toUpperCase() + tag.slice(1) : '',
      r.category || '', r.type || '', r.neighborhood || '', r.price ? '$'.repeat(r.price) : '',
      v(rt.food), v(rt.value), v(rt.vibe), v(rt.service), r.lastVisited || '',
      (r.notes || []).join('\n'), r.address || '', v(r.lat), v(r.lng), rs.url || '', rs.via || '', rs.note || ''];
  });

  const n = Math.max(sh.getMaxRows() - 1, rows.length + 200);
  if (sh.getMaxRows() < n + 1) sh.insertRowsAfter(sh.getMaxRows(), n + 1 - sh.getMaxRows());
  sh.getRange(2, 12, n, 1).setNumberFormat('@');  // last_visited stays plain text ("2024", "Oct 2024")
  sh.getRange(1, 1, 1, HEADERS.length).setValues([HEADERS]).setFontWeight('bold').setBackground('#f3ede4');
  sh.getRange(2, 1, rows.length, HEADERS.length).setValues(rows);
  sh.setFrozenRows(1);
  sh.setFrozenColumns(1);

  const list_ = function (col, vals) {
    sh.getRange(2, col, n, 1).setDataValidation(
      SpreadsheetApp.newDataValidation().requireValueInList(vals, true).setAllowInvalid(false).build());
  };
  list_(2, ['Been', 'Want to go', 'Closed', 'Maybe closed']);
  list_(3, ['Fave', 'Skip']);
  list_(4, CATEGORIES);
  list_(7, ['$', '$$', '$$$', '$$$$']);
  list_(18, VIAS);
  sh.getRange(2, 8, n, 4).setDataValidation(
    SpreadsheetApp.newDataValidation().requireNumberBetween(0, 5).setAllowInvalid(false)
      .setHelpText('0 to 5 (halves OK, e.g. 4.5)').build());

  sh.setColumnWidth(1, 200);
  sh.setColumnWidth(13, 420);
  sh.getRange(2, 13, n, 1).setWrap(true);
  sh.getRange(2, 1, n, HEADERS.length).setVerticalAlignment('top');

  let c = ss.getSheetByName(TAB_C) || ss.insertSheet(TAB_C);
  if (c.getLastRow() === 0) {
    c.getRange(1, 1, 1, C_HEADERS.length).setValues([C_HEADERS]).setFontWeight('bold').setBackground('#f3ede4');
    c.setFrozenRows(1);
    c.setColumnWidth(4, 420);
  }

  const blank = ss.getSheetByName('Sheet1');
  if (blank && blank.getLastRow() === 0 && ss.getSheets().length > 2) ss.deleteSheet(blank);

  Logger.log('Imported ' + rows.length + ' restaurants. Next: Deploy → New deployment → Web app.');
}

/* ------------------------------------------------------------------ */
/* Website reads data from here (GET).                                 */
/* ------------------------------------------------------------------ */
function doGet() {
  const cache = CacheService.getScriptCache();
  const hit = cache.get('payload');
  if (hit) return json_(hit);
  const payload = JSON.stringify({ restaurants: readRestaurants_(), comments: readComments_(), updated: new Date().toISOString() });
  if (payload.length < 95000) cache.put('payload', payload, CACHE_SECONDS);
  return json_(payload);
}

/* ------------------------------------------------------------------ */
/* Friends post comments here (POST).                                  */
/* ------------------------------------------------------------------ */
function doPost(e) {
  let d;
  try { d = JSON.parse(e.postData.contents); } catch (err) { return json_({ ok: false, error: 'Bad request' }); }
  if (d.website) return json_({ ok: true });                       // spam-bot honeypot

  const restaurant = clean_(d.restaurant, 100);
  const name = clean_(d.name, 40) || 'Anonymous';
  const comment = clean_(d.comment, 1000);
  if (!restaurant || !comment) return json_({ ok: false, error: 'Please add a comment.' });

  const cache = CacheService.getScriptCache();
  const recent = Number(cache.get('posts') || 0);
  if (recent > 30) return json_({ ok: false, error: 'Lots of comments right now. Try again in a few minutes.' });
  cache.put('posts', String(recent + 1), 600);

  const lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    const sh = SpreadsheetApp.getActive().getSheetByName(TAB_C);
    sh.appendRow([new Date(), safe_(restaurant), safe_(name), safe_(comment), '']);
  } finally { lock.releaseLock(); }
  cache.remove('payload');
  return json_({ ok: true });
}

/* ------------------------------------------------------------------ */
function readRestaurants_() {
  const sh = SpreadsheetApp.getActive().getSheetByName(TAB_R);
  const values = sh.getDataRange().getValues();
  const head = values.shift().map(function (h) { return String(h).trim().toLowerCase(); });
  const col = {}; head.forEach(function (h, i) { col[h] = i; });
  const get = function (row, k) { return col[k] === undefined ? '' : row[col[k]]; };
  const tz = Session.getScriptTimeZone();
  let geocodes = 0;

  const out = [];
  values.forEach(function (row, i) {
    const name = String(get(row, 'name')).trim();
    if (!name) return;
    let lat = num_(get(row, 'lat')), lng = num_(get(row, 'lng'));
    const address = String(get(row, 'address')).trim();

    // New spot with an address but no coordinates → look it up once and save it to the sheet.
    if ((lat === null || lng === null) && address && geocodes < 8) {
      geocodes++;
      try {
        const res = Maps.newGeocoder().geocode(/chicago|evanston|, il\b/i.test(address) ? address : address + ', Chicago, IL');
        if (res.status === 'OK' && res.results.length) {
          lat = res.results[0].geometry.location.lat;
          lng = res.results[0].geometry.location.lng;
          sh.getRange(i + 2, col['lat'] + 1, 1, 1).setValue(lat);
          sh.getRange(i + 2, col['lng'] + 1, 1, 1).setValue(lng);
        }
      } catch (err) { /* leave it without a pin */ }
    }

    const priceRaw = get(row, 'price');
    const price = typeof priceRaw === 'number' ? priceRaw : (String(priceRaw).match(/\$/g) || []).length || null;
    const ratings = { food: num_(get(row, 'food')), value: num_(get(row, 'value')), vibe: num_(get(row, 'vibe')), service: num_(get(row, 'service')) };
    const anyRating = Object.keys(ratings).some(function (k) { return ratings[k] !== null; });

    let lv = get(row, 'last_visited');
    if (lv instanceof Date) lv = Utilities.formatDate(lv, tz, 'MMM yyyy');
    lv = String(lv).trim();

    const url = String(get(row, 'reserve_url')).trim();
    const reserve = url ? { url: url, via: String(get(row, 'reserve_via')).trim() || 'Website' } : null;
    const rnote = String(get(row, 'reserve_note')).trim();
    if (reserve && rnote) reserve.note = rnote;

    out.push({
      name: name,
      status: STATUS_FROM_SHEET[String(get(row, 'status')).trim().toLowerCase()] || 'been',
      tag: String(get(row, 'tag')).trim().toLowerCase(),
      category: String(get(row, 'category')).trim(),
      type: String(get(row, 'type')).trim(),
      neighborhood: String(get(row, 'neighborhood')).trim(),
      price: price,
      ratings: anyRating ? ratings : null,
      lastVisited: lv,
      notes: String(get(row, 'notes')).split(/\n+/).map(function (s) { return s.trim(); }).filter(String),
      address: address,
      lat: lat, lng: lng,
      reserve: reserve
    });
  });
  return out;
}

function readComments_() {
  const sh = SpreadsheetApp.getActive().getSheetByName(TAB_C);
  if (!sh || sh.getLastRow() < 2) return [];
  const values = sh.getRange(2, 1, sh.getLastRow() - 1, C_HEADERS.length).getValues();
  return values
    .filter(function (r) { return r[3] && !String(r[4]).trim(); })
    .map(function (r) {
      return { date: r[0] instanceof Date ? r[0].toISOString() : String(r[0]), restaurant: String(r[1]), name: String(r[2]), comment: String(r[3]) };
    });
}

function num_(x) {
  if (typeof x === 'number') return x;
  const s = String(x).trim();
  if (!s) return null;
  const f = parseFloat(s);
  return isNaN(f) ? null : f;
}
function clean_(s, max) { return String(s || '').replace(/[\u0000-\u0008\u000B-\u001F]/g, '').trim().slice(0, max); }
function safe_(s) { return /^[=+\-@]/.test(s) ? "'" + s : s; }   // never let a comment become a formula
function json_(o) {
  return ContentService.createTextOutput(typeof o === 'string' ? o : JSON.stringify(o)).setMimeType(ContentService.MimeType.JSON);
}
