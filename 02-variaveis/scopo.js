// Hosting
var user = 'John Doe'
console.log(user)


var email = 'johndoe@email.com' // Escopo global
{
  console.log(email) // Escopo block 
}


{
  let age = 18
}


let address = 'Rua x'
{
  address = 'Rua Y'
  console.log(address) 
}