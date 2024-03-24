const yearly = document.getElementById('yearly')
const monthly = document.getElementById('monthly')
const superTeamMonthly = document.getElementById('super-team-monthly')
const superTeamAnnually = document.getElementById('super-team-annually')

const superMonthly = document.getElementById('super-monthly')
const superAnnually = document.getElementById('super-annually')


console.log('hello')

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
