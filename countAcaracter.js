var sentence = "Bonjour, chers candidat comment vous allez aujourd'hui ";
function countAcaracter(count){
   var trouve = "a";
   var compteur = 0;
   for(var i=0; i < count.length; i++){
      if(count[i]==="a"){
         compteur++;
      }
   }
   return compteur;
}
console.log("le nombre d'occurences de 'a' est : " ,countAcaracter(sentence));
module.exports = countAcaracter;