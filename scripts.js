window.addEventListener('DOMContentLoaded', () => {
      document.documentElement.classList.add('fade-in');
      document.querySelectorAll('a:not([target="_blank"])').forEach(link => {
        const href = link.getAttribute('href');
        if (!href || href.startsWith('#')) return;
        link.addEventListener('click', e => {
          e.preventDefault();
          document.documentElement.classList.remove('fade-in');
          document.documentElement.classList.add('fade-out');
          setTimeout(() => { window.location.href = href; }, 500);
        });
      });
    });