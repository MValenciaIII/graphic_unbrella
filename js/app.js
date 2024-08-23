

//? This will grab the entire element by the ID name
//* ex. <h3 id="serviceAmazing">AMAZING</h3>
let serviceHeading = document.getElementById("serviceAmazing");

console.log(serviceHeading);

//? Grabbing the id by multiple elements by className
//* Makes an array with all the elements with the specfied classname
let serviceElements = document.getElementsByClassName("serviceIcons");

console.log(serviceElements);


//? Grabbing the element by css selection
let serviceSupport = document.querySelector(".amazingIcon h4")

console.log(serviceSupport);

//? Grabbing all the elements by css selection
//* Makes an array with all the elements with the specfied classname
let serviceColumns = document.querySelectorAll(".serviceIcons h4")

console.log(serviceColumns);


//? Modify Elements section

//* if we want to add text use .innerHTML
serviceHeading.innerHTML = "AMAZING"

//? chaning the text for a specfic index in a NODECollection 
serviceColumns[2].innerHTML = "Pizza"


// function styleCenter() {
//     for (let i = 0; i < serviceColumns.length; i++) {
//         const element = serviceColumns[i];
        
//         serviceColumns[i].style.fontSize = "center";
//     }

// }

// styleCenter();

//? Styling Elements
//* https://www.w3schools.com/jsref/dom_obj_style.asp
//* If you look up styling property it should give you the Javascript syntax
// serviceSupport.style.color = "green"
// serviceSupport.style.fontSize = "60px"


//? EVENT LISTENERS

//! THIS IS A IMAGE ELEMENT
let serviceImageOne = document.querySelector(".amazingIcon img")

console.log(serviceImageOne);

//serviceImageOne.addEventListener("mouseover", onImagePress)

function onImagePress() {
    console.log("Hey ya pressed me!")
}

//! THIS IS LIST OF H3 elements
let servicesText = document.querySelectorAll(".services h3")

console.log(servicesText);

function stylingText() {
    for (let i = 0; i < servicesText.length; i++) {
        const element = servicesText[i];
        
        servicesText[i].style.color = "green";
        servicesText[i].style.fontSize = "60px";
    }
}

serviceImageOne.addEventListener("click", stylingText);


//#region DOM PROBLEMS
//! DOM Problems

//! 1. If mobile image is clicked, change navText color to 
//? BLUE

//? THIS IS THE MOBILE IMG NODE
let mobileImg = document.querySelector(".mobileImg");

mobileImg.addEventListener("click", () => {
    //? THIS IS A ARRAY LIST OF all the "a" tags in the header
    let navText = document.querySelectorAll("nav a")
    console.log(navText);
    // navText[0].style.color = "blue"
    // navText[1].style.color = "blue"

    for (let i = 0; i < navText.length; i++) {
        const currentText = navText[i];
        
        navText[i].style.color = "blue";
    }
} )

//! 2. If Pizza is still on the page. Find where to revert it to original word
serviceColumns[2].innerHTML = "Design";

//? Grabbing a elements text value;
let webTitle = document.querySelector(".webIcon h3").innerText;
//? This way works too
//* webTitle.innerText


console.log(webTitle);


//!3. Console.log("I'ma Mr.Portfolio") if Hovered over portfolio word on website

let portfolioJSText = document.getElementById("portfolioText");
console.log(portfolioJSText);

function mrPortfolio() {
    console.log("I'ma Mr.Portfolio!");
}

portfolioJSText.addEventListener("mouseover", mrPortfolio);


//! 4. 

let greenPortfolioTags = document.querySelectorAll(".greenBoxSpan span p");

//? HOW TO CHANGE THE BACKGROUND FOR THESE ELEMENTS V
// greenPortfolioTags[0].style.backgroundColor = "purple";

function purpleTags() {
    for (let i = 0; i < greenPortfolioTags.length; i++) {
        const element = greenPortfolioTags[i];
        
        greenPortfolioTags[i].style.backgroundColor = "purple"

    }
}



purpleTags();


//! 5. 

let mooImage = document.querySelector(".mooImage");
console.log(mooImage);


mooImage.addEventListener("click", () => {
    let portfolioHeaders = document.querySelectorAll(".greenBoxSpan h3");
    console.log(portfolioHeaders);

    for (let i = 0; i < portfolioHeaders.length; i++) {
        const element = portfolioHeaders[i];
        
        portfolioHeaders[i].style.fontSize = "60px";
    }
})

//#endregion




//! Input boxes
//? Grabbing values
//? onchanges
//?

//? Eventlistener

 
//? Saving info based each key pressed. (Dynamic Updating)
// let inputName = document.getElementById("name")
// //* Created this variable to save input values
// let savedInfo = "";

// console.log(inputName)


// inputName.addEventListener("input", () => {
//     //? this is grabbing the inputBoxes value
//     //! INNERTEXT IS ONLY FOR HTML text Tags
    
    
//     savedInfo = inputName.value;
//     console.log(savedInfo);
// })


// //! 2nd Option on saving infomation from a input textbox

// //* THis variable is being used to grab the input value
// let inputEmail = document.querySelector("#email");
// //* this variable is being used for the eventListener
// let subscribeButton = document.querySelector(".subscribe input");
// let savedEmailInfo = "";

// subscribeButton.addEventListener("click", () => {
    
//     savedEmailInfo = inputEmail.value;
//     //? 
//     inputEmail.value = "";
//     console.log(savedEmailInfo);
// })

//! Saving a list of personal infomation

//? THis is going to hold my detail objects of information
let subscribeList = [];
//? This is my object Template to push into the array later
let personInfo = {
    name: "", 
    email: ""
};


//? What's going to activate our input variables to grab the values? 
//* THis variable is going to be used for my eventListener
let subscribeButton = document.querySelector(".subscribe input");

subscribeButton.addEventListener("click", grabNewsLetterInfo)

function grabNewsLetterInfo() {
    //? These variables is going to grab the input NODES (Elements)
    let inputName = document.querySelector("#name");
    let inputEmail = document.querySelector("#email");

    //? Setting object new values from the input boxes
    personInfo.name = inputName.value;
    personInfo.email = inputEmail.value;

    //? Pushing object into array
    subscribeList.push(personInfo);
    console.log(subscribeList);

    //? Clearing out the input boxes
    inputName.value = "";
    inputEmail.value = ""
}