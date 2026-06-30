 const menuBtn = document.getElementById('menuBtn');
const navMenu = document.getElementById('navMenu');

// Abre/fecha o menu ao clicar no botão hamburguer
menuBtn.addEventListener('click', () => {
  const aberto = navMenu.classList.toggle('aberto');
  menuBtn.setAttribute('aria-expanded', aberto);
});

// Fecha o menu ao clicar em qualquer link de navegação
navMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('aberto');
    menuBtn.setAttribute('aria-expanded', false);
  });
});

// Fecha o menu ao clicar fora dele (em qualquer área da página)
document.addEventListener('click', (e) => {
  const cliqueForaDoMenu = !menuBtn.contains(e.target) && !navMenu.contains(e.target);
  if (cliqueForaDoMenu) {
    navMenu.classList.remove('aberto');
    menuBtn.setAttribute('aria-expanded', false);
  }
});
