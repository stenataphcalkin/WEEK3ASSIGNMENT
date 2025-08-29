console.log("Poyo!");
async function cookieUpgrades() {
  const response = await fetch("https://cookie-upgrade-api.vercel.app/api/upgrades");
  console.log("HTTP Response:", response);
  const json = await response.json();
  console.log("JSON Data:", json);
}

cookieUpgrades();

//Reminder to look at the foxes apis fetch to put images and data together

//default starting values for cookie count and cps (either or)
let cookieCount = 0;
let cps = 0;

//'Cookie' button click listener & event handler
const button = document.querySelector("button"); 
button.addEventListener("click", function (event) {
console.log("clicked")
cookieCount++;
});

//Synchoronising local values
function handleLocalStorageChange(event) {
    if (event.key === "cookieCount") {
        const newValue = event.newValue;
        console.log('local storage cookieCount changed to: ${newValue}');
    }
}

//Local Storage save clicks
localStorage.setItem("cookieCount", "cps")
let item = localStorage.getItem(cookieCount) 
const form = document.querySelector("button");

const currentCookies = localStorage.setItem("cookieCount")
document.getElementById("cookieCount").value = currentCookies

//CONST - provided code from Manny
const stats = {
  cookieCount: 0,
  cps: 0,
};

//if there is data in local storage, update stats with this data, so the user picks it up where they left off

//=======================================================
//shop upgrades
//fetch the upgrades from the API
//API url: https://cookie-upgrade-api.vercel.app/api/upgrades

//To create multiple elements in a more convenient way, loops are your friend.
// create DOM elements to contain the upgrades data
// create an element
// assign the value to its text content
// append it to the DOM
// after you complete this task, you should see the upgrades on your website

//====================================================
//the interval
setInterval(function () {
  cookieCount += cps; //cookieCount = cookieCount + cps
  //update the text content in the DOM with the new values
  //save the new values in local storage
}, 1000);

//==========================================================
//game logic

//when the user clicks on the cookie, the cookieCount value goes up by 1

//when the user clicks on the buy button in an upgrade in teh shop, the cookieCount value goes down, and the cps value goes up

//you will need functions to contain the game logic.
//to create the logic of the shop, you could have a function per upgrade OR you could have a reusable function that works for ALL upgrades
//since we are using local storage, make sure that the local storage values are updated after the user buys an upgrade OR when the user clicks on the cookie