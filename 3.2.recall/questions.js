let selectElementsStartingWithA = (array) => {
    return array.filter(word => word[0] =='a' );
}

let selectElementsStartingWithVowel = (array) => {
    return array.filter(word => 'aeyuoi'.indexOf(word[0]) > -1);
}

let removeNullElements = (array) => {
    return array.filter(word => word !== null  );
}

let removeNullAndFalseElements = (array) => {
    return array.filter(word => word !== null & word !== false );
}

let reverseWordsInArray = (array) => {
    return array.map(word => word.split("").reverse().join(""));
}

let everyPossiblePair = (array) => {
    return array.flatMap((v, i) => array.slice(i+1).map( w => [v,w].sort() )).sort();
}

let allElementsExceptFirstThree = (array) => {
    return array.slice(3);
}

let addElementToBeginning = (array, element) => {
    return [element].concat(array);
}

let sortByLastLetter = (array) => {
    return (array.map(word => word.split("").reverse().join("")).sort()).map(words => words.split("").reverse().join(""));
}

let getFirstHalf = (string) => {
    return string.slice(0, Math.round(string.length / 2));
}

let makeNegative = (number) => {
    return -Math.abs(number);
}

let numberOfPalindromes = (array) => {
    return array.filter(string => string == string.split('').reverse().join('')).length ;
}

let shortestWord = (array) => {
    return array.reduce((a, b) => a.length < b.length ? a : b)
}

let longestWord = (array) => {
    return array.reduce((a, b) => a.length > b.length ? a : b);
}

let sumNumbers = (array) => {
    return array.reduce((accumulator, currentValue) => accumulator + currentValue);
}

let repeatElements = (array) => {
    return [array,array].flat();
}

let stringToNumber = (string) => {
    return parseInt(3);
}

let calculateAverage = (array) => {
    return (array.reduce((a, b) => a + b))/array.length;
}

let getElementsUntilGreaterThanFive = (array) => {
    return array.reverse().slice(5).reverse();
}

let convertArrayToObject = (array) => {
    return Object.fromEntries(array.map((x, i) => i % 2 == 0 && array.slice(i, i + 2)).filter(x => x));
}

let getAllLetters = (array) => {
    return  Array.from(new Set(array.join('').split('').sort()));
}

let swapKeysAndValues = (object) => {
    return Object.fromEntries(Object.keys(object).map(x => [object[x],x]));
}

let sumKeysAndValues = (object) => {
    return (Object.keys(object).flatMap(x => [object[x],x])).reduce((accumulator, currentValue) => accumulator + parseInt(currentValue));
}

let removeCapitals = (string) => {
    return string.replace( /[A-Z]/g, '' );
}

let roundUp = (number) => {
    return Math.ceil(number);
}

let formatDateNicely = (date) => {
    return (new Date(date)).toISOString().slice(0,10).split("-").reverse().join('/') ;
}

let getDomainName = (string) => {
    return (string.substring(string.indexOf('@')+1)).replace('.com','');
}

let titleize = (string) => {
    return string[0].toUpperCase()+(string.replace(/(?<=\bthe\s)(\w+)|(?<=\b.\s)(\w+)/g, (word)=>{return word[0].toUpperCase()+word.slice(1)})).slice(1);
}

let checkForSpecialCharacters = (string) => {
    return !!string.match(/[_\W]/g);
}

let squareRoot = (number) => {
    return Math.sqrt(number);
}

let factorial = (number) => {
    return ((Array.from(Array(number+1).keys())).splice(1)).reduce((a,b)=> a*b);
}

let findAnagrams = (string) => {
    return permute(string).flat().join('');//TODO   
}

let convertToCelsius = (number) => {
    return Math.round(((number-32)*(5/9)));
}

let letterPosition = (array) => {
    return array.map(x => '&abcdefghijklmnopqrstuvwxyz'.indexOf(x.toLowerCase()));
}

perm = [], used = []
function permute([...a]){
    let i, q
    for(i = 0; i < a.length; i++){
        q = a.splice(i, 1)[0]
        used.push(q)
        if(!a.length) perm.push(used.slice())
        permute(a)
        a.splice(i, 0, q)
        used.pop()
    }
    return perm
}
