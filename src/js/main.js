import { notes } from "./notes.js";
import { addNoteArray } from "./createNote.js";
import { changeNote } from "./changeNote.js";
import { noteEditing } from "./noteEditing.js";
import { openEditModal } from "./openEditModal.js";
import { render } from "./render.js";
import { addNoteBtn, addNoteForm, formEditingNote, modalChangeColors, modalFormCloseBtn, modalFormColorCloseBtn, modalFormErrorCloseBtn, notesInner } from "./view.js";
import { changeNoteBackground } from "./changeNoteBackgroundColor.js";
const ghpages = require('gh-pages');

ghpages.publish(dir, {
  src: 'dist/**/*',
}, callback);

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

function localRender() {
  if (notes.length !== 0) {
    render();
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