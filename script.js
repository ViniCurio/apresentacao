const aboutSection = document.getElementById('about');
const aboutButton = document.getElementById('aboutButton');

aboutButton.addEventListener('click', () => {
  aboutSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
});


const heroSection = document.getElementById('hero');
const topButton = document.getElementById('topButton');

topButton.addEventListener('click', () => {
  heroSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
});