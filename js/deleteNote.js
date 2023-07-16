import { contentNotesArray } from "./contentNotesArray.js";
import { render } from "./render.js";

export function deleteNote(e) {
  const isClickCard = e.target.className === 'notes__card-btn btn-reset' || e.target.className === 'notes__card-points' || e.target.className === 'notes__delete';

  if (isClickCard) {
    const card = e.target.closest('.notes__note-card');
    const more = card.querySelector('.notes__more');
    const cardDeleteBtn = card.querySelector('.notes__delete');

    if (more.className === 'notes__more notes__more--hidden') {
      more.classList.remove('notes__more--hidden');
    }else {
      more.classList.add('notes__more--hidden');
    };

    if (e.target === cardDeleteBtn) {
      contentNotesArray.splice(Number(card.dataset.id), 1)
      localStorage.setItem('contentNotesArray', JSON.stringify(contentNotesArray));
      render();
    };
  };
};