const input = document.querySelector('input')
const form = document.querySelector('form')

input.addEventListener('input', () => {
  const value = input.value
  const regex = /\D+/g

  const isValid = regex.test(value)
  console.log(isValid) 
})

form.addEventListener('submit', (event) => {
  event.preventDefault()

  const value = input.value
  const regex = /\D+/g

  if (regex.test(value)) {
    alert('Valor válido!')
  } else {
    alert('Valor inválido, digite novamente!')
  }
})