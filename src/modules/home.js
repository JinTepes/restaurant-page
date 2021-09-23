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
    let btn_order = document.createElement('button');
    btn_order.id = "btn_order";
    btn_order.innerText = "Order"
    //putting it all together
    holder.appendChild(line1);
    holder.appendChild(line2);
    holder.appendChild(btn_order);
    //log
    console.log("home has been built!");
    //returning the holder div
    return holder;  
}
//exporting
export default buildHome;