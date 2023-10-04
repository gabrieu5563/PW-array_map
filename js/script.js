function teste(){
    let pares = []
    let impares = []
    let numeros = [ 5, 4, 8, 4, 5, 6, 3, 4, 5, 7, 8, 9, 19, 3, 4, 34, 65, 2, 7, 40]
    numeros.map( (num) => {
        if(num % 2 === 0){
            pares.push(num)
        } else {
            impares.push(num)
        }
    })
    console.log(numeros)
    console.log(pares)
    console.log(impares)
}