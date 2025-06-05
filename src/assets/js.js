//h-scroll duzych elementow
window.addEventListener('DOMContentLoaded', () => {
  const section = document.getElementById("horizontal-section");
  const wrapper = document.getElementById("horizontal-wrapper");

  if (!section || !wrapper) {
    console.warn("Elementy nie znalezione");
    return;
  }

  const slides = 3;
  const sectionStart = section.offsetTop;
  const sectionHeight = section.offsetHeight;
  const viewportHeight = window.innerHeight;
  const scrollRange = sectionHeight - viewportHeight;
  const maxTranslateX = window.innerWidth * (slides - 1);

  window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;

    if (scrollTop >= sectionStart && scrollTop <= sectionStart + scrollRange) {
      const relativeScroll = scrollTop - sectionStart;
      const slideHeight = viewportHeight;
      const index = Math.round(relativeScroll / slideHeight);
      const translateX = index * window.innerWidth;

      wrapper.style.transform = `translateX(-${translateX}px)`;
    }
  });
});
