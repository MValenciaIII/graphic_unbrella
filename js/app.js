

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


function styleCenter() {
    for (let i = 0; i < serviceColumns.length; i++) {
        const element = serviceColumns[i];
        
        serviceColumns[i].style.textAlign = "center";
    }

}


//? Styling Elements
//* https://www.w3schools.com/jsref/dom_obj_style.asp
//* If you look up styling property it should give you the Javascript syntax
// serviceSupport.style.color = "green"
// serviceSupport.style.fontSize = "60px"


