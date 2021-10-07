//gonna ba making the navbar
function buildNav(){
    //navbar container
    let navcon = document.createElement("div");
    //creating nav elements
    let lbl_home = document.createElement("h1");
    let lbl_menu = document.createElement("h1");
    let lbl_about = document.createElement("h1");
    //labeling elements for css
    navcon.id = "navContainer";
    lbl_home.classList.add("navItem");
    lbl_home.id = "navHome";
    lbl_menu.classList.add("navItem");
    lbl_menu.id = "navMenu";
    lbl_about.classList.add("navItem");
    lbl_about.id = "navAbout";
    //puting text onto nav elements
    lbl_home.innerHTML = "Home";
    lbl_menu.innerHTML = "Menu";
    lbl_about.innerHTML = "About";
    //appending
    navcon.appendChild(lbl_home);
    navcon.appendChild(lbl_menu);
    navcon.appendChild(lbl_about);
    //returning navcon
    return navcon;
}
//showing navbar
function addNav(){
    let content = document.getElementById("content");
    content.appendChild(buildNav());
    console.log("navbar built successfully!")
}

//exporting the function
export default addNav;