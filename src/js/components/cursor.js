let mouseCursor = document.querySelector('.cursor');

window.addEventListener("mousemove", cursor);
// document.addEventListener("scroll", cursor);

document.addEventListener("mousedown", () => mouseCursor.classList.add('cursor--active'));
document.addEventListener("mouseup", () => mouseCursor.classList.remove('cursor--active'));

function cursor(e) {
  // console.log(e);
  mouseCursor.style.top = e.clientY + "px";
  mouseCursor.style.left = e.clientX + "px";

}
