// Hand making objects 

// const oatmealCreamPie = {
//     title: "Oatmeal Cream Pie",
//     brand: "Little Debbie",
//     flavor: "Oatmeal Cream",
//     filling: "Vanilla Frosting",
//     amount: "12pc",
//     description: "Soooo yummy"
// }

// const nuttyBuddy = {
//     title: "Nutty Buddy",
//     brand: "Little Debbie",
//     flavor: "chocolate and peanut butter",
//     filling: "peatnut butter",
//     amount: "12pc",
//     description: "Soooo yummy"
// }
const littleDebbieArray = []


const loadDatabase = function (databaseObject, localStorageKey) {
    /* Convert the Object into a string. */
    let stringifiedDatabase = JSON.stringify(databaseObject)
    /* Create a key in local storage, and store the string
        version of your inventory database as the value */
    localStorage.setItem(localStorageKey, stringifiedDatabase)
}
// loadDatabase(littleDebbieArray, "Little Debbie Array");


function storeSnack (arg){
    littleDebbieArray.push(arg);
    loadDatabase(littleDebbieArray, "Little Debbie Array");
}

// function that makes objcts!!! THIS more efficient!!
// you an use the same variable name for the key without it causing issues, some are the same here some a dif to remind me 
const snackMaker = (title, brand, flavor, filling, amount2, description2) =>{
    const snackCake = {
        title: title,
        brand: brand,
        flavor: flavor,
        filling: filling,
        amount: amount2,
        description: description2
    }
    storeSnack(snackCake);
}

const vanillaCake = snackMaker("Cake", "Little Debbie", "Vanilla", "Frosting", "12pc", "Yummy Yummy");

const nuttyBuddy = snackMaker("Nutty Buddy", "Little Debbie",  "chocolate and peanut butter", "peatnut butter", "12pc",
"Soooo yummy");

const oatmealCreamPie = snackMaker("Oatmeal Cream Pie", "Little Debbie", "Oatmeal Cream", "Vanilla Frosting", "12pc", "Soooo yummy");

// function populateDB(){

// littleDebbieArray.push(oatmealCreamPie);
// littleDebbieArray.push(nuttyBuddy);
// littleDebbieArray.push(vanillaCake);

// const stringified = JSON.stringify(littleDebbieArray);
// localStorage.setItem("Little Debbie Array", stringified)
// }
