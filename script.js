'use strict';
const btnOpenModal = document.querySelectorAll('.show-modal');
const btnCloseModal = document.querySelector('.close-modal');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
console.log(btnOpenModal, modal, overlay);
for (let i = 0; i < btnOpenModal.length; i++) {
  btnOpenModal[i].addEventListener('click', function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  });
}
function closemodal() {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}

btnCloseModal.addEventListener('click', closemodal);
overlay.addEventListener('click', closemodal);
console.log(document.querySelector('.overlay'));
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    {
      closemodal();
    }
  }
});
