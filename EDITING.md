# Editing the website

The site has no build step and no dependencies. Most updates only require one file.

## Change text, links, publications, or teaching

Open **`content.js`**. It contains all personal information in labeled sections:

- `profile` — display name, publication-author name, introduction, obfuscated email text, Google Scholar link, and research topics
- `research` — the two About/Research paragraphs
- `experience` — current and previous professional roles
- `education` — degrees and schools
- `publications` — papers, authors, venues, years, and links
- `teaching` — course information

Text belongs inside quotes. Keep a comma after every item except the last item in a list.

To add a publication, copy an existing block inside `publications`, paste it above or below another block, and edit its six fields. Separate author names with semicolons. Write your own name exactly as `Jinsen Li` so the site highlights it automatically.

## Change colors

Open **`style.css`** and edit the color values under `:root` at the very top. The rest of the design uses those variables automatically.

## Preview locally

Double-click `index.html`, or run this command in the site folder:

```powershell
python -m http.server 8000
```

Then open <http://localhost:8000>.

## Publish

Commit and push these files to the default branch of the `JinsenLi.github.io` repository. GitHub Pages will update the public site automatically.
