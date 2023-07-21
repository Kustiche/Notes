import { changeNoteId } from "./changeNote.js";
import { notes } from "./notes.js";

export function changeNoteBackground(e) {
  const targetClassName = e.target.className;
  const isClickColor = targetClassName === 'modal__color-btn btn-reset' || targetClassName === 'modal__img-btn btn-reset';

  if (isClickColor) {
    const cards = document.querySelectorAll('.notes__note-card');

    cards.forEach((item) => {
      if (changeNoteId === item.dataset.id) {
        item.style.backgroundColor = e.target.dataset.color;
        notes[changeNoteId].backgroundColor = e.target.dataset.color;

        window.modalChangeColor.close();
        localStorage.setItem('notes', JSON.stringify(notes));
      };
    });
  };
};