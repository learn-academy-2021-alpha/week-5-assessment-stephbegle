// #1
const wordDecode = (string) => {

    return string.replaceAll('a', 4).replaceAll('e', 3).replaceAll('i', 1).replaceAll('o', 0)

}

console.log(wordDecode("Hi hello hannah, hop on this zoom"))

// #2
const wordContainsA = (array) => {

    return array.filter(word => {
        if(word.includes('a') || word.includes('A')){
            return word
        }
    })

}

console.log(wordContainsA(["Apple", "Banana", "Plum", "Cherry", "Kiwi", "Peach"]))
// ["Apple", "Banana", "Plum", "Cherry", "Kiwi", "Peach"]

// #3 Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind.

var hand1 = [5, 5, 5, 3, 3]
// Expected output: true
var hand2 = [5, 5, 3, 3, 4]
// Expected output: false
var hand3 = [5, 5, 5, 5, 4]
// Expected output: false

// const isFullHouse = (array) => {

//     if (array.length != 5){
//         return "please feed me an array with 5 numbers!"
//     } 

//     let threeCount = 0;
//     let twoCount = 0;

//     for(let i = 0; i <= 1; i++){
//         count = 1;
//         for(let j = i + 1; j < array.length; j++){
//             if (array[i] === array[j]){
//                 threeCount++;
//             }
//         }
//     }

//     for(let k = 0; k < array.length; k++){
//         count = 1;
//         for(let l = k + 1; l < array.length; l++){
//             if(array[k] === array[l]){
//                 twoCount++;
//             }
//         }
//     }

//     if (threeCount === 3){
//         return "three of a kind"
//     } else {
//         return "failed"
//     }
// }


const isFullHouse = (array) => {
    const copy = array.slice();
    for(let i = 0; i < array.length; ){
        const el = copy.splice(i, 1)[0];
        if(copy.includes(el)){
            copy.splice(copy.indexOf(el), 1);
            if(copy.includes(el)){
                return true;
            }
        }else{
            i++;
        }
    };
    return false;
};
console.log(isFullHouse(hand1))
console.log(isFullHouse(hand2))
console.log(isFullHouse(hand3))
// console.log(hand1.splice(hand1.indexOf(5), 1))