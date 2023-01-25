
// const hasRunIntro = localStorage.getItem("hasRunIntro");
// if (hasRunIntro !== "1"){
//     // Run the intro...
//     localStorage.setItem("hasRunIntro", "1");
// }



function randomNumber() {
    const randNum = Math.floor(Math.random() * 100) + 1;
    
    return randNum;
}

const clack = document.getElementById("guess");

// guess.addEventListener("click", guessNumber);

// give the fuction a name


//  guess.addEventListener("click", function guessNumber () {
//     const output = document.getElementById("output");
//     console.log(guess);
//     console.log(randomNumber());


//     if (guess == randomNumber()) {
//         alert("You guessed the number!");
//         output.innerHTML = "You guessed the number!";
//     } else if (guess > randomNumber()) {
//         output.innerHTML = "Your guess is too high!";
//     }
//     else if (guess < randomNumber()) {
//         output.innerHTML = "You guess is too low!";

//     }
    
// });

function getGuess() {
    const guess = document.getElementById("guess").value;
    return guess;
}


function guessNumber() {
    // let number = Math.floor(Math.random() * 100) + 1;
    // const guess = document.getElementById("guess").value;
    const output = document.getElementById("output");
    console.log(getGuess());
    console.log(randomNumber());


    if (getGuess() == randomNumber()) {
        // alert("You guessed the number!");
        output.innerHTML = "You guessed the number!";
    } else if (getGuess() > randomNumber()) {
        output.innerHTML = "Your guess is too high!";
    }
    else if (getGuess() < randomNumber()) {
        output.innerHTML = "You guess is too low!";

    }
}

// clack.addEventListener("click", guessNumber);

// guessNumber();
    // const guess = document.getElementById("guess").value;
