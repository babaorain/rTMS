// FAQ展開/收合
document.querySelectorAll('.faq-item').forEach(item => {
  item.addEventListener('click', () => {
    // 同時只開一個（如果需要）
    // document.querySelectorAll('.faq-item').forEach(i => i !== item && i.classList.remove('active'));
    item.classList.toggle('active');
  });
});

/**
 * 通用輪播元件初始化函式
 * @param {string} carouselId - 輪播內容容器的id
 * @param {string} prevId - 上一張按鈕的id
 * @param {string} nextId - 下一張按鈕的id
 */
function initCarousel(carouselId, prevId, nextId) {
  const carousel = document.getElementById(carouselId);
  const prev = document.getElementById(prevId);
  const next = document.getElementById(nextId);
  let pos = 0;

  function show() {
    const card = carousel.children[0];
    if (!card) return;
    // 取得實際卡片寬度（含外距，建議外距用margin-right只設最後一張為0）
    const cardStyle = window.getComputedStyle(card);
    const cardWidth = card.offsetWidth + parseFloat(cardStyle.marginRight || 0);
    carousel.style.transform = `translateX(${-pos * cardWidth}px)`;
  }

  prev.onclick = () => {
    if (pos > 0) pos--;
    show();
  };

  next.onclick = () => {
    if (pos < carousel.children.length - 1) pos++;
    show();
  };

  window.addEventListener('resize', show);
  show();
}

// 初始化多組輪播
initCarousel('videoCarousel', 'videoPrev', 'videoNext');
initCarousel('reviewCarousel', 'reviewPrev', 'reviewNext');
