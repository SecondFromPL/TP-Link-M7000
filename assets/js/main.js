document.addEventListener('click', function (event) {
  // Sprawdzamy, czy kliknięto przycisk kopiowania
  if (event.target.classList.contains('copy-btn')) {
    const button = event.target;
    const targetId = button.getAttribute('data-clipboard-target');
    const codeBlock = document.querySelector(targetId);
    
    // Kopiujemy wyłącznie tekst ze znacznika <code>. 
    // Prompt jest poza nim i nie jest zaznaczalny, więc go nie kopiujemy.
    navigator.clipboard.writeText(codeBlock.innerText);
    
    // Zmiana tekstu i stylu przycisku
    const originalText = button.innerText;
    button.innerText = 'Skopiowano!';
    button.classList.replace('btn-outline-light', 'btn-success');
    
    // Przywrócenie po 2 sekundach
    setTimeout(() => {
      button.innerText = originalText;
      button.classList.replace('btn-success', 'btn-outline-light');
    }, 2000);
  }
});

const backToTopBtn = document.getElementById("backToTopBtn");

window.onscroll = function() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
};

backToTopBtn.onclick = function() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};