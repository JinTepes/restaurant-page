//test if working
console.log("inital setup is working!")
//imports
import './style.css';
import addNav from "./modules/navbar.js";
import buildHome from './modules/home.js';
import buildAbout from './modules/about.js';
//parent div
const content = document.getElementById("content");
//adding the navbar
addNav();
//adding information body
const infoBody = document.createElement("div");
infoBody.classList.add("infoBody");
content.appendChild(infoBody);
//init home
addHome();
//info body building functions
function addHome(){
    infoBody.innerHTML = "";
    infoBody.appendChild(buildHome());
}
function addAbout(){
    infoBody.innerHTML = "";
    infoBody.appendChild(buildAbout());
}