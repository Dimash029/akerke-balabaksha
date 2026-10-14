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
function toggleMobileMenu() {
    const menu = document.getElementById('mobileMenu');
    const icon = document.getElementById('menuIcon');

    menu.classList.toggle('-translate-y-full');
    menu.classList.toggle('opacity-0');
    menu.classList.toggle('pointer-events-none');

    // Бургер ↔ крестик (SVG)
    const isOpen = !menu.classList.contains('opacity-0');
    icon.innerHTML = isOpen
        ? '<path stroke-linecap="round" stroke-linejoin="round" d="M6 6l12 12M6 18L18 6"/>'
        : '<path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"/>';
}
function openBalausaModal() {
    const modal = document.getElementById('balausaModal');
    const content = document.getElementById('balausaModalContent');
    
    modal.classList.remove('opacity-0', 'pointer-events-none');
    content.classList.remove('scale-95');
    content.classList.add('scale-100');
}

function closeBalausaModal() {
    const modal = document.getElementById('balausaModal');
    const content = document.getElementById('balausaModalContent');
    
    modal.classList.add('opacity-0', 'pointer-events-none');
    content.classList.remove('scale-100');
    content.classList.add('scale-95');
}

// Модалды терезенің сыртқы фонын басқан кезде жабылуы
document.getElementById('balausaModal').addEventListener('click', function(e) {
    if (e.target === this) {
        closeBalausaModal();
    }
});