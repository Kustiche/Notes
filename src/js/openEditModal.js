import { textEditInput, timeEdit, titleEditInput } from "./view.js";

export let cardId = '';

export function openEditModal(e) {
  const targetClassName = e.target.className;
  const isClickCard = targetClassName === 'notes__note-card' || targetClassName === 'notes__subtitle' || targetClassName === 'notes__text';

  if (isClickCard) {
    const card = e.target.closest('.notes__note-card');
    const cardTitle = card.querySelector('.notes__subtitle');
    const cardText = card.querySelector('.notes__text');
    const cardTime = card.querySelector('.notes__time');
    const formEditingNote = document.getElementById('formEditingNote');

    cardId = card.dataset.id;
    formEditingNote.style.backgroundColor = `${card.style.backgroundColor}`;
    titleEditInput.value = cardTitle.textContent;
    textEditInput.value = cardText.textContent;
    timeEdit.textContent = cardTime.textContent;
    window.modalEditingCard.showModal();
  };
};