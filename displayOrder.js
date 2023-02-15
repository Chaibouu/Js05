
const numbers = [5, 2, 9, 1, 3];

function displayOrder(){
    for(var i=0;i<numbers.length; i++){
        for(var j=i+1;j<numbers.length; j++){
            if(numbers[i]>numbers[j]){
                var suriken = numbers[i];
                numbers[i] = numbers[j];
                numbers[j] = suriken;
            }
        } 
    }
    console.log(numbers); 
}
displayOrder(numbers);
module.exports = displayOrder;