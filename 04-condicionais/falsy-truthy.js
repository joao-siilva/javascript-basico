/*
  FALSY quando um valor é considerado falso
  TRUTHY quando um valor é considerado verdadeiro onde um boolean
  é obrigatório (condicionais e loop)
*/

console.log(`
  Exemplos de falsy
  ${false ? 'Verdadeiro' : 'Falso'}   
  ${0 ? 'Verdadeiro' : 'Falso'}   
  ${-0 ? 'Verdadeiro' : 'Falso'}   
  ${"" ? 'Verdadeiro' : 'Falso'}   
  ${null ? 'Verdadeiro' : 'Falso'}   
  ${undefined ? 'Verdadeiro' : 'Falso'}
  ${NaN ? 'Verdadeiro' : 'Falso'}
`)

console.log(`
  Exemplos de truthy
  ${true ? 'Verdadeiro' : 'Falso'}   
  ${1 ? 'Verdadeiro' : 'Falso'}   
  ${1.1 ? 'Verdadeiro' : 'Falso'}   
  ${{} ? 'Verdadeiro' : 'Falso'}   
  ${[] ? 'Verdadeiro' : 'Falso'}   
  ${Infinity ? 'Verdadeiro' : 'Falso'}   
  ${"John Doe" ? 'Verdadeiro' : 'Falso'}
`)