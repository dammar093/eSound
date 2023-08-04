
// ========search===
function searchDisplay(){
    let serchbox=document.querySelector('.search');
    // console.log(serchbox)
    serchbox .classList.toggle('diplay-search');
}
// =========cart===
function displayCart(){
    let cart=document.querySelector('.cart-menu');
    // console.log(cart);
    cart.classList.add('cart-display');
}
function closeCart(){
    let cart=document.querySelector('.cart-menu');
    cart.classList.remove('cart-display');
}