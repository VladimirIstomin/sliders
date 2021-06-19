const pipe = (...funcs) => funcs.reduce((arg, func) => func(arg), null);

const slidePlugin = (activeSlide = 0) => {
  const getSlides = () => document.querySelectorAll('.slide');
  const addActiveClass = el => el.classList.add('active');
  const removeActiveClass = els => els.forEach(el => el.classList.remove('active'));
  const addActivePrimaryClass = activeSlide => els => {
    els[activeSlide].classList.add('active');
    return els;
  }

  const removeActiveClassFromPrevious = (getSlides, removeActiveClass) => pipe(getSlides, removeActiveClass);

  const addSlidingEffect = els => els.forEach(el => el.addEventListener('click', () => {
    removeActiveClassFromPrevious(getSlides, removeActiveClass);
    addActiveClass(el);
  }));

  pipe(getSlides, addActivePrimaryClass(activeSlide), addSlidingEffect);
}

slidePlugin(1);
