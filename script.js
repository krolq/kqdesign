// ==========================================================================
// SISTEMA KQ — INTERAÇÕES LEVES (FAQ & MODAL DE PROJETOS)
// ==========================================================================

// 1. Acordeão do FAQ (Apenas um aberto por vez)
document.addEventListener('DOMContentLoaded', () => {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const trigger = item.querySelector('.faq-trigger');

    trigger.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      // Fecha todos os itens
      faqItems.forEach(i => i.classList.remove('active'));

      // Abre apenas o clicado se não estava ativo
      if (!isActive) {
        item.classList.add('active');
      }
    });
  });
});

// 2. Modal Estilo Obra de Arte para os Projetos
function openModal(title, category, imgSrc, description) {
  document.getElementById('modalTitle').innerText = title;
  document.getElementById('modalCat').innerText = category;
  document.getElementById('modalImg').src = imgSrc;
  document.getElementById('modalDesc').innerText = description;

  const modal = document.getElementById('projectModal');
  modal.classList.add('open');
}

function closeModal(event) {
  if (event.target.id === 'projectModal') {
    closeModalForce();
  }
}

function closeModalForce() {
  const modal = document.getElementById('projectModal');
  modal.classList.remove('open');
}
