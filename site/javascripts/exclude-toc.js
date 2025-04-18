window.addEventListener("load", function () {
  setTimeout(() => {
    const excludedHeaders = document.querySelectorAll("details.note h2, details.note h3");

    excludedHeaders.forEach(function (header) {
      const id = header.id;
      if (!id) return;

      const tocLink = document.querySelector(`.md-nav__link[href="#${id}"]`);
      if (tocLink) {
        const tocItem = tocLink.closest(".md-nav__item");
        if (tocItem) {
          tocItem.style.setProperty("display", "none", "important");
        }
      }
    });
  }, 500); // wait half a second for TOC to load
});