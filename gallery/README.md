# Gallery photos

Browsers can't list a folder's files on their own (no server = no
directory listing), so the website reads a small index file instead:
`manifest.json`, right here in this folder.

## To add your ~15 photos

1. Drop your image files (`.jpg`, `.jpeg`, `.png`, `.webp`) straight
   into this `gallery/` folder. Simple, descriptive filenames work
   best since they're also used as the photo's alt text — e.g.
   `birthday-balloon-arch.jpg` instead of `IMG_4821.jpg`.
2. Regenerate `manifest.json` so the site knows the files exist:
   - **Easiest (no install needed):** open `manifest.json` and just
     type the filenames in, one per line, e.g.
     ```json
     [
       "birthday-balloon-arch.jpg",
       "proposal-candlelight.jpg",
       "gift-table-setup.jpg"
     ]
     ```
   - **Automatic:** if you have Node.js installed, run this from
     inside the `gallery` folder and it will scan for images and
     write `manifest.json` for you:
     ```
     node build-manifest.js
     ```
3. Refresh the site. The homepage gallery will pull straight from
   this folder in a bento-style grid, and clicking a photo opens the
   full slideshow/lightbox view.

If `manifest.json` is empty or missing, the site automatically shows
a set of placeholder photos instead, so the page is never left blank
while you're getting your real photos ready.
