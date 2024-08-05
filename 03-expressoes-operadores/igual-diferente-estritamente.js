let one = 1
let two = 2

// === estritamente igual a
console.log(`
  ${one} é estritamente igual a ${two}? ${one === two} 
  ${one} é estritamente igual a ${one}? ${one === one} 
  ${one} é estritamente igual a "1"? ${one === "1"} 
`)

// !== estritamente diferente de 
console.log(`
  ${one} é estritamente diferente de ${two}? ${one !== two} 
  ${one} é estritamente diferente de ${one}? ${one !== one} 
  ${one} é estritamente diferente de "1"? ${one !== "1"} 
`)