document.addEventListener("DOMContentLoaded", function () {
  // Select all headers within <details class="notoc">
  const excludedHeaders = document.querySelectorAll("details.note h2, details.note h3");
  console.log(excludedHeaders)
  excludedHeaders.forEach(function (header) {
    // Get the ID of the header
    const id = header.id;
    if (!id) return;

    // Find the corresponding TOC link
    const tocLink = document.querySelector(`.md-nav__link[href="#${id}"]`);

    if (tocLink) {
      // Hide the TOC entry
      const tocItem = tocLink.closest(".md-nav__item");
      console.log(tocItem)
      if (tocItem) {
        tocItem.style.setProperty("display", "none", "important");
      }
    }
  });
});