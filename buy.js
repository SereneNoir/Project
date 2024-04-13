function openBuy(itemId, itemName) {
    var dialogId="buy-form"+itemId;
    document.getElementById(dialogId).style.display="block";
    document.getElementById("itemname"+itemId).value=itemName;
    document.getElementById(dialogId).style.animation="slideRight 0.9s ease";

    
}
function closeBuy(itemId) {
        document.getElementById(itemId).style.animation="closebuyForm 1.5s ease";  
        setTimeout(function() {
            document.getElementById(itemId).style.display="none"
            document.querySelector(".dialog-box").style.animation="none"
        },900)

}

function increaseQuantity(itemId) {
    document.getElementById(itemId).value++;
}
function decreaseQuantity(itemId) {
    if(document.getElementById(itemId).value>=2){
    document.getElementById(itemId).value--;
    }
}

