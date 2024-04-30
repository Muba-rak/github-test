console.log("DOM");
// selct elemnt on the document (id, class, tag)
// QuerySelector ( css selectors)
// querySelectorAll
// const heading = document.querySelector("h1");
// console.log(heading);
// const headings = document.querySelectorAll("h1");
// console.log(headings);
// const paras1 = document.querySelectorAll("p");
// console.log(paras1);
// paras.forEach((para) => {
//   para.textContent += " new content";
// });
// const para1 = document.querySelector(".text");
// console.log(para1);

// const para2 = document.querySelector("#text2");
// console.log(para2);
// // document.querySelector('div p')

//getElementById
// const paragragh = document.getElementById("text2");
// console.log(paragragh);

// const paragragh2 = document.getElementsByClassName("text");
// console.log(paragragh2);

// const paras = document.getElementsByTagName("p");
// console.log(paras);

// Changing content on the document textContent 'muh, innerText, innerHTML <a></a>
// const heading = document.querySelector("h1");
// // heading.textContent = "CHANGED CONTENT";
// heading.innerText += " is Fun";

// // +=
// const para = document.querySelector(".text");
// para.textContent += " Changed the content from JS";

// const box = document.querySelector(".box");
// box.innerHTML += `<h2>I AM A TAG FROM JS</h2>`;

//get and setting attribute
const link = document.querySelector("a");
// const href = link.getAttribute("href");
// console.log(href);
// link.setAttribute("target", "_blank");
// link.setAttribute("style", "font-size: 2em");
// link.setAttribute("style", "color: red");

//styling
// style

link.style.backgroundColor = "red";
link.style.fontSize = "2px";

// class Names -- classList (add, remove)
const box1 = document.querySelector(".box-1");
const box2 = document.querySelector(".box-2");

// box1.classList.add("success");
box1.className = "success";
box2.classList.add("error");

// const heading = document.querySelector("h1");
// heading.classList.remove("success");

//classList.add --> adds a new class name to the previous classes
//className --> overrides the previous classes
//div.ClassList.add = 'tobi'

// Create a new element - createElement

const heading2 = document.createElement("h1");
heading2.textContent = "I am a newly created element";
heading2.style.backgroundColor = "blue";

const body = document.querySelector("body");

body.appendChild(heading2);

//removeChild

// RESPONDING TO USERS INTERACTION

// Event handling - click event, form is submitted, input

const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  body.style.backgroundColor = "blue";
});
