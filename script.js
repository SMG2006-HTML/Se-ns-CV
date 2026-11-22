// Lightweight, dependency-free enhancements for GitHub Pages.
(() => {
  const filters = document.querySelectorAll('[data-filter]');
  const projects = document.querySelectorAll('[data-categories]');

  function applyFilter(category) {
    filters.forEach((button) => {
      button.setAttribute('aria-pressed', String(button.dataset.filter === category));
    });
    projects.forEach((project) => {
      const categories = (project.dataset.categories || '').split(' ');
      project.hidden = category !== 'all' && !categories.includes(category);
    });
  }

  filters.forEach((button) => {
    button.addEventListener('click', () => applyFilter(button.dataset.filter));
  });

  // When a visitor opens a direct link like projects.html#inventory,
  // ensure that project is always visible regardless of the current filter.
  window.addEventListener('hashchange', () => {
    if (location.hash) applyFilter('all');
  });

  const copyButton = document.querySelector('[data-copy-email]');
  if (copyButton) {
    copyButton.addEventListener('click', async () => {
      const result = document.querySelector('.copy-result');
      try {
        await navigator.clipboard.writeText(copyButton.dataset.copyEmail);
        if (result) result.textContent = 'Email address copied.';
      } catch (error) {
        if (result) result.textContent = 'Copy unavailable. You can select the email link above instead.';
      }
    });
  }
})();
