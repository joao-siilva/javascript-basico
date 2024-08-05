// Uma função passada como argumento para outa função

function execute(taskName, callback) {
  console.log('Executando a tarefa:', taskName)
  callback()
}

function callback() {
  console.log('Tarefa finalizada')
}

execute('Download do arquivo...', callback)