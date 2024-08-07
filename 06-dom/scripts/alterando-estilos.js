const input = document.querySelector('#name')
const button = document.querySelector('button')

// Adicionar classe, remover e fazer ambos
input.classList.add('input-error')
input.classList.remove('input-error')
input.classList.toggle('input-error')

// Mudar as propriedades css do elemento
button.style.background = 'purple'