import { notes } from "./notes.js";
import { cardId } from "./openEditModal.js";
import { render } from "./render.js";
import { textEditInput, titleEditInput } from "./view.js";

export function noteEditing() {
  const allNotes = document.querySelectorAll('.notes__note-card');
    
  allNotes.forEach((item) => {
    if (item.dataset.id === cardId) {

      notes[cardId].title = titleEditInput.value;
      notes[cardId].text = textEditInput.value;
      localStorage.setItem('notes', JSON.stringify(notes));

      window.modalEditingCard.close();
      render();
    };
  });
};