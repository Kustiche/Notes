import moment from "moment/moment.js";
import { notes } from "./notes.js";
import { render } from "./render.js";
import { formInputText, formInputTitle, noteTemplate, notesInner } from "./view.js";
import { closeModalForm } from "./main.js";

const month = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];

let index = 0;

function Note(title, text) {
  this.title = title;
  this.text = text;
  this.time = moment();
  this.index = index;
  this.backgroundColor = '#ffffff';
};

export function addNoteArray() {
  const InputTitle = formInputTitle.value;
  const InputText = formInputText.value;
  const isNotesInputValue = InputTitle !== '' || InputText !== '';

  if (isNotesInputValue) {
    const note = new Note(InputTitle, InputText);

    ++index;

    notes.push(note);
    render();

    formInputTitle.value = '';
    formInputText.value = '';
    localStorage.setItem('notes', JSON.stringify(notes));
  }else {
    closeModalForm();
    window.modalFormError.showModal();
  };
};

export function createNote(title, text, time, index, backgroundColor) {
  const item = noteTemplate.content.cloneNode(true);
  const card = item.querySelector('.notes__note-card');
  const cardTitle = item.querySelector('.notes__subtitle');
  const cardText = item.querySelector('.notes__text');
  const cardTime = item.querySelector('.notes__time');

  card.dataset.id = index;

  if (title === '') {
    cardTitle.textContent = 'Без названия';
  }else {
    cardTitle.textContent = title;
  };

  if (text === '') {
    cardText.textContent = 'Пустая заметка';
  }else {
    cardText.textContent = text;
  };

  cardTime.textContent = `${month[moment(time).month()]} ${moment(time).date()}, ${moment(time).year()}`;

  card.style.backgroundColor = backgroundColor;

  notesInner.append(item);
};