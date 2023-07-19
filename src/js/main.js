import { contentNotesArray } from "./contentNotesArray.js";
import { addNoteArray } from "./createNote.js";
import { deleteNote } from "./deleteNote.js";
import { noteEditing } from "./noteEditing.js";
import { openEditModal } from "./openEditModal.js";
import { render } from "./render.js";
import { addNoteBtn, addNoteForm, formEditingNote, modalFormCloseBtn, modalFormErrorCloseBtn, notesInner } from "./view.js";

function openModalForm() {
  window.modalForm.showModal();
};

export function closeModalForm() {
  window.modalForm.close();
};

function closeModalFormError() {
  window.modalFormError.close();
};

function localRender() {
  if (contentNotesArray.length !== 0) {
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

addNoteForm.addEventListener('submit', (e) => {
  e.preventDefault();

  closeModalForm();
  addNoteArray();
});

notesInner.addEventListener('click', (e) => {
  openEditModal(e);
  deleteNote(e);
});

formEditingNote.addEventListener('submit', (e) => {
  e.preventDefault();

  noteEditing();
});