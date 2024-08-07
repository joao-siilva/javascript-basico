// Obter o título da página
console.log(document.title)

// Acessar o elemento pelo ID
const guest = document.getElementById('guest-2')
console.log(guest)

// Mostrar as propriedades do objeto
console.dir(guest)

// Acessar elemento com class (SELETOR class)
const guestsByClass = document.getElementsByClassName('guest')
console.log(guestsByClass)

// Exibir o primeiro elemento da lista
console.log(guestsByClass.item(1))
console.log(guestsByClass[1])

// Selecionar lista de elementos pela tag
const guestsTag = document.getElementsByTagName('li')
console.log(guestsTag)