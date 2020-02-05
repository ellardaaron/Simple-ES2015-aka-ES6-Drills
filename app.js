// function favMovie(name="World" , movie = "The Room") {
//     console.log(`My name is ${name} and my favorite movie is ${movie}.`);
// };

// favMovie();
// favMovie('Katherine', 'How to Train Your Dragon');


//Bellow converted function into an arrow function


// favMovie = (name="World" , movie = "The Room") => {
//     console.log(`My name is ${name} and my favorite movie is ${movie}.`);
// };

// favMovie();
// favMovie('Katherine', 'How to Train Your Dragon');


//Bellow used concise body shorthand to make arrow function shorter


favMovie = (name = "World", movie = "The Room") => console.log(`My name is ${name} and my favorite movie is ${movie}.`);


favMovie();
favMovie('Katherine', 'How to Train Your Dragon');

//Arrow functions step 5


getFirstName = (fullName) => {
    const words = fullName.split(' ');
    console.log(words[0]);
}

getFirstName('Aaron Ellard');
getFirstName('Katherine Hotch');


let getFirstNameConcise = (fullName) => console.log(fullName.split(' ')[0]);

getFirstNameConcise('Aaron Ellard');
getFirstNameConcise('Katherine Hotch');

function newFunction (x, y) {
    let XToThePowerOfY = x^y;
    let productOfXAndY = x+y;
    console.log(`${XToThePowerOfY},${productOfXAndY}`);
};

newFunction(2,3);

//Spread Syntax

function favoriteFoodPoll (name, location, favFood) {
    console.log(`${name} ${location} ${favFood}`);
};

let ryan = ['Ryan', 'Birmingham', 'Spicy Noodles'];

console.log(favoriteFoodPoll(...ryan));

// var yourName;

function thatTakesAParameter (whatEverYouLike) {
    let spreadIntoAnArray = [...whatEverYouLike];
    console.log(spreadIntoAnArray);

    for (var i = 0; i < spreadIntoAnArray.length; i++) {
        console.log(spreadIntoAnArray[i]);
      };
};

thatTakesAParameter ('Aaron');