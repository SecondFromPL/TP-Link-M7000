function copyToClipboard(button) {
  const codeBlock = button.nextElementSibling.querySelector('code');
  navigator.clipboard.writeText(codeBlock.innerText);
  const originalText = button.innerText;
  button.innerText = 'Skopiowano!';
  button.classList.replace('btn-outline-light', 'btn-success');
  setTimeout(() => {
    button.innerText = originalText;
    button.classList.replace('btn-success', 'btn-outline-light');
  }, 2000);
}

const backToTopBtn = document.getElementById("backToTopBtn");

window.onscroll = function() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
};

backToTopBtn.onclick = function() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};