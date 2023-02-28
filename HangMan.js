// #3

// letters 
const letters = "abcdefghijklmnopqrstuvwxyz";

// get array from letters 
let lettersArray = Array.from(letters);

// select letters container 
let lettersContainer = document.querySelector('.letters');

// generate letters 
lettersArray.forEach(letter => {

    // create span
    let span = document.createElement("span");

    // create letters text node
    let theLetter = document.createTextNode(letter);

    // append the letter to span
    span.appendChild(theLetter);

    // add class on span
    span.className = 'letter-box';

    //append the letter to the container
    lettersContainer.appendChild(span);

});

// #4

//object of words + categories
const words = {
    programming: ["php", "javascript", "css", "html", "python"],
    movies: ["No Time To Die", "Kings Man", "peaky Blinders", "Baby Driver", "Dhoom", ""],
    people: ["messi", "ronaldo", "mohammed", "albert einstein", "ahmed"],
    cities: ["london", "new york", "las vegas", "Doha", "Cairo", "jeddah", "munich"],
    countries: ["british", "syria", "turkye", "America", "saudi", "germany"]
}

// get random property
let allKeys = Object.keys(words);

// random number depend on keys lingth
let randomPropNumbers = Math.floor(Math.random() * allKeys.length);

// category 
let randomPropName = allKeys[randomPropNumbers];

//category words
let randomPropvalue = words[randomPropName];

// random number depend on words
let randomValueNumber = Math.floor(Math.random() * randomPropvalue.length);

//
let randomValueValue = randomPropvalue[randomValueNumber]; 

//set category info 
document.querySelector(".game-info .category span").innerHTML = randomPropName;

// #5

// select letters guess element
let lettersguessContainer = document.querySelector(".letters-guess");

// letters and space 
let lettersAndSpace = Array.from(randomValueValue);
console.log(lettersAndSpace);

// create spans depened on word
lettersAndSpace.forEach(letter => {

    //create empty span 
    let emptySpan = document.createElement("span");

    // if letter is empty
    if (letter === ' ') {

        // add class to the span
        emptySpan.className = 'with-space';
    }

    // append spans to the letter guess container
    lettersguessContainer.appendChild(emptySpan);
});

// select guess spans
let guessSpans = document.querySelectorAll(".letters-guess span");

// set wrong attempts
let wrongAttempts = 0;

// select the draw element
let thedraw = document.querySelector(".hangman-draw");


// #6


// handle clickig on letters 
document.addEventListener("click", (e) => {

    // set the shose status 
    let theStatus = false;

    if (e.target.className === 'letter-box') {
        
        e.target.classList.add("clicked");

        // get clicked letter
        let theClickedLetter = e.target.innerHTML.toLowerCase();

        // the chosen word 
        let theChosenWord = Array.from(randomValueValue.toLowerCase());
        
        theChosenWord.forEach((wordLetter, wordIndex) => {

        // if the clicked letter equal to one of the chosen word letter    
        if (theClickedLetter == wordLetter) {

        // set status to correct
        theStatus = true;

        // loop on all guess spans
        guessSpans.forEach((span, spanIndex) => {

            if (wordIndex === spanIndex) {

                span.innerHTML = wordLetter;
            };

        });
}
});

    // outside the loop
    console.log(theStatus);

    // if letter is worng 
    if (theStatus !== true) {

    // increase the wrong attempts
    wrongAttempts++;

    // add class on the draw element
    thedraw.classList.add(`wrong-${wrongAttempts}`);

    if (wrongAttempts === 8) {

        endGame();

        lettersContainer.classList.add("finished");
    }
    }
}
});

// #9

// end game fonction
function endGame() {

    //create popup div
    let div = document.createElement("div");

    // create text
    let divText = document.createTextNode(`Game Over. The Word is ${randomValueValue}`);

    // append text to div
    div.appendChild(divText);

    // add class on div
    div.className = "popup";

    // append to the body
    document.body.appendChild(div);
}