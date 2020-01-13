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

function generatePermutationsFromString(maChaine){

    return liste2dToStringList(generatePermutations(maChaine.split('')));

}

function generatePermutations(maListe){  

    if(maListe.length <= 1){
        return [maListe];
    }

    let result = [];

    for(i in maListe){

        let element = maListe[i];

        maListe.splice(i,1);

        result = concateneListe2D(result,prependElementToEach(element,generatePermutations(maListe)));

        maListe.splice(i-1,0,element);

    }

    return result;

}

function listToString(maListe){

    let result = '';

    maListe.forEach(element => {
        result += element;
    })

    return result;

}

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

let chaineTest = "tes";

let result = generatePermutationsFromString(chaineTest);

afficheList(result);


