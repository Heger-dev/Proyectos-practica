const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j","k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v","w", "x", "y", "z", " ", ",", "!" ,"?",";",":","'","1","2","3","4","5","6","7","8","9","á","é","í","ó","ú", "ñ",".","\n"];
  function encrypt(text) {
    let change = text.trim()
    const changedText = change.toLowerCase();
    let newString = "";
    Array.prototype.forEach.call(changedText, letra => {
       if (alphabet.indexOf(letra) < 9){
        let index =  `0${alphabet.indexOf(letra)  +  1}`
        newString += index + " ";
        return newString
       }
       else{
        let index = alphabet.indexOf(letra)  + 1
        newString += index + " ";
        return newString
       }
    })
    return newString.trim();
  }
function Decrypt(number) {
  let textoFinal = "";
  let numberS = number.trim()
  let array  = numberS.split(' ')
  for(let i = 0; i < array.length; i++) {
    if( array[i] == " ") {
      continue;
    }
    else {
      textoFinal += (alphabet[array[i] - 1])
    }
  }
  return textoFinal
}
let Cod__text2 = document.getElementById("Cod__text")
let Cod__number2 = document.getElementById("Cod__number")
let translateText = () =>{
  setTimeout(() => {
  console.log('text being encoding')
  return Cod__number2.value = encrypt(Cod__text2.value)
  }, 800);
  return Cod__number2.value = "Translating..."
}
let translateNumber = () =>{
   setTimeout(() => {
     if (Cod__text2.value == "" && Cod__number2.value == "") {
       console.log('text empty')
     } else if (Cod__text2.value = " "  && Cod__number2.value == "") {
       console.log('empty')
       return Cod__text2.value = ""
     } else {
     console.log('number being decoding')
     return Cod__text2.value = Decrypt(Cod__number2.value)
     }
   }, 800);
 
  return Cod__text2.value = "Translating..."
  
}











