const formAnchors = document.querySelectorAll('[href*="#form"]');

// формы на мобилках вместо скролла открывают меню
if(window.innerWidth <= 576) {

  formAnchors.forEach(el => {
    el.addEventListener("click", (e) => {
      e.preventDefault();
      document.querySelector('[data-burger]').click();
    });
  });

}
