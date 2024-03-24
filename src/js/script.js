const headerMenu = document.querySelector('.main-menu')
const getStartedBtn = document.getElementById('get-started-btn')
const mobileMenuBtn = document.getElementById('mobile-menu-btn')
const mobileMenu = document.getElementById('mobile-menu')
const tableHeader = document.getElementById('table-header')
window.addEventListener('scroll', (e) => {
  if (window.scrollY >= 100) {
    headerMenu.classList.add('main-menu-scrolled')
  } else {
    headerMenu.classList.remove('main-menu-scrolled')
  }

// on scroll button "Get Started" in header changes its color
  if (window.scrollY >= 800) {
    getStartedBtn.classList.add('get-started-btn-scrolled')
  } else {
    getStartedBtn.classList.remove('get-started-btn-scrolled')
  }
})

mobileMenuBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden')
  const docClick = (e) => {

    if (e.target !== mobileMenu && !mobileMenu.contains(e.target) && e.target !== mobileMenuBtn && !mobileMenuBtn.contains(e.target)) {
      mobileMenu.classList.add('hidden')
      document.removeEventListener('click', docClick)
    }
  }
  document.addEventListener('click', docClick)
})



