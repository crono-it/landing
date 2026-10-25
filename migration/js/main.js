const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('#main-menu');

function closeMenu() {
  nav.classList.remove('is-open');
  toggle.setAttribute('aria-expanded', 'false');
  toggle.setAttribute('aria-label', 'Abrir menú');
}

toggle.addEventListener('click', () => {
  const expanded = toggle.getAttribute('aria-expanded') === 'true';
  nav.classList.toggle('is-open', !expanded);
  toggle.setAttribute('aria-expanded', String(!expanded));
  toggle.setAttribute('aria-label', expanded ? 'Abrir menú' : 'Cerrar menú');
});

nav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape') closeMenu();
});

document.querySelector('#year').textContent = new Date().getFullYear();

// Dialogs

const dialogs = document.querySelectorAll('.legal-dialog');

document.addEventListener('click', (event) => {
  const openTrigger = event.target.closest('[data-open-dialog]');

  if (openTrigger) {
    event.preventDefault();

    const dialog = document.getElementById(
      openTrigger.dataset.openDialog
    );

    if (!(dialog instanceof HTMLDialogElement)) {
      return;
    }

    const currentDialog = openTrigger.closest('dialog');

    if (currentDialog?.open) {
      currentDialog.close();
    }

    if (!dialog.open) {
      dialog.showModal();
    }

    return;
  }

  const closeTrigger = event.target.closest('[data-close-dialog]');

  if (closeTrigger) {
    closeTrigger.closest('dialog')?.close();
  }
});

dialogs.forEach((dialog) => {
  dialog.addEventListener('click', (event) => {
    if (event.target === dialog) {
      dialog.close();
    }
  });
});
