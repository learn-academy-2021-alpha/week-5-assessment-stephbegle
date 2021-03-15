// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is HIGHLY recommended
// If you get stuck, please leave comments to help us understand your thought process

// Add appropriate dependencies to the repository:
// $ yarn add jest

// Use test driven development to complete the following questions
// Run the file with the following command:
// $ yarn jest

// Reminder: The test will call your function

// --------------------1) Create a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.

// a) Create a test with an expect statement using the variable provided.

var secretCodeWord1 = "lackadaisical"
// Expected output: "l4ck4d41s1c4l"
var secretCodeWord2 = "gobbledygook"
// Expected output: "g0bbl3dyg00k"

describe("When wordDecoder is given a string,", () => {

    it("returns a coded message with numbers in place of vowels: 4 for a, 3 for e, 1 for i, and 0 for o.", () => {
        
        const actResult = wordDecoder(secretCodeWord1)

        expect(actResult).toEqual("l4ck4d41s1c4l")

    })
    it("returns a coded message with numbers in place of vowels: 4 for a, 3 for e, 1 for i, and 0 for o.", () => {

        const actResult = wordDecoder(secretCodeWord2)

        expect(actResult).toEqual("g0bbl3dyg00k")

    })
})

// b) Create the function that makes the test pass.
const wordDecoder = (string) => {

    return string.replaceAll('a', 4).replaceAll('e', 3).replaceAll('i', 1).replaceAll('o', 0)

}

console.log(secretCodeWord1)
console.log(secretCodeWord2)



// --------------------2) Create a function that takes in an array and returns all the words that contain the letter a.

// a) Create a test with an expect statement using the variable provided.

var arrayOfWords = ["Apple", "Banana", "Plum", "Cherry", "Kiwi", "Peach"]
// Expected output: "Apple" "Banana" "Peach"

describe("When wordContainsA is given a array of words,", () => {

    it("returns all the words that contain a letter 'a'.", () => {
        
        const actResult = wordContainsA(arrayOfWords)

        expect(actResult).toEqual(["Apple", "Banana", "Peach"])

    })
})

// b) Create the function that makes the test pass.

const wordContainsA = (array) => {

    return array.filter(word => {
        if(word.includes('a') || word.includes('A')){
            return word
        }
    })

}



// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind.

// a) Create a test with an expect statement using the variable provided.

var hand1 = [5, 5, 5, 3, 3]
// Expected output: true
var hand2 = [5, 5, 3, 3, 4]
// Expected output: false
var hand3 = [5, 5, 5, 5, 4]
// Expected output: false

describe("When isFullHouse is given an array of 5 numbers,", () => {

    it("returns a boolean value determining if the array is a full house or not.", () => {

        const actResult = isFullHouse(hand1);
        
        expect(actResult).toEqual(true);
    })
    it("returns a boolean value determining if the array is a full house or not.", () => {

        const actResult = isFullHouse(hand2);
        
        expect(actResult).toEqual(false);
    })
    it("returns a boolean value determining if the array is a full house or not.", () => {

        const actResult = isFullHouse(hand3);
        
        expect(actResult).toEqual(false);
    })
})

// b) Create the function that makes the test pass.

// Deven + Sarah discussion on how to go about this problem:
// check for unique values and the count of the values 
// store the cards in an object (key:value pair)
// find two unique values and check to see if there are multiple of them 
// keeping track of the characters and tracking them: update the value within the object

const isFullHouse = (array) => {

    if(array.length !== 5){
        return "Please give me a 5 card hand to evaluate, no less no more."
    }
    // make sure given array is correct length for a poker hand

    let count = {};
    // object to store the counts of each occurring element

    for(let i = 0; i < array.length; i++){
        // iterate through all of the cards
        let current = array[i];
        // store the current i'th card in a variable called 'current'
        count[current] = count[current] ? count[current] + 1 : 1;
        // place the current number inside the object, then check if the current number is seen in the object and add 1 to it, if it is not, keep the value of 1
    }
    
    if(Object.values(count)[0] == 2 && Object.values(count)[1] == 3){
        return true;
    } else if(Object.values(count)[0] == 3 && Object.values(count)[1] == 2){
        return true;
    } else {
        return false;
    }
    // if the values match the full house sequence, print out true, otherwise false
}

