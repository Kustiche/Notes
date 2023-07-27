import { notes } from "./notes.js";
import { createNote } from "./createNote.js";
import { notesInner } from "./view.js";

export function render() {
  notesInner.innerHTML = '';
  let index = 0;

  notes.forEach((item) => {
    createNote(item.title, item.text, item.time, index, item.backgroundColor, item.backgroundImage);

    ++index;
  });
};