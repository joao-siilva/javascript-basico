// Hosting
showMessage('Antes da função')

function showMessage(message) {
  console.log(message)
  titleMessage('Dentro da função')

  function titleMessage(title) {
    console.log(title)
  }
}

showMessage('Depois da função')