const quoteText = document.querySelector(".quote"),
authorName = document.querySelector(".author"),
quoteBtn = document.querySelector("button");

function randomQuote() {
    fetch("https://api.quotable.io/random").then(res => res.json()).then(result => {
        quoteText.innerText = result.content;
        authorName.innerText = result.author;
    });
}

//disables the button
const button = document.getElementById("dose")
function myFunction() {
  button.disabled = true;
  setTimeout(()=>{
    button.disabled = false;
    console.log('Button Activated')}, 2000)
}
myFunction();

quoteBtn.addEventListener("click", randomQuote);