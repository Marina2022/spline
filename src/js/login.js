const loginContinueBtn = document.getElementById('login-continue-btn')

if (loginContinueBtn) {
  loginContinueBtn.addEventListener('click', (e) => {
    e.preventDefault()
    window.location = 'login-code.html'
  })
}

//
// const restoreStepOneBtn = document.querySelector('#restore-step-one-btn');
// const restoreStepTwoBtn = document.querySelector('#restore-step-two-btn');
//
// const restoreStepOneBlock = document.querySelector('#restore-step-one');
// const restoreStepTwoBlock = document.querySelector('#restore-step-two');
// const restoreStepThreeBlock = document.querySelector('#restore-step-three');
//
// restoreStepOneBtn.addEventListener('click', function (e) {
//   restoreStepOneBlock.classList.add('visually-hidden');
//   restoreStepTwoBlock.classList.remove('visually-hidden');
// });
//
// restoreStepTwoBtn.addEventListener('click', function (e) {
//   restoreStepTwoBlock.classList.add('visually-hidden');
//   restoreStepThreeBlock.classList.remove('visually-hidden');
// });


// смена фокуса при вводе цифры
const codeInputs = document.querySelectorAll('.code-input__item');
codeInputs.forEach(function (inputItem) {
  inputItem.addEventListener('input', function () {
    if (inputItem.value.match(/\D/)) {
      inputItem.value = inputItem.value.replace(/\D/, '');
    } else {
      if (inputItem.nextElementSibling) {
        inputItem.nextElementSibling.focus();
      } else inputItem.blur();
    }
  })

  inputItem.addEventListener('focus', function () {
    inputItem.value = '';
  })
})
