
function average(){
    var notes = [20,12,8,9];
    var som = 0;
    for(var i=0; i < notes.length; i++){
        som += notes[i];
    }
    var moyenne = som / notes.length;
    console.log(moyenne);
}
average();
module.exports = average;