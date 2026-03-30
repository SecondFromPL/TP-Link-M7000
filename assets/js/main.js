document.querySelectorAll('div.highlighter-rouge').forEach(function(block) {
  const btn = document.createElement('button');
  btn.className = 'btn btn-outline-light copy-btn';
  btn.innerText = 'Kopiuj';
  btn.onclick = function() {
    const codeBlock = block.querySelector('code');
    navigator.clipboard.writeText(codeBlock.innerText);
    const originalText = btn.innerText;
    btn.innerText = 'Skopiowano!';
    btn.classList.replace('btn-outline-light', 'btn-success');
    setTimeout(() => {
      btn.innerText = originalText;
      btn.classList.replace('btn-success', 'btn-outline-light');
    }, 2000);
  };
  block.appendChild(btn);
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