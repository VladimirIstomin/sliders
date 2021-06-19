const sliderPlugin = () => {
  const buttonUp = document.querySelector('.up-button');
  const buttonDown = document.querySelector('.down-button');
  const mainSlide = document.querySelector('.main-slide');
  const sidebar = document.querySelector('.sidebar');
  const countImages = mainSlide.querySelectorAll('div').length;

  sidebar.style.top = `-${ 100 * (countImages - 1) }vh`;

  let currentSlideIndex = 0;
  
  const handleSlide = direction => {
    currentSlideIndex += direction === 'up' ? 1 : -1;
    currentSlideIndex = currentSlideIndex === countImages ? 0 : currentSlideIndex;
    currentSlideIndex = currentSlideIndex === -1 ? countImages - 1 : currentSlideIndex;

    const shiftValue = `${ currentSlideIndex * 100 }vh`;

    mainSlide.style.transform = `translateY(-${ shiftValue })`;
    sidebar.style.transform = `translateY(${ shiftValue })`;
  }

  buttonUp.addEventListener('click', () => handleSlide('up'));
  buttonDown.addEventListener('click', () => handleSlide('down'));
  document.addEventListener('keydown', e =>
    e.key === 'ArrowUp' ?
    handleSlide('up') :
    e.key === 'ArrowDown' ?
    handleSlide('down') :
    null
  );
}

sliderPlugin();
