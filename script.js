function guessNumber() {
    let number = Math.floor(Math.random() * 100) + 1;
    let guess = document.getElementById("guess").value;
    let output = document.getElementById("output");
    console.log(guess);
    console.log(number);

    if (guess.value == number) {
        alert("You guessed the number!");
        output.innerHTML = "You guessed the number!";
    } else if (guess.value > number) {
        output.innerHTML = "Your guess is too high!";
    }
    else if (guess.value < number) {
        output.innerHTML = "You guess is too low!";

    }
}

guessNumber();