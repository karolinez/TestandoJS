alert("Hello!")
let num1 = prompt("informe o primeiro numero")
let num2 = prompt("informe o segundo numero")

alert("A soma do dois numeros é:" + (Number(num1) + Number(num2)))
alert("A multiplicação dos dois numeros é: " + Number(num1) * Number(num2))
alert("A divisão dos dois numeros é: " + Number(num1) / Number(num2))
alert("A subtração dos dois numeros é : " + Number(num1) - Number(num2))

if (num1%2==0){
  alert("PAR")
} else {
  alert("IMPAR")
}
if (num2%2==0){
  alert("PAR")
} else{
  alert("IMPAR")
}

var soma = (Number(num1) + Number(num2))
if (soma%2==0){
  alert("A soma dos numeros é par")
} else{
  alert("A soma dos numeros é impar")
}
if (Number(num1) == Number(num2)){
  alert("Os numeros são iguais")
} else {
  alert("Os numeros são diferentes ")
}
