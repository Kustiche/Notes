import { notes } from "./notes.js";
import { render } from "./render.js";

export let changeNoteId = '';

function deleteNote(cardId) {
  notes.splice(Number(cardId), 1)
  localStorage.setItem('notes', JSON.stringify(notes));
  render();
};

function openModalChangeColor() {
  window.modalChangeColor.showModal();
};

export function changeNote(e) {
  const targetClassName = e.target.className;
  const isClickCard = targetClassName === 'notes__card-btn btn-reset' || targetClassName === 'notes__card-points' || targetClassName === 'notes__delete btn-reset' || targetClassName === 'notes__btn-change-color btn-reset';

  if (isClickCard) {
    const card = e.target.closest('.notes__note-card');
    const more = card.querySelector('.notes__more');
    const cardDeleteBtn = card.querySelector('.notes__delete');
    const cardChangeColorBtn = card.querySelector('.notes__btn-change-color');

    changeNoteId = card.dataset.id;

    if (more.className === 'notes__more notes__more--hidden') {
      const mores = document.querySelectorAll('.notes__more');
      mores.forEach((item) => {
        item.classList.add('notes__more--hidden');
      });

      more.classList.remove('notes__more--hidden');
    }else {
      more.classList.add('notes__more--hidden');
    };

    if (e.target === cardDeleteBtn) {
      deleteNote(changeNoteId);
    };

    if (e.target === cardChangeColorBtn) {
      openModalChangeColor();
    }
  }else {
    const allMore = document.querySelectorAll('.notes__more');
    allMore.forEach((item) => {
      item.classList.add('notes__more--hidden');
    });
  };
};