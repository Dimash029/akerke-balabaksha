// script.js — Интерактивтілік мен Модальды терезе логикасы

function openModal() {
    const overlay = document.getElementById('modalOverlay');
    const container = document.getElementById('modalContainer');
    
    overlay.classList.remove('hidden');
    setTimeout(() => {
        overlay.classList.remove('opacity-0');
        container.classList.remove('scale-95');
    }, 10);
}

function closeModal() {
    const overlay = document.getElementById('modalOverlay');
    const container = document.getElementById('modalContainer');
    
    overlay.classList.add('opacity-0');
    container.classList.add('scale-95');
    setTimeout(() => {
        overlay.classList.add('hidden');
    }, 300);
}

function handleFormSubmit(event) {
    event.preventDefault();
    alert('Өтінішіңіз сәтті қабылданды! Жақында менеджеріміз сізге хабарласады.');
    closeModal();
}