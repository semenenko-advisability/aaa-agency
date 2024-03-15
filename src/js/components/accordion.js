// import { isMobile } from "../functions/check-viewport";
document.addEventListener('DOMContentLoaded', () => {
	const accordions = document.querySelectorAll('.accordion');
  const accordionContent = document.querySelector(".about__content");

  accordionContent.style.height = document.querySelector(".accordion").querySelector('.accordion__content').scrollHeight + "px";

	accordions.forEach(el => {
		el.addEventListener('click', (e) => {
			const self = e.currentTarget;
			const control = self.querySelector('.accordion__control');
			const content = self.querySelector('.accordion__content');

      if (window.innerWidth > 576) {
        accordions.forEach(el => {
          el.classList.remove('accordion--open');
          el.querySelector('.accordion__control').setAttribute('aria-expanded', false);
          el.querySelector('.accordion__content').setAttribute('aria-hidden', true);
        });
      }

      accordionContent.style.height = content.scrollHeight + "px";

      if (e.target.closest('.accordion__control') === control) {
        self.classList.toggle('accordion--open');
      }

			// если открыт аккордеон
			if (self.classList.contains('accordion--open')) {
				control.setAttribute('aria-expanded', true);
				content.setAttribute('aria-hidden', false);
        content.style.maxHeight = content.scrollHeight + 'px';
			} else {
				control.setAttribute('aria-expanded', false);
				content.setAttribute('aria-hidden', true);
        content.style.maxHeight = null;
			}
		});
    if (el.classList.contains('accordion--open')) {
      el.querySelector('.accordion__content').style.maxHeight = el.querySelector('.accordion__content').scrollHeight + 'px';
    }
	});
  if (window.innerWidth > 576) {
    document.querySelector(".accordion").querySelector('.accordion__control').click();
  }
});
