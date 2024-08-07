const input = document.querySelector('input')
const form = document.querySelector('form')

form.onsubmit = (event) => {
  event.preventDefault()
  
  const value = input.value
  const regexHasNumber = /\d+/g

  if (regexHasNumber.test(value)) {
    alert('O texto contém números, Por favor, digite novamente!')
  } else {
    alert('Enviado!')
  }
}