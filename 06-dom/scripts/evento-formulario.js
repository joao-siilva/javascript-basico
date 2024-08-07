const form = document.querySelector('form')

// onsubmit leva em consideração somente aquele que criou
form.onsubmit = (event) => {
  event.preventDefault()
  console.log('Você fez submit no formulario #1')
}

form.onsubmit = (event) => {
  event.preventDefault()
  console.log('Você fez submit no formulario #2')
}

// addEventListener leva em consideração todos que foram criados
form.addEventListener('submit', (event) => {
  event.preventDefault()
  console.log('Você fez submit no formulario #3')
})

form.addEventListener('submit', (event) => {
  event.preventDefault()
  console.log('Você fez submit no formulario #3')
})