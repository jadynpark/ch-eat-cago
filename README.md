# Ch-eat-cago 🍕

JP's interactive Chicago restaurant map.

## Put it on GitHub Pages (about 5 minutes)

**Option A: in the browser, no terminal needed**

1. Go to https://github.com/new and create a **public** repo. Name it something like `ch-eat-cago`.
2. On the new repo page, click **"uploading an existing file"**, drag in `index.html`, `restaurants.js`, and `README.md`, then click **Commit changes**.
3. Go to **Settings → Pages**. Under "Build and deployment", set Source = **Deploy from a branch**, Branch = **main** / **(root)**, then click **Save**.
4. After about a minute the site will be live at **https://jadynpark.github.io/ch-eat-cago/**

> If you'd rather have it at `https://jadynpark.github.io/`, name the repo `jadynpark.github.io` instead.

**Option B: terminal**

```bash
cd chi-eats
git init && git add . && git commit -m "Ch-eat-cago"
git branch -M main
git remote add origin https://github.com/jadynpark/ch-eat-cago.git
git push -u origin main
```
Then turn on Pages as in step 3 above.

## Updating the list

Everything lives in `restaurants.js`. To add a spot, copy an existing entry and edit it:

```js
{
  "name": "New Place",
  "cuisine": "Thai",
  "neighborhood": "Logan Square",
  "price": 2,                      // 1–4  →  $ to $$$$
  "section": "Japanese/Seafood/Asian", // sets the pin color; must match one of the 4 sections
  "lat": 41.9231, "lng": -87.7093, // in Google Maps, right-click the spot and click the numbers to copy them
  "address": "123 N Somewhere Ave",
  "notes": ["First comment", "Second comment"],
  "tags": ["fave"]                 // optional: fave, skip, wishlist, closed, maybe-closed
}
```

Commit the change on GitHub (the pencil icon edits the file in your browser) and the site updates within about a minute.

## Notes

- Map tiles © OpenStreetMap contributors and CARTO (free, no API key needed).
- Prices and neighborhoods are estimates. Change any you disagree with.
