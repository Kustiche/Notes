import { contentNotesArray } from "./contentNotesArray.js";
import { createNote } from "./createNote.js";
import { notesInner } from "./view.js";

export function render() {
  notesInner.innerHTML = '';
  let index = 0;

  contentNotesArray.forEach((item) => {
    createNote(item.title, item.text, item.time, index);

    ++index;
  });
};