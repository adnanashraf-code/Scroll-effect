const leftCurtain = document.querySelector(".left");
const rightCurtain = document.querySelector(".right");
const scene = document.querySelector(".scene");
const title = document.querySelector(".title");

window.addEventListener("scroll", () => {
  let scroll = window.scrollY;

  /* HEART OPEN */

  let curtainMove = Math.min(scroll, 400);

  leftCurtain.style.transform = `translateX(-${curtainMove}px)`;
  rightCurtain.style.transform = `translateX(${curtainMove}px)`;

  /* IMAGE ZOOM */

  let zoomStart = 400;
  let zoomEnd = 1200;

  if (scroll > zoomStart) {
    let progress = (scroll - zoomStart) / (zoomEnd - zoomStart);

    if (progress > 1) progress = 1;

    let scale = 3 - progress * 2.6;

    scene.style.transform = `scale(${scale})`;
  }

  /* MOVE HEART + TITLE UP */

  if (scroll > 1100) {
    let moveUp = scroll - 1100;

    leftCurtain.style.transform = `translateX(-400px) translateY(-${moveUp}px)`;

    rightCurtain.style.transform = `translateX(400px) translateY(-${moveUp}px)`;

    title.style.transform = `translate(-50% , calc(-50% - ${moveUp}px))`;
  }
});
