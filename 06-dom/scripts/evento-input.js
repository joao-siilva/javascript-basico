const input = document.querySelector('input')

// keydown - quando a tecla é pressionada (incluindo CTRL, SHIFT, etc...) 
input.addEventListener('keydown', (event) => {
  event.preventDefault()
  console.log(event.key)
})

// keypress - quando a tecla do tipo caractere é pressionada (letras, números, etc...) 
input.addEventListener('keypress', (event) => {
  event.preventDefault()
  console.log(event.key)
})

// onchange - o evento só ocorre quando sai do input 
input.onchange = () => {
  inputChance()
}

function inputChance() {
  console.log('O input mudou!')
}