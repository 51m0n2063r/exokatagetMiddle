/*Développez la fonction getMiddle(input_text) :

    Si input_text contient un nombre impair d'éléments, la fonction renvoie le caractère du milieu.
    Sinon, elle renvoie les deux caractères du milieu.

Exemples:

    getMiddle("test") renvoie "es"
    getMiddle("testing") renvoie "t"
    getMiddle("middle") renvoie "dd"
    getMiddle("A") renvoie "A" */

function getMiddle(mots) {
	var longeur = mots.length;
	var diviserLongeur = mots.length % 2;
      i=longeur/2 
	console.log(mots.length % 2);
  if (diviserLongeur == 0){
    
    
    //console.log(longeur/2)
    //console.log(i)
    //console.log(mots[i])
   // console.log(mots[i-1])
    console.log(mots[i-1]+ mots[i])
    }
    else {
      i = i-0.5
console.log(mots[i])
    }
}
getMiddle("AZERTYUIOQSDFGHJKLMW");

// middle
// 012345
// 6/2=3
// 2:3
//I
