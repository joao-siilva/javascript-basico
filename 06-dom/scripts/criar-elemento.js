const guests = document.querySelector('ul')
const newGuest = document.createElement('li')
const guestName = document.createElement('span')

guestName.textContent = 'John'

const guestSurname = document.createElement('span')
guestSurname.textContent = 'Doe'

// Adiciona antes e após o último filho
newGuest.append(guestName)
newGuest.prepend(guestSurname)
console.log(newGuest)