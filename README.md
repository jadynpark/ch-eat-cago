# Ch-eat-cago 🍕

JP's interactive Chicago restaurant map → **https://jadynpark.github.io/ch-eat-cago/**

The list lives in a **Google Sheet**: edit a cell and the site updates. Friends can comment on any spot or suggest new ones, and their comments land in the same Sheet.

---

## Connect the Google Sheet (one time, ~10 min)

1. **Push this repo first** (`git add . && git commit -m "..." && git push`), because the setup script imports your list from the live site.
2. Go to **https://sheets.new** and name the new sheet something like *Ch-eat-cago*.
3. In the Sheet, open **Extensions → Apps Script**. Delete the sample code, paste in everything from [`apps-script/Code.gs`](apps-script/Code.gs), and press **⌘S**.
4. In the toolbar's function dropdown, choose **`setup`** and click **▶ Run**.
   Google will ask for permission: **Review permissions** → pick your account → *"Google hasn't verified this app"* → **Advanced** → **Go to … (unsafe)** → **Allow**. (It's your own script, so that warning is expected.)
   Back in the Sheet, you'll now have a **Restaurants** tab with all your spots and an empty **Comments** tab.
5. In Apps Script, click **Deploy → New deployment** → ⚙️ → **Web app**:
   - *Execute as:* **Me**
   - *Who has access:* **Anyone**
   Click **Deploy** and copy the **Web app URL** (it ends in `/exec`).
6. On GitHub, open `config.js`, click ✏️, paste the URL between the quotes, and commit:
   ```js
   const SHEET_API = "https://script.google.com/macros/s/AKfycb.../exec";
   ```
   About a minute later the site reads from your Sheet, and a **💬 Friends** tab appears.

## Updating your list (in the Sheet, works in the Google Sheets phone app too)

| To… | Do this |
|---|---|
| Change a review | Edit `food` / `value` / `vibe` / `service` (0–5, halves OK) or `notes` |
| Add bullet points | Put each bullet on its own line in the `notes` cell (**⌥ Option + Enter** for a new line) |
| Log a visit | Type the year or month in `last_visited`, e.g. `2025` or `Oct 2025` |
| Add a want-to-go | New row → `status` = **Want to go**, plus name, category, address |
| Add a new spot | New row with at least `name`, `status`, `category`, `address`. The pin location (`lat`/`lng`) fills in automatically the next time the site loads. |
| Mark a favorite / skip | `tag` = **Fave** or **Skip** |
| Mark closed | `status` = **Closed** (hidden by default) |

Changes show up within ~30 seconds (refresh the page).

## Friend comments

- Each card has **＋ Leave a comment**. The **💬 Friends** tab has a **Suggest a spot** form for places not on the list.
- No login needed. Every comment is added as a row in the **Comments** tab.
- To remove one: delete the row, or type `x` in its `hide` column.
- Comments are matched by restaurant name, so if you rename a spot in the Sheet, its old comments move to "Places friends recommend."

## Good to know

- `restaurants.js` is now just a **backup** that the site uses if the Sheet can't be reached. It isn't updated automatically from the Sheet.
- If you ever change `Code.gs`: **Deploy → Manage deployments → ✏️ → Version: New version → Deploy** (the URL stays the same).
- Map: MapLibre GL + OpenFreeMap vector tiles, © OpenStreetMap contributors (free, no API key).
- Prices, neighborhoods, and star ratings started as drafts guessed from my comments. Reservation links were found via web search in Oct 2026.
