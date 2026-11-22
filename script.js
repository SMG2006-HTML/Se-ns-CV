'use strict';

// Mobile navigation — works without external libraries.
const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.site-nav');
if (menuButton && navigation) {
  menuButton.addEventListener('click', () => {
    const expanded = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!expanded));
    menuButton.setAttribute('aria-label', expanded ? 'Open menu' : 'Close menu');
    navigation.classList.toggle('is-open', !expanded);
  });
  navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Open menu');
    navigation.classList.remove('is-open');
  }));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
      menuButton.setAttribute('aria-expanded', 'false');
      menuButton.setAttribute('aria-label', 'Open menu');
      navigation.classList.remove('is-open');
    }
  });
}

// Project category filters with accessible state.
const filterButtons = [...document.querySelectorAll('[data-filter]')];
const projectCards = [...document.querySelectorAll('[data-category]')];
const projectCount = document.querySelector('[data-count]');
filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    const category = button.dataset.filter;
    let visibleCount = 0;
    filterButtons.forEach(item => item.setAttribute('aria-pressed', String(item === button)));
    projectCards.forEach(card => {
      const matches = category === 'all' || card.dataset.category.split(' ').includes(category);
      card.hidden = !matches;
      if (matches) visibleCount += 1;
    });
    if (projectCount) projectCount.textContent = `${visibleCount} project${visibleCount === 1 ? '' : 's'} shown`;
  });
});

// Copy email without exposing a non-functional contact form.
const copyEmailButton = document.querySelector('[data-copy-email]');
const copyStatus = document.querySelector('[data-copy-status]');
if (copyEmailButton && copyStatus) {
  copyEmailButton.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText('smacginnea@gmail.com');
      copyStatus.textContent = 'Email address copied.';
    } catch (error) {
      copyStatus.textContent = 'Copy unavailable in this browser. Select the email above to copy it.';
    }
  });
}

document.querySelectorAll('[data-year]').forEach(node => node.textContent = String(new Date().getFullYear()));
