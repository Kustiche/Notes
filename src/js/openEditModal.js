import { textEditInput, timeEdit, titleEditInput } from "./view.js";

export let cardId = '';

export function openEditModal(e) {
  const isClickCard = e.target.className === 'notes__note-card' || e.target.className === 'notes__subtitle' || e.target.className === 'notes__text';

  if (isClickCard) {
    const card = e.target.closest('.notes__note-card');
    const cardTitle = card.querySelector('.notes__subtitle');
    const cardText = card.querySelector('.notes__text');
    const cardTime = card.querySelector('.notes__time');

    cardId = card.dataset.id;
    titleEditInput.value = cardTitle.textContent;
    textEditInput.value = cardText.textContent;
    timeEdit.textContent = cardTime.textContent;
    window.modalEditingCard.showModal();
  };
};