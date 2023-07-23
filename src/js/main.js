import { notes } from "./notes.js";
import { addNoteArray } from "./createNote.js";
import { changeNote } from "./changeNote.js";
import { noteEditing } from "./noteEditing.js";
import { openEditModal } from "./openEditModal.js";
import { render } from "./render.js";
import { addNoteBtn, addNoteForm, checkbox, formEditingNote, modalChangeColors, modalEditingCloseBtn, modalFormCloseBtn, modalFormColorCloseBtn, modalFormErrorCloseBtn, notesInner, sectionNotes, switchBackgroundBtn } from "./view.js";
import { changeNoteBackground } from "./changeNoteBackgroundColor.js";

function openModalForm() {
  window.modalForm.showModal();
};

export function closeModalForm() {
  window.modalForm.close();
};

function closeModalFormError() {
  window.modalFormError.close();
};

function closeModalFormColor() {
  window.modalChangeColor.close();
};

function closeModalFormEditing() {
  window.modalEditingCard.close();
};

function localRender() {
  if (notes.length !== 0) {
    render();
  };

  sectionNotes.style.backgroundColor = JSON.parse(localStorage.getItem('sectionBackground'));

  if (sectionNotes.style.backgroundColor === 'rgb(93, 192, 96)' || sectionNotes.style.backgroundColor === '') {
    checkbox.checked = false;
  }else {
    checkbox.checked = true;
  }
};

function themeSwitch() {
  if (sectionNotes.style.backgroundColor === 'rgb(93, 192, 96)' || sectionNotes.style.backgroundColor === '') {
    sectionNotes.style.backgroundColor = '#427043';
    localStorage.setItem('sectionBackground', JSON.stringify('#427043'));
  }else {
    sectionNotes.style.backgroundColor = '#5DC060';
    localStorage.setItem('sectionBackground', JSON.stringify('#5DC060'));
  };
};

document.addEventListener('DOMContentLoaded', () => {
  localRender();
});

addNoteBtn.addEventListener('click', () => {
  openModalForm();
});

modalFormCloseBtn.addEventListener('click', () => {
  closeModalForm();
});

modalFormErrorCloseBtn.addEventListener('click', () => {
  closeModalFormError();
});

modalFormColorCloseBtn.addEventListener('click', () => {
  closeModalFormColor();
});

modalEditingCloseBtn.addEventListener('click', () => {
  closeModalFormEditing();
});

addNoteForm.addEventListener('submit', (e) => {
  e.preventDefault();

  closeModalForm();
  addNoteArray();
});

notesInner.addEventListener('click', (e) => {
  openEditModal(e);
  changeNote(e);
});

formEditingNote.addEventListener('submit', (e) => {
  e.preventDefault();

  noteEditing();
});

modalChangeColors.addEventListener('click', (e) => {
  changeNoteBackground(e);
});

switchBackgroundBtn.addEventListener('click', () => {
  themeSwitch();
});