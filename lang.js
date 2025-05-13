window.addEventListener('scroll', () => {
  const bar = document.querySelector('.top-bar');
  if (window.scrollY > 100) {
    bar.style.transform = 'translateY(-100%)';
  } else {
    bar.style.transform = 'translateY(0)';
  }
});
