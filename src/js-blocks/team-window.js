const openTeam = document.querySelector('[data-modal-team]');

const teamOverlay = document.querySelector('[data-overlay]');

openTeam.addEventListener('click', onOpenTeam);

teamOverlay.addEventListener('click', onOpenTeam);

function onOpenTeam() {
   teamOverlay.classList.toggle('is-hidden');
}
