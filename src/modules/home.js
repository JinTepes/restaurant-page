//making home body information
function buildHome(){
    //holder div
    const holder = document.createElement('div');
    holder.id = "homeHolder";
    //texts with their id's
    let line1 = document.createElement('h3');
    line1.id = "line1";
    line1.innerText = "What the food!"
    let line2 = document.createElement('h3');
    line2.id = "line2";
    line2.innerText = "Makes you question reality"
    //button
    let btn_holder = document.createElement('div');
    btn_holder.id = "btn_holder";
    let btn_order = document.createElement('button');
    btn_order.id = "btn_order";
    btn_order.innerText = "ORDER"
    //putting it all together
    holder.appendChild(line1);
    holder.appendChild(line2);
    btn_holder.appendChild(btn_order);
    holder.appendChild(btn_holder);
    //log
    console.log("home has been built!");
    //returning the holder div
    return holder;  
}
//exporting
export default buildHome;