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
var hand4 = [6, 3, 3, 6, 6]
var hand5 = [1,2,3,3,3]
var hand6 = [4,4,7,7,7]



const isFullHouse = (array) => {

    let sameCard = 0;
    let pair = 0;
    let tripple = 0;

    for(let cc = 0; cc < array.length; cc++){
        // loop to check if the cc (current card) matches the rest of the cards
        for(let nc = (cc + 1); nc < array.length - 1; nc++){
            // loop that iterates through the nc (nextcard) to check if it's the same as cc
            if(array[cc] == array[nc]){
                // check if the cc is the same as the nc
                sameCard += 1;
                // augment the count for every match
            }
        }

        if(sameCard === 2){
            tripple = sameCard + 1;
            sameCard = 0;
            // if the first iteration on the first card is a 3, store it
        } else if(sameCard === 1){
            pair = sameCard + 1;
            sameCard = 0;
            // if it is a 2, store that
        } else {
            sameCard = 0
            // if there were no findings of either a pair or a tripple, reset the counter
        }
    }

    if(tripple === 3 && pair === 2){
        return true;
    } else {
        return false
    }
    // evaluates whethere there has been a full house or not

}


const isFullHouse = (array) => {

    if(array.length !== 5){
        return "Please give me a 5 card hand to evaluate, no less no more."
    }

    let count = {};

    for(let i = 0; i < array.length; i++){
        let current = array[i];
        count[current] = count[current] ? count[current] + 1 : 1;
    }
    
    if(Object.values(count)[0] == 2 && Object.values(count)[1] == 3){
        return true;
    } else if(Object.values(count)[0] == 3 && Object.values(count)[1] == 2){
        return true;
    } else {
        return false;
    }
}

console.log(isFullHouse(hand1))
console.log(isFullHouse(hand2))
console.log(isFullHouse(hand3))

console.log(isFullHouse(hand4))
console.log(isFullHouse(hand5))
console.log(isFullHouse(hand6))