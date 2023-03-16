/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
   const nuevoArreglo = [];
   for( let key in objeto){
      const miniArray = [key, objeto[key]];
      nuevoArreglo.push(miniArray);

   }
   return nuevoArreglo

   
}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:{}
   const obj = {}
   for (let letter of string){
      if (obj.hasOwnProperty(letter)) 
      obj[letter]+= 1
      else {
         obj[letter]= 1
      }
   }
   return obj;
}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
   let minus = '';
   let mayus = '';
   for (let letter of string){
      if (letter === letter.toUpperCase())mayus += letter;
      else minus +=letter;
   }
   return mayus + minus;

}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
   const palabra = frase.split(" ");
  const reverseWords = palabra.map(word => word.split("").reverse().join(""));
  return reverseWords.join(" ");

}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
   let arr = String(numero).split('')
   let rigth = null
   let left = null
   if (arr.length % 2 === 0){
      left = arr.slice(0, arr.length/2)
      rigth = arr.slice(arr.length/2)  
   }
   if( arr.length % 2 === 1){
      left = arr.slice(0, (arr.length-1)/2);
      rigth = arr.slice((arr.length+1)/2);
}
for (let i = 0; i < arr.length; i++){
   if(arr[i] !== arr[arr.length-1-i]){
    return 'No es capicua'
   }
 }
 return 'Es capicua'
}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   let stringSinAbc = string.replace(/[abc]/g, '');
  return stringSinAbc;
}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
   for (let i = 0; i < arrayOfStrings.length; i++){
      for (let j = i; j < arrayOfStrings.length; j++){
         if (arrayOfStrings[i].length> arrayOfStrings[j].length){
            let temp=arrayOfStrings[i]
            arrayOfStrings[i]= arrayOfStrings[j]
            arrayOfStrings[j]= temp
         }
      }
   }
   return arrayOfStrings;
}
function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
   const array3 = []

   for (let i = 0;i < array1.length; i++){
     const element1 = array1[i];
      for(let j = 0; j < array2.length; j++){
       const element2 = array2[j];
         if (element1 == element2){
           array3.push(element1)
         }
     }
   }
   return array3;
}
    

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
