// Evento de scroll na lista
const ul = document.querySelector('ul')
ul.addEventListener('scroll', (event) => {
  event.preventDefault()

  if (ul.scrollTop > 200) {
    ul.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
})

// Evento de click no botão
const button = document.querySelector('button')
button.addEventListener('click', (event) => {
  event.preventDefault()
  console.log('clicou')
})