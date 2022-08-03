// for(var i = 1; i <= 20; i++){
//     console.log(i);
//     if( i > 5){
//         break;
//     }
// }

// var roastGiven = 0;
// while(roastGiven < 10){
//     console.log('roast den, gift ansi');
//     roastGiven++;
//     if (roastGiven > 4){
//         break
//     }
// }


var numbers = [45, 87, 89, 56, 32, 51, 25, 188, 41];
for(var i = 0; i < numbers.length; i++){
    var number = numbers[i];
    if(number > 100){
        break
    }
    console.log(number);
}