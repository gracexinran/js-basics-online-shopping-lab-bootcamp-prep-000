var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}


// function addToCart(item) {
//   var newitem = {itemName: item, itemPrice: Math.floor(Math.random() * 100) + 1};
//   getCart().push(newitem);
//   return `${item} has been added to your cart.`;
// }
//
function addToCart(item){
  return getCart().push({itemName:item, itemPrice:Math.floor(Math.random()*100)+1});

}

// function viewCart() {
//   var i;
//   var string = "";
//   for(i=0; i<getCart().length-1; i++){
//     string += `${getCart()[i].itemName} at $${getCart()[i].itemPrice}, `;
//   }
//   if(getCart().length>1){
//     return `In your cart, you have ${string}and ${getCart()[(getCart().length)-1].itemName} at $${getCart()[(getCart().length)-1].itemPrice}.`;
//   }else if(getCart().length===1){
//     return `In your cart, you have ${getCart()[i].itemName} at $${getCart()[i].itemPrice}.`
//   }else{
//     return "Your shopping cart is empty."
//   }
// }
//
// function total() {
//   var total = 0;
//   for(var i=0;i<getCart().length;i++){
//     total += getCart()[i].itemPrice;
//   };
//   return total;
// }
//
// function removeFromCart(item) {
//   for (var i=0; i<getCart().length; i++){
//   if(getCart()[i].itemName === item){
//       return getCart().splice(i,1);
//     }
//   }
//   return "That item is not in your cart.";
// }
//
//
// function placeOrder(cardNumber) {
//   if(cardNumber>0){
//     var totalcost = total();
//     getCart().splice(0,getCart().length);
//     return `Your total cost is $${totalcost}, which will be charged to the card ${cardNumber}.`;
//   }else{
//     return "Sorry, we don't have a credit card on file for you.";
//   }
// }
