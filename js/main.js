import { addNoteArray } from "./createNote.js";
import { addNoteBtn, addNoteForm,  } from "./view.js";

function openModalForm() {
  window.modalForm.showModal();
};

function closeModalForm() {
  window.modalForm.close();
};

addNoteBtn.addEventListener('click', () => {
  openModalForm()
});

addNoteForm.addEventListener('submit', (e) => {
  e.preventDefault();

  addNoteArray();
  closeModalForm()
})