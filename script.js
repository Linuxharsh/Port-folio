const menutoggle = document.querySelector('.menu-toggle');
const navlinks = document.querySelector('.nav-link');

if (menutoggle && navlinks) {
  menutoggle.addEventListener('click', () => {
    navlinks.classList.toggle('active');
  });
} else {
  console.log('Menu toggle or nav links not found');
}

const form = document.getElementById('contact-form');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Form submitted!');
    form.reset();
  });
} else {
  console.log('Contact form not found');
}