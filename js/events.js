console.log("Dope")
const button = document.querySelector("#populateDatabase");

button.addEventListener("click", function () {
    loadDatabase(littleDebbieArray, "Little Debbie Array")
});


// when you put () after a function it imediatly calls the function doing it this way will hold a referance to the function to be called on click.