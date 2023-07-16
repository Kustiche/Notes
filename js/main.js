import { addNoteArray } from "./createNote.js";
import { deleteNote } from "./deleteNote.js";
import { addNoteBtn, addNoteForm, modalFormCloseBtn, modalFormErrorCloseBtn, notesInner } from "./view.js";

function openModalForm() {
  window.modalForm.showModal();
};

export function closeModalForm() {
  window.modalForm.close();
};

function closeModalFormError() {
  window.modalFormError.close();
};

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
  deleteNote(e);
});