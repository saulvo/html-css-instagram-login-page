const imageList = document.querySelector('.image-list');
const images = imageList.querySelectorAll('img');
const username = document.querySelector('#username');
const password = document.querySelector('#password');
const btnSubmit = document.querySelector('#btn-submit');

function handleTransitionImage(e) {
  let index = 0;
  setInterval(() => {
    images[index].classList.remove('active');
    index = (index + 1) % images.length;
    images[index].classList.add('active');
  }, 3000);
}

function handleValidation() {
  if (username.value.length > 0 && password.value.length > 6) {
    btnSubmit.disabled = false;
  } else {
    btnSubmit.disabled = true;
  }
}

window.addEventListener('load', () => {
  handleTransitionImage();

  username.addEventListener('keyup', handleValidation);
  password.addEventListener('keyup', handleValidation);
});
