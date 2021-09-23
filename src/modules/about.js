//building about information
function buildAbout(){
    //holder div
    const holder = document.createElement('div');
    holder.id = "aboutHolder";
    //store hrs and address div info
    let infoDiv = document.createElement('div');
    infoDiv.id = "infoDiv";
    //
    let storeHrs = document.createElement('h2');
    storeHrs.id = "storeHrs_text";
    storeHrs.innerText = "Mon-Sun: 07:00 - 22:00";
    //
    let storeAddress = document.createElement('h2');
    storeAddress.id = "storeAddress_text";
    storeAddress.innerText = "Bermuda Triangle";
    //
    //map div
    let mapDiv = document.createElement('div');
    mapDiv.id = "mapDiv";
    mapDiv.innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26182273.76346553!2d-84.81836611797132!3d25.95235125500855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89451ab5034cb7ab%3A0xb600ecf3df7aca4d!2sBermuda%20Triangle!5e0!3m2!1sen!2sph!4v1632375628947!5m2!1sen!2sph" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy"></iframe>';
    //building everything
    infoDiv.appendChild(storeHrs);
    infoDiv.appendChild(storeAddress);
    holder.appendChild(infoDiv);
    holder.appendChild(mapDiv);
    //log
    console.log("about has been built!");
    //return
    return holder;
}   

export default buildAbout;