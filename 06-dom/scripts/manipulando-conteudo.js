// Retorna o conteúdo com texto
const guest = document.querySelector('#guest-1 span')

guest.textContent = 'John Doe' // Retorna o conteúdo visível e oculto
guest.innerText = 'John Doe' // Retorna soente o conteúdo visível
guest.innerHTML = 'John Doe' // Retorna o HTML como texto