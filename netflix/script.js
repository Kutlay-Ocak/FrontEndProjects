const accordionTitles = document.querySelectorAll('.accordion-title');

accordionTitles.forEach((title) => {
  title.addEventListener('click', () => {
    const content = title.nextElementSibling;
    const isActive = content.style.display === 'block';

    if (isActive) {
      content.style.display = 'none';
    } else {
      content.style.display = 'block';
    }
  });
});
