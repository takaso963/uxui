/***** 要素の取得 *****/
const menuTitle    = document.getElementById("menu-title");
const currentImage = document.getElementById("current-image");
const nextButton   = document.getElementById("next-button");
const imageCounter = document.getElementById("image-counter");

/***** スライド用データ *****/
const slides = [
  { title: "今日のメニュー", image: "hiiragi1.jpg" },
  { title: "今日のメニュー", image: "bread.jpg" },
];

let currentIndex = 0;

/***** 画面を更新する関数 *****/
function updateSlide() {
  const slide = slides[currentIndex];
  menuTitle.textContent      = slide.title;
  currentImage.src           = slide.image;
  currentImage.alt           = slide.title;
  imageCounter.textContent   = `${currentIndex + 1} / ${slides.length}`;
}

/***** 「次へ」ボタン *****/
nextButton.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % slides.length;  // 最後まで行ったら先頭へ
  updateSlide();
});

/***** 初期表示 *****/
updateSlide();

