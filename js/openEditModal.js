import { textEditInput, titleEditInput } from "./view";

export let cardId = '';

export function openEditModal(e) {
  const isClickCard = e.target.className === 'notes__note-card' || e.target.className === 'notes__subtitle' || e.target.className === 'notes__text';

  if (isClickCard) {
    const card = e.target.closest('.notes__note-card');
    const cardTitle = card.querySelector('.notes__subtitle');
    const cardText = card.querySelector('.notes__text');

    cardId = card.dataset.id;
    titleEditInput.value = cardTitle.textContent;
    textEditInput.value = cardText.textContent;
    window.modalEditingCard.showModal();
  };
};