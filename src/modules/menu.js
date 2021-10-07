//building menu information
function buildMenu(){
    //holder div
    const holder = document.createElement('div');
    holder.id = "menuHolder";
    //creating the menu item
    foods.forEach((food) => {
        holder.appendChild(food);
    }
    );
    //returning the holder
    return holder;
}

//creating food item card.
function crfoodItem(name,price,alt,imglink){
    //food item holder
    let mHolder = document.createElement('div');
    mHolder.classList.add("foodItemDiv");
    //div to hold the image
    let imgHolder = document.createElement('img');
    imgHolder.classList.add("imgHolder");
    imgHolder.setAttribute('src', imglink);
    imgHolder.setAttribute('alt', alt);
    //div to hold food info like name and price
    let fnHolder = document.createElement('div');
    fnHolder.classList.add("finfoHolder");
    let fname = document.createElement('h3');
    let fprice = document.createElement('h3');
    //putting it all together
    //info holder
    fnHolder.appendChild(fname);
    fnHolder.appendChild(fprice);
    //overall
    mHolder.appendChild(imgHolder);
    mHolder.appendChild(fnHolder);
    //adding the info
    fname.innerText = name.toString();
    fprice.innerText = "$" + price.toString();
    //returning whole div
    return mHolder;
}

//array of the food items
let foods = [
    crfoodItem("Balut","2.00","balut img","https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fedge.alluremedia.com.au%2Fm%2Fg%2F2016%2F07%2Fbalut.jpg&f=1&nofb=1"),
    crfoodItem("Neon Balls","5.00","neon balls img","https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.wikihow.com%2Fimages%2F3%2F3b%2FMake-Kwek-Kwek-Step-12.jpg&f=1&nofb=1"),
    crfoodItem("Crispy Squid Rings","8.00","squid rings img","https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FVMfRRGcopyA%2Fmaxresdefault.jpg&f=1&nofb=1"),
    crfoodItem("Sisig","15.00","sisig img","https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fd%2Fd7%2FAuthentic_Kapampangan_Sisig.jpg&f=1&nofb=1"),
    crfoodItem("Mango Float","16.00","mango float img","https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.phonebooky.com%2Fblog%2Fwp-content%2Fuploads%2F2019%2F06%2F18111807%2FMango-Float1.jpg&f=1&nofb=1"),
    crfoodItem("Spiral Chicken Insides","3.00","spiral chicken img","https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fimages.summitmedia-digital.com%2Fyummyph%2Fimages%2F2021%2F08%2F13%2Fisaw.jpg&f=1&nofb=1")
];

//exporting
export default buildMenu;