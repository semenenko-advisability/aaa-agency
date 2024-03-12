
document.addEventListener('DOMContentLoaded', () => {
	const accordions = document.querySelectorAll('.accordion');
  const accordionContent = document.querySelector(".about__content");

  // let contentHeightArray = [];
  // accordions.forEach(el => {
  //   contentHeightArray.push(el.querySelector('.accordion__content').scrollHeight)
  // });

  accordionContent.style.height = document.querySelector(".accordion--open").querySelector('.accordion__content').scrollHeight + "px";

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
			self.classList.toggle('accordion--open');

			// если открыт аккордеон
			if (self.classList.contains('accordion--open')) {
				control.setAttribute('aria-expanded', true);
				content.setAttribute('aria-hidden', false);
			} else {
				control.setAttribute('aria-expanded', false);
				content.setAttribute('aria-hidden', true);
			}
		});
	});
});
