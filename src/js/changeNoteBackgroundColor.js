import { changeNoteId } from "./changeNote.js";
import { notes } from "./notes.js";

export function changeNoteBackground(e) {
  const isClickColor = e.target.className === 'modal__color-btn btn-reset' || e.target.className === 'modal__img-btn btn-reset';

  if (isClickColor) {
    const cards = document.querySelectorAll('.notes__note-card');

    cards.forEach((item) => {
      if (changeNoteId === item.dataset.id) {
        if (e.target.dataset.color === 'none') {
          item.style.backgroundColor = '#ffffff';
          notes[changeNoteId].backgroundColor = '#ffffff';
        }else if(e.target.dataset.color === 'sycamore') {
          item.style.backgroundColor = '#AB9A3F';
          notes[changeNoteId].backgroundColor = '#AB9A3F';
        }else if(e.target.dataset.color === 'cerise-red') {
          item.style.backgroundColor = '#DE3574';
          notes[changeNoteId].backgroundColor = '#DE3574';
        }else if(e.target.dataset.color === 'cerise') {
          item.style.backgroundColor = '#E326CB';
          notes[changeNoteId].backgroundColor = '#E326CB';
        }else if(e.target.dataset.color === 'picton-blue') {
          item.style.backgroundColor = '#399DF3';
          notes[changeNoteId].backgroundColor = '#399DF3';
        }else if(e.target.dataset.color === 'bright-turquoise') {
          item.style.backgroundColor = '#39F3D9';
          notes[changeNoteId].backgroundColor = '#39F3D9';
        }else if(e.target.dataset.color === 'confetti') {
          item.style.backgroundColor = '#E6DF51';
          notes[changeNoteId].backgroundColor = '#E6DF51';
        }else if(e.target.dataset.color === 'tumbleweed') {
          item.style.backgroundColor = '#DDAF88';
          notes[changeNoteId].backgroundColor = '#DDAF88';
        }else if(e.target.dataset.color === 'blue-bell') {
          item.style.backgroundColor = '#8787C5';
          notes[changeNoteId].backgroundColor = '#';
        }else if(e.target.dataset.color === 'wewak') {
          item.style.backgroundColor = '#F39996';
          notes[changeNoteId].backgroundColor = '#F39996';
        };

        window.modalChangeColor.close();
        localStorage.setItem('notes', JSON.stringify(notes));
      };
    });
  };
};