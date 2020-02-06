/**
 * Exercice sur les chaines de caractères.
 * Trouvez la façon de faire la plus optimal.
 * Il peut y avoir plusieur façon de faire.
 */
let tailleString = (texte) => {
    return texte.length;
}
let remplaceECar = (texte) => {
    let a = texte.indexOf("e")
    let text =  texte.substr(" ", a) + " " +texte.substr(a + 1 , texte.length);
    return text;
}
let concatString = (texte1, texte2) => {
    return texte1+texte2
}
let afficherCar5 =  (texte) => {
    return texte[4]
}
let afficher9Car =  (texte) => {
    let neuf=''
    for (i=0; i<9;i++){
        neuf+=texte[i]
    }
    return neuf
}
let majusculeString =  (texte) => {
    return texte.toUpperCase()
}
let minusculeString =  (texte) => {
    return texte.toLowerCase()
}
let SupprEspaceString =  (texte) => {
    text=texte.split('')
    text.pop()
    text.shift()
    return text.join('')
}
let IsString =  (texte) => {
    if(typeof texte=="string"){
        return true
    }else{
        return false
    }
}

let AfficherExtensionString =  (texte) => {
    point=texte.indexOf(".")
    return texte.substring(point+1)
}
let NombreEspaceString =  (texte) => {
    inc=0
    for (elem in texte){
        if(texte[elem]==" "){
            inc+=1
        }
    }
    return inc
}
let InverseString =  (texte) => {
    return texte.split("").reverse().join("")
}

/**
 * Exercices sur les nombres et les caluls mathématiques
 */
let calculPuissance =  (x, y) => {
    return Math.pow(x,y)
}
let valeurAbsolue =  (nombre) => {
    return Math.abs(nombre)
}
let valeurAbsolueArray =  (array) => {
    for (elem in array){
        array[elem]=Math.abs(array[elem])
    }
    return array
}
let sufaceCercle =  (rayon) => {
    return Math.round(Math.PI*rayon*rayon)
}
let hypothenuse =  (ab, ac) => {
    return Math.sqrt(Math.pow(ac,2)+Math.pow(ab,2))
}
let calculIMC =  (poids, taille) => {
    number=poids/(taille*taille)
    return Number((Math.round(number * 100)/100).toFixed(2))
}
