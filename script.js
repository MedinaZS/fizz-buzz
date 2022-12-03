/** 
 * Escribe un código que pase por cada número del 1 al 100 y:
 * Para cada número que sea múltiplo de 3 , imprima  "Fizz"
 * Para cada número que sea múltiplo de 5 , imprima  "Buzz"
 * Para los números que son múltiplos de 3 y 5, imprima  "FizzBuzz"
 * Los demás números deberían imprimirse de forma normal
*/

for (let i = 1; i <= 100; i++) {
    if(i%3==0 && i % 5 ==0){//Se verifica si no es multiplo de 3 y 5 a la vez    
        console.log("FizzBuzz")
    }else if (i % 3 == 0) { //Si no es multiplo de 3 solamente
        console.log("Fizz");
    }else if(i % 5 == 0){ //Si no es multiplo de 5 solamente
        console.log("Buzz");
    }else{ //Si no cumple ninguna condicion
        console.log(i);
    }
}

