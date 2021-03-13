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

// check for unique values and the count of the values 
// store the cards in an object (key:value pair)
// find two unique values and check to see if there are multiple of them 
// keeping track of the characters and tracking them: update the value within the object
