document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const targetId = this.getAttribute('href').substring(1);
    const target = document.getElementById(targetId);

    if (target) {
      const offsetTop = target.offsetTop - 144; // Adjust this value to match the height of your sticky header
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  });
});

// sign in button
const signInBtn = document.querySelector('#btnSignin');
const formRoot = document.querySelector('#formRoot');
const body = document.querySelector('body');
console.log(signInBtn);
const overlayForm = document.querySelector('.signIn__overlay');

signInBtn.addEventListener('click', function (show) {
  formRoot.style.display = 'block';
  body.classList.add('no-scroll');
  setTimeout(function() {
    overlayForm.style.opacity = 0.75;
  }, 10);

});


// close button form
const closeBtn = document.querySelector('#btnClose');
closeBtn.addEventListener('click', function () {
  formRoot.style.display = '';
  body.classList.remove('no-scroll');
  overlayForm.style.opacity = '';
});













