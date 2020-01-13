//concatene des listes de dimension 2 en une seule liste de dimension 2
function concateneListe2D(){

    let result = [];

    for(i in arguments){
        arguments[i].forEach(liste => {
            result.push(liste);
        });
    }

    return result;

}

/*

let listeTest1 = [[1,2],[3]];
let listeTest2 = [[1],[2,3]];

let concatResult = concateneListe2D(listeTest1, listeTest2);

console.log(concatResult);

*/

//ajoute un element au début de chaque sous listes appartenant à une liste de dimension 2 passée en paramètre
function prependElementToEach(element, liste2d){

    let result = [];

    liste2d.forEach(liste => {

        result.push([element].concat(liste));

    });

    return result;

}

/*

let listeTest = [[1,2],[3],['n','i']];

let result = prependElementToEach('a',listeTest);

console.log(result);

*/

//genere toutes les permutations possibles d'une chaine de caractere
function generatePermutationsFromString(maChaine){

    return liste2dToStringList(generatePermutations(maChaine.split('')));

}

//genere toutes les permutations possibles d'une liste
function generatePermutations(maListe){  

    if(maListe.length <= 1){
        return [maListe];
    }

    let result = [];

    for(i in maListe){

        let element = maListe[i];
        let myListCopy = Array.from(maListe);

        myListCopy.splice(i,1);

        result = concateneListe2D(result,prependElementToEach(element,generatePermutations(myListCopy)));

        //maListe.splice(i-1,0,element);

        //console.log(maListe);
        

    }

    return result;

}

//sans doublons qui sont générés lorsque la chaine contient des lettres en double
function generatePermutationsFromStringClean(maChaine){

    return removeDuplicates(liste2dToStringList(generatePermutations(maChaine.split(''))));

}

function listToString(maListe){

    let result = '';

    maListe.forEach(element => {
        result += element;
    })

    return result;

}

//transforme une liste de dimension 2 en liste de dimension 1 composée des chaines de caractères représentants les sous listes de la liste passée en paramètre
function liste2dToStringList(maListe2d){

    let result = [];

    maListe2d.forEach(liste => {
        result.push(listToString(liste));
    });

    return result;

}

function afficheList(maListe){

    maListe.forEach(element => {
        console.log(element);
    });

}

function removeDuplicates(maListe){

    let result = [];

    maListe.forEach(element => {

        if(!result.includes(element)){

            result.push(element);

        }

    });

    return result;

}

let chaineTest = "test";

let result = generatePermutationsFromString(chaineTest);
let resultClean = generatePermutationsFromStringClean(chaineTest);

console.log(result);
console.log(resultClean);


//afficheList(result);


