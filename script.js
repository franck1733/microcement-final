document.querySelectorAll('.option').forEach(el => {
  el.addEventListener('click', () => {
    el.classList.toggle('selected');
  });
});
