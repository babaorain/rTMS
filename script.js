// FAQ展開
document.querySelectorAll('.faq-item').forEach(item => {
  item.addEventListener('click', () => {
    item.classList.toggle('active');
  });
});

// 通用輪播元件
function initCarousel(carouselId, prevId, nextId) {
  const carousel = document.getElementById(carouselId);
  const prev = document.getElementById(prevId);
  const next = document.getElementById(nextId);
  let pos = 0;
  function show() {
    const card = carousel.children[0];
    if (!card) return;
    const cardWidth = card.offsetWidth + 18;
    carousel.style.transform = `translateX(${-pos * cardWidth}px)`;
  }
  prev.onclick = () => { if (pos > 0) pos--; show(); }
  next.onclick = () => { if (pos < carousel.children.length - 1) pos++; show(); }
  window.addEventListener('resize', show);
  show();
}
initCarousel('videoCarousel', 'videoPrev', 'videoNext');
initCarousel('reviewCarousel', 'reviewPrev', 'reviewNext');

