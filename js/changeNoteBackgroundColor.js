import { changeNoteId } from "./changeNote.js";
import { notes } from "./notes.js";

export function changeNoteBackground(e) {
  const targetClassName = e.target.className;
  const isClickColor = targetClassName === 'modal__color-btn btn-reset' || targetClassName === 'modal__img-btn btn-reset';

  if (isClickColor) {
    const cards = document.querySelectorAll('.notes__note-card');

    cards.forEach((item) => {
      if (changeNoteId === item.dataset.id) {
        if (targetClassName === 'modal__color-btn btn-reset') {
          if (e.target.dataset.color === undefined) {
            item.style.backgroundColor = null;
            notes[changeNoteId].backgroundColor = null;
          }else {
            item.style.backgroundColor = e.target.dataset.color;
            notes[changeNoteId].backgroundColor = e.target.dataset.color;
          };
        }else if(targetClassName === 'modal__img-btn btn-reset') {
          if (e.target.dataset.imgUrl === undefined) {
            item.style.backgroundImage = null;
            notes[changeNoteId].backgroundImage = null;
          }else {
            item.style.backgroundImage = `linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), ${e.target.dataset.imgUrl}`;
            notes[changeNoteId].backgroundImage = `linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), ${e.target.dataset.imgUrl}`;
          };
        };

        window.modalChangeColor.close();
        localStorage.setItem('notes', JSON.stringify(notes));
      };
    });
  };
};