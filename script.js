const content = window.siteContent;

const make = (tag, className, text) => {
  const element = document.createElement(tag);
  if (className) element.className = className;
  if (text) element.textContent = text;
  return element;
};

document.querySelectorAll("[data-content]").forEach((element) => {
  element.textContent = content.profile[element.dataset.content];
});

document.querySelectorAll('[data-link="scholar"]').forEach((link) => {
  link.href = content.profile.scholar;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
});

content.profile.researchAreas.forEach((area) => {
  document.querySelector("#research-areas").append(make("li", "", area));
});

content.research.forEach((paragraph) => {
  document.querySelector("#research-copy").append(make("p", "", paragraph));
});

content.experience.forEach((item) => {
  const row = make("li", "experience-item");
  const details = make("div");
  details.append(
    make("h3", "", item.role),
    make("p", "experience-organization", item.organization)
  );
  row.append(make("p", "experience-period", item.period), details);
  document.querySelector("#experience-list").append(row);
});

content.education.forEach((item) => {
  const row = make("li");
  row.append(
    make("p", "timeline-year", item.year),
    make("h3", "", `${item.degree} in ${item.field}`),
    make("p", "", item.school)
  );
  document.querySelector("#education-list").append(row);
});

const renderAuthors = (parent, authorLine) => {
  authorLine.split("; ").forEach((author, index, authors) => {
    const isJinsen = author.replace(/[\*#]/g, "") === content.profile.publicationAuthor;
    parent.append(make("span", isJinsen ? "author-highlight" : "", author));
    if (index < authors.length - 1) parent.append(document.createTextNode("; "));
  });
};

content.publications.forEach((paper) => {
  const item = make("li", "publication");
  const body = make("article", "publication-body");
  const meta = make("p", "publication-meta");
  meta.append(
    make("span", "publication-year", paper.year),
    make("span", "publication-venue", paper.venue)
  );
  const title = make("h3");
  const link = make("a", "", paper.title);
  link.href = paper.url;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  title.append(link);

  const authors = make("p", "publication-authors");
  renderAuthors(authors, paper.authors);
  body.append(meta, title, authors);
  item.append(body);
  document.querySelector("#publication-list").append(item);
});

content.teaching.forEach((course) => {
  const card = make("article", "course");
  const meta = make("div", "course-meta");
  meta.append(make("span", "", course.code), make("span", "", course.year));
  card.append(
    meta,
    make("h3", "", course.title),
    make("p", "course-role", course.role),
    make("p", "course-description", course.description)
  );
  document.querySelector("#teaching-list").append(card);
});

document.querySelector("#year").textContent = new Date().getFullYear();
