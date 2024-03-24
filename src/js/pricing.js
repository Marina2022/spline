const yearly = document.getElementById('yearly')
const monthly = document.getElementById('monthly')
const superTeamMonthly = document.getElementById('super-team-monthly')
const superTeamAnnually = document.getElementById('super-team-annually')

const superMonthly = document.getElementById('super-monthly')
const superAnnually = document.getElementById('super-annually')

const faqItems = document.querySelectorAll('.faq-item')

faqItems.forEach(faqItem=>{
  faqItem.addEventListener('click', (e)=>{
    e.target.closest('.faq-item').querySelector('.minus').classList.toggle('hidden')
    e.target.closest('.faq-item').querySelector('.plus').classList.toggle('hidden')
    e.target.closest('.faq-item').querySelector('.text').classList.toggle('hidden')
  })
})

yearly.addEventListener('click', ()=>{
  monthly.classList.remove('active-price-btn')
  yearly.classList.add('active-price-btn')

  superTeamMonthly.classList.add('hidden')
  superTeamAnnually.classList.remove('hidden')

  superMonthly.classList.add('hidden')
  superAnnually.classList.remove('hidden')
})

monthly.addEventListener('click', ()=>{
  console.log('monthly')
  monthly.classList.add('active-price-btn')
  yearly.classList.remove('active-price-btn')

  superTeamMonthly.classList.remove('hidden')
  superTeamAnnually.classList.add('hidden')

  superMonthly.classList.remove('hidden')
  superAnnually.classList.add('hidden')
})


