const dialogs = document.querySelectorAll('.legal-dialog');

document.addEventListener('click', event => {
  const openTrigger = event.target.closest('[data-open-dialog]');

  if (openTrigger) {
    event.preventDefault();

    const dialog = document.getElementById(
      openTrigger.dataset.openDialog
    );

    if (!(dialog instanceof HTMLDialogElement)) return;

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

dialogs.forEach(dialog => {
  dialog.addEventListener('click', event => {
    if (event.target === dialog) {
      dialog.close();
    }
  });
});
