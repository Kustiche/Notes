import moment from "moment/moment.js";
import { contentNotesArray } from "./contentNotesArray.js";
import { render } from "./render.js";
import { formInputText, formInputTitle, noteTemplate, notesInner } from "./view.js";
import { closeModalForm } from "./main.js";

const MONTH = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'октябрь', 'Ноябрь', 'Декабрь',];

let index = 0;

function Note(title, text) {
  this.title = title;
  this.text = text;
  this.time = moment();
  this.index = index;
};

export function addNoteArray() {
  const isNotesInputValue = formInputTitle.value !== '' || formInputText.value !== '';

  if (isNotesInputValue) {
    const note = new Note(formInputTitle.value, formInputText.value);

    ++index;

    contentNotesArray.push(note);
    render();

    formInputTitle.value = '';
    formInputText.value = '';
    localStorage.setItem('contentNotesArray', JSON.stringify(contentNotesArray));
  }else {
    closeModalForm();
    window.modalFormError.showModal();
  };
};

export function createNote(title, text, time, index) {
  const item = noteTemplate.content.cloneNode(true);

  item.querySelector('.notes__note-card').dataset.id = index;
  item.querySelector('.notes__subtitle').textContent = title;
  item.querySelector('.notes__text').textContent = text;
  item.querySelector('.notes__descr').textContent = `${MONTH[moment(time).month()]} ${moment(time).date()}, ${moment(time).year()}`;

  notesInner.append(item);
};