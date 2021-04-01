function getUsername() {
    var username = window.prompt("What would you like your username to be?")
    if (username === "Dondre") {
        document.write("correct")
    }
    else { getUsername()
    }
}

function imageCount() {
    // Ask for how many will smiths do you see?
    var userInput = window.prompt("How many Will Smiths do you see?")
// Prompt the user with a relevant question for a number (e.g.: “How many cats do you want?” or “What star rating would you give, 1-5?”)
    if(parseInt(userInput) <= 7) {
        // this starts the loop
    for (i = 0; i < userInput; i++) {
        document.write('<img src="./download.jpeg" alt=""></img>') 
    }

    } else {imageCount()}
}