console.log(isFullHouse(hand1))
console.log(isFullHouse(hand2))
console.log(isFullHouse(hand3))


// previous attempts
// // super long tedious function that only works well given certain hands, so it fails
// const isFullHouse1 = (array) => {

//     let sameCard = 0;
//     let pair;
//     let tripple;

//     for(let i = 1; i < 4; i++){
//         if(array[0] == array[i]){
//             sameCard += 1;
            // // if the current card matched the following cards, increase the sameCard counter by 1
//         }
//     }

//     if(sameCard === 3){
//         tripple = sameCard;
//     } else if(sameCard === 2){
//         pair = sameCard;
            // // if the count is either a two or a three, store that value
//     } else {
//         sameCard = 0
            // // if the count is neither 2 or 3, keep sameCard variable at 0
//     }

//     for(let i = 2; i < 4; i++){
//         if(array[1] == array[i]){
//             sameCard += 1;
            // // if the current card matched the following cards, increase the sameCard counter by 1
//         }
//     }

//     if(sameCard === 3){
//         tripple = sameCard;
//     } else if(sameCard === 2){
//         pair = sameCard;
            // // if the count is either a two or a three, store that value
//     } else {
//         sameCard = 0
            // // if the count is neither 2 or 3, keep sameCard variable at 0
//     }

//     for(let i = 3; i < 4; i++){
//         if(array[2] == array[i]){
//             sameCard += 1;
            // // if the current card matched the following cards, increase the sameCard counter by 1
//         }
//     }

//     if(sameCard === 3){
//         tripple = sameCard;
//     } else if(sameCard === 2){
//         pair = sameCard;
            // // if the count is either a two or a three, store that value
//     } else {
//         sameCard = 0
            // // if the count is neither 2 or 3, keep sameCard variable at 0
//     }

//     for(let i = 4; i < 4; i++){
//         if(array[3] == array[i]){
//             sameCard += 1;
            // // if the current card matched the following cards, increase the sameCard counter by 1
//         }
//     }

//     if(sameCard === 3){
//         tripple = sameCard;
//     } else if(sameCard === 2){
//         pair = sameCard;
            // // if the count is either a two or a three, store that value
//     } else {
//         sameCard = 0
            // // if the count is neither 2 or 3, keep sameCard variable at 0
//     }

//     if(tripple === 3 && pair === 2){
//         return true;
//     } else {
//         return false
//     }
        // // if the stored values equal the targeted values print true otherwise false

// }



// // Tried to refactor the above attempt but still is not functioning as expected
// const isFullHouse2 = (array) => {

//     let sameCard = 0;
//     let pair;
//     let tripple;

//     for(let cc = 0; cc < array.length; cc++){
//         // loop to check if the cc (current card) matches the rest of the cards
//         for(let nc = (cc + 1); nc < array.length - 1; nc++){
//             // loop that iterates through the nc (nextcard) to check if it's the same as cc
//             if(array[cc] == array[nc]){
//                 // check if the cc is the same as the nc
//                 sameCard += 1;
//                 // augment the count for every match
//             }
//         }

//         if(sameCard === 2){
//             tripple = sameCard + 1;
//             sameCard = 0;
//             // if the first iteration on the first card is a 3, store it
//         } else if(sameCard === 1){
//             pair = sameCard + 1;
//             sameCard = 0;
//             // if it is a 2, store that
//         } else {
//             sameCard = 0
//             // if there were no findings of either a pair or a tripple, reset the counter
//         }
//     }

//     if(tripple === 3 && pair === 2){
//         return true;
//     } else {
//         return false
//     }
//     // evaluates whethere there has been a full house or not

// }

