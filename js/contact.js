// Contact form handling.

const form = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');

form.addEventListener('submit', e => {
  e.preventDefault();

  const name = form.name.value.trim();
  const email = form.email.value.trim();

  const emailOk = /.+@.+/.test(email);

  if (name.length > 0 && emailOk) {
    formStatus.textContent = 'Thanks! We will get back to you soon.';
    form.reset();
  } else {
    formStatus.textContent = 'Something went wrong.';
  }
});
