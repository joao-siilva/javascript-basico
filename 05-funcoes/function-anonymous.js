// Função que não possui nome

const createMessage = function() {
  return 'Criar mensagem'
}
console.log(createMessage())

const showMessage = function(confirm) {
  return 'Deseja confirmar a mensagem? ' + confirm
}
console.log(showMessage('Sim'))