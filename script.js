 const aboutSection = document.getElementById('about');
const aboutButton = document.getElementById('aboutButton');

aboutButton.addEventListener('click', () => {
  aboutSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
});
