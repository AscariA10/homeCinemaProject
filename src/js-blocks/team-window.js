const openTeam = document.querySelector('[data-modal-team]');
// const closeTeam = document.querySelector('[data-close-team]');
const teamOverlay = document.querySelector('[data-overlay]');

openTeam.addEventListener('click', onOpenTeam);
// closeTeam.addEventListener('click', onOpenTeam);
teamOverlay.addEventListener('click', onOpenTeam);

function onOpenTeam() {
   teamOverlay.classList.toggle('is-hidden');
}

console.log(openTeam);
// console.log(closeTeam);
console.log(teamOverlay);
