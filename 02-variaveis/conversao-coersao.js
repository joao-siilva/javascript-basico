/*
  Conversão de tipos: Ocorre quando você transforma um valor de um tipo
  para outro. Isso é feita de forma consciente, usando funções ou métodos
  específicos para realizar a conversão
*/

let value = '9'
console.log(typeof value)
console.log(typeof Number(value))

let age = 22
console.log(typeof age.toString(age))


/*
  Coersão de tipos: Acontece de forma automática. O javascript tenta
  automaticamente converter um dos valores para um tipo compatível antes
  de realizar a operação
*/

console.log(typeof ('10' + 5))
