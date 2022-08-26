var valores = [8,1,7,4,2,9]
/*
Primeira forma
console.log(valores)

Segunda forma
console.log(valores[0])
console.log(valores[1])
console.log(valores[2])
console.log(valores[3])
console.log(valores[4])
console.log(valores[5])

Terceira forma
for (var c = 0; c < valores.length; c++) {
    console.log(`A posição ${c} tem o valor ${valores[c]}`)
}
*/
//Quarta forma

for (var c in valores) {
    console.log(`A posição ${c} tem o valor ${valores[c]}`)
}