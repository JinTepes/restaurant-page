//test if working
console.log("inital setup is working!")
//imports
import './style.css';
import addNav from "./modules/navbar.js";
import buildHome from './modules/home.js';
import buildAbout from './modules/about.js';
import buildMenu from './modules/menu.js';
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
function addMenu(){
    infoBody.innerHTML = "";
    infoBody.appendChild(buildMenu());
}

//button clicks
let navHome = document.getElementById("navHome");
navHome.onclick = function(){
    addHome();
    //Home order button click
    let orderBTN = document.getElementById('btn_order');
    orderBTN.onclick = function() {
        navMenu.click();
    }
}

let navAbout = document.getElementById("navAbout");
navAbout.onclick = function(){
    addAbout();
}

let navMenu = document.getElementById("navMenu");
navMenu.onclick = function(){
    addMenu();
}