/*
Função para ser usada em app apex que formata os dados inseridos no campo "TC" no formato 000.000/0000-0
Deve aceitar somente digitos e incluir os 0s à esquerda que o usuário não preencher
Valores dos campos no apex são armazenados sempre como string
*/

function formata_TC(campo) {
    if (event.keyCode === 13){
        return
    }
  let campoArr = campo.value.split("").filter(el => el == 0 || Number(el)).map(Number);
  while (campoArr.indexOf(0) === 0) {
    campoArr.shift();
   } 
  
  while (campoArr.length < 10) {
    campoArr.unshift(0);
  }
  campoArr.splice(3,0,".");
  campoArr.splice(7,0,"/");
  campoArr.splice(12,0,"-");
  campo.value = campoArr.join(""); 
}