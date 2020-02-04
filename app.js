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

getFirstNameConcise('Aaron Ellard')
getFirstNameConcise('Katherine Hotch');

function newFunction (x, y) {
    // return (`${x} ${y}`);
    let XToThePowerOfY = x^y;
   
    let productOfXAndY = x+y;
}

newFunction(2,3);
