var num = [5,8,2,9,3]
num.push(1)//declaração adiciona mais um valor a array
num.sort()//declaração que ordena os valores
console.log(num)//mostra a array na tela
console.log(`A array tem ${num.length} elementos`)//num.length serve para saber o numero de elementos de uma array
console.log(`O valor do primeiro elemento é ${num[0]}`)//serve para saber o valor de um elemento pelo seu índice
var pos = num.indexOf(8)//serve para saber o índice de um valor
console.log(`O índice do valor 8 é ${pos}`)//exibi o índice 
//caso o valor não exista na array, o JS retorna -1