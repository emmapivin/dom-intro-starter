// first section
document.getElementById("firstPara").innerHTML += " <span class='tan'>This is new tan text</span>";

//second section
let images = document.getElementsByTagName("img");
//console.log(images);

for(let image of images)
{
    image.width = "250";
}

//third section

//getter, put in a variable

// if you're using a query method with a plural name and setting it to a variable, it will automatically return an HTML collection
let lightBlueSpans = document.getElementsByClassName("light-blue");
let dkBlueSpans = document.getElementsByClassName("med-blue");

console.log(lightBlueSpans);

for(let span of lightBlueSpans)
{
    span.style.color = "#7C9EA6";
}

for(let span of dkBlueSpans)
{
    span.style.color = "#3C5E73";
}

// fourth section
let svgs = document.querySelectorAll("#svgs svg");

// creates array of colors and goes through all of them
let colors = ["#283040", "#3C5E73", "#7C9EA6", "#D9BCA3", "#F2DCC9"]

for(let i = 0; i < svgs.length; i++)
{
    svgs[i].style.stroke = colors[i];
}

// fifth section

document.querySelector("#query .bold").style.color = "#7C9EA6";
//go to container with ID #query and descendents that are bold

// sixth section

// in the first li inside of this content list on the page, change to new VALUE
document.querySelector(".content_list li:first-of-type").textContent = "This is new list item text";

// gives us all the li's as a collection
    // can acces a specific one with square brackets and an INDEX
document.querySelectorAll(".content_list li")[2].innerHTML += "<strong> Emma Pivin</strong>";

//seventh section

//query selector accepts anything of a valid CSS selector!
    // ex) select by tag name, ID, attribute
    // ex) space to indicate a child (here the anchor tag child of the #remove ID)!!!
document.querySelector("#remove a").removeAttribute("hidden");