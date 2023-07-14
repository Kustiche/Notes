import moment from "moment/moment.js";
import { contentNotesArray } from "./contentNotesArray.js";
import { render } from "./render.js";
import { formInputText, formInputTitle, note, notesInner } from "./view.js";

const MONTH = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'октябрь', 'Ноябрь', 'Декабрь',]

function Note(title, text) {
  this.title = title;
  this.text = text;
  this.time = moment();
};

export function addNoteArray() {
  const note = new Note(formInputTitle.value, formInputText.value);

  contentNotesArray.push(note);
  render();
};

export function createNote(title, text, time) {
  const item = note.content.cloneNode(true);
  item.querySelector('.notes__subtitle').textContent = title;
  item.querySelector('.notes__text').textContent = text;
  item.querySelector('.notes__descr').textContent = `${MONTH[moment(time).month()]} ${moment(time).date()}, ${moment(time).year()}`;

  notesInner.append(item);
};