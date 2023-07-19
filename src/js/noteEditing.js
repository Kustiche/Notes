import { contentNotesArray } from "./contentNotesArray.js";
import { cardId } from "./openEditModal.js";
import { render } from "./render.js";
import { textEditInput, titleEditInput } from "./view.js";

export function noteEditing() {
  const allNotes = document.querySelectorAll('.notes__note-card');
    
  allNotes.forEach((item) => {
    if (item.dataset.id === cardId) {

      contentNotesArray[cardId].title = titleEditInput.value;
      contentNotesArray[cardId].text = textEditInput.value;
      localStorage.setItem('contentNotesArray', JSON.stringify(contentNotesArray));

      window.modalEditingCard.close();
      render();
    };
  });
};