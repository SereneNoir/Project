let wishlistValue=0;
let itemId;
let itemName;
let itemImgSrc;

function applyHoverEffect() {
    button.style.backgroundColor = "white";
    button.style.color = "black";
  }
  function removeHoverEffect() {
    button.style.backgroundColor = "red"; 
    button.style.color="white"
  }
function addToWishlist(itemId,itemName,itemImgSrc) {
    wishlistValue++;
    // localStorage.setItem('namekey',itemName);
    // console.log(wishlistValue);
    var button =   document.querySelector("#wishlist-btn"+itemId);
    document.querySelector(".wishlistValue").textContent=wishlistValue;
    document.querySelector("#wishlist-btn"+itemId).innerHTML=
    "<i class='fa-solid fa-heart' style='color: #ff2e2e;'></i> Added to Wishlist";
    document.querySelector("#nav-wishlist").className="fa-solid fa-heart";
    button.style.backgroundColor="white";
    button.style.color="black"
    button.disabled=true;
    updateWishlist(itemId,itemName,itemImgSrc);
}
function updateWishlist(itemId, itemName, itemImgSrc) {
    //Remove No items Paragraph 
    document.getElementById("no-items").style.display="none"

    // Create a new wishlist item container 
    var wishlistItemContainer = document.createElement('div');
    wishlistItemContainer.className = 'wishlist-item'; //This has style property in css file

    // Create a new item name container
    var itemNameContainer = document.createElement('h2');
    itemNameContainer.textContent = itemName;

    // Create a new item image container
    var itemImage = document.createElement('img');
    itemImage.src = itemImgSrc;
    itemImage.alt = itemName; // Optionally set the alt attribute

    
    //Create a new view details button
    detailsButton = document.createElement('button');
    detailsButton.className="wishlist-detailsButton"
    detailsButton.innerHTML="<i class='fa-solid fa-circle-info'></i> View Details";

    detailsButton.addEventListener('click', function() {
        closeDialog();
        if(itemId==1) {
            openDialog1();
        }
        else if(itemId==2) {
            openDialog2();
        }
        else if(itemId==3) {
            openDialog3();
        }
        else if(itemId==4) {
            openDialog4();
        }
        else if(itemId==5) {
            openDialog5();
        }
        else if(itemId==6) {
            openDialog6();
        }
        else if(itemId==7) {
            openDialog7();
        }
        else if(itemId==8) {
            openDialog8();
        }
        else {
            alert('Problem in line 69');
        }
    });

    // Create a new buy button
    var deleteButton = document.createElement('button');
    deleteButton.className="wishlist-deleteButton";
    deleteButton.innerHTML = '<i class="fa-solid fa-trash"></i> Delete'

    deleteButton.addEventListener('click', function() {
        var wishlistItem = this.closest(".wishlist-item");

    // Check if a ".wishlist-item" element was found
    if (wishlistItem) {
        wishlistItem.style.display = "none";
        wishlistValue--;
        document.querySelector(".wishlistValue").textContent=wishlistValue;
        var button =   document.querySelector("#wishlist-btn"+itemId);
        button.style.backgroundColor="red"
        button.style.color="white";
        button.innerHTML="<i class='fa-regular fa-heart'></i> Add to Wishlist";
        button.addEventListener("mouseover", applyHoverEffect)
          button.addEventListener("mouseout", removeHoverEffect)
        button.disabled=false;
        if(wishlistValue==0) { //If wishlistValue becomes 0 after deleting all
            document.getElementById("nav-wishlist").className="fa-regular fa-heart";
            document.getElementById("no-items").style.display="block"
        }
    } else {
        console.error("Error: Wishlist item not found");
    }
    });


    // Append all elements to the wishlist item container
    wishlistItemContainer.appendChild(itemNameContainer);
    wishlistItemContainer.appendChild(itemImage);
    wishlistItemContainer.appendChild(detailsButton);
    wishlistItemContainer.appendChild(deleteButton);

    // Append the wishlist item container to the wishlist container
    var wishlistDialogContainer = document.getElementById("dialogBoxContainer");
    var wishlistContainer = wishlistDialogContainer.querySelector(".wishlist-container");
    wishlistContainer.appendChild(wishlistItemContainer);
}

function openDialog1(){
    document.querySelector("#modal1").style.display = "flex";

}
function closeDialog1() {
    document.querySelector('#modal1').style.display="none"
}
function openDialog2(){
    document.querySelector("#modal2").style.display = "flex";

}
function closeDialog2() {
    document.querySelector('#modal2').style.display="none"
}
function openDialog3(){
    document.querySelector("#modal3").style.display = "flex";

}
function closeDialog3() {
    document.querySelector('#modal3').style.display="none"
}
function openDialog4(){
    document.querySelector("#modal4").style.display = "flex";

}
function closeDialog4() {
    document.querySelector('#modal4').style.display="none"
}
function openDialog5(){
    document.querySelector("#modal5").style.display = "flex";

}
function closeDialog5() {
    document.querySelector('#modal5').style.display="none"
}
function openDialog6(){
    document.querySelector("#modal6").style.display = "flex";

}
function closeDialog6() {
    document.querySelector('#modal6').style.display="none"
}
function openDialog7(){
    document.querySelector("#modal7").style.display = "flex";

}
function closeDialog7() {
    document.querySelector('#modal7').style.display="none"
}
function openDialog8(){
    document.querySelector("#modal8").style.display = "flex";

}
function closeDialog8() {
    document.querySelector('#modal8').style.display="none"
}
function performSearch() {
    // Get the search input value
    var searchText = document.getElementById('searchInput').value;
    if(searchText=="") {
        return false;
    }
    else {

    // Get all product names
    var productNames = document.querySelectorAll('.txt-con #product-name');

    // Remove previous highlighting
    var highlightedElements = document.querySelectorAll('.highlight');
    highlightedElements.forEach(function(element) {
        element.classList.remove('highlight');
    });

    // Loop through each product name
    var foundMatch = false; // Flag to track if a match is found
    productNames.forEach(function(productName) {
        // Get the text content of the product name
        var name = productName.textContent;

        // Perform a case-insensitive search for the search text in the product name
        var highlightedName = name.replace(new RegExp(searchText, 'gi'), function(match) {
            foundMatch = true; // Set the flag to true if a match is found
            return '<span class="highlight">' + match + '</span>';
        });

        // Update the HTML of the product name with the highlighted text
        productName.innerHTML = highlightedName;
    });

    // Get the search input element
    var searchInput = document.getElementById('searchInput');

    // If no match is found, display "Not found" as placeholder and change background color to red
    if (!foundMatch) {
        searchInput.value=null;
        searchInput.style.backgroundColor = "#ff3333";
    } else {
        searchInput.placeholder = "Search Products";
        searchInput.style.backgroundColor = ""; // Reset background color
    }

    // Get the first highlighted element
    var firstHighlightedElement = document.querySelector('.highlight');

    // If a highlighted element is found, scroll to it smoothly
    if (firstHighlightedElement) {
        firstHighlightedElement.scrollIntoView({
            behavior: 'smooth',
            block: 'center'
        });
    }
}
}


// WISHLIST DIALOG BOX 
function openDialog() {
    var overlay = document.getElementById("overlayBackground");
    overlay.style.display="block";
    overlay.addEventListener('click', function() {
        closeDialog();
    }
    );
    document.getElementById("dialogBoxContainer").style.display = "block";
    document.getElementById("dialogBoxContainer").style.animation= "slideLeft 0.5s";
}

function closeDialog() {
    document.getElementById("overlayBackground").style.display = "none";
    document.getElementById("dialogBoxContainer").style.animation= "closeWishlist 0.5s";
    setTimeout(function() {
        document.getElementById("overlayBackground").style.display = "none";
        document.getElementById("dialogBoxContainer").style.display = "none";
        // Remove class to reset animation for next time
        document.getElementById("dialogBoxContainer").classList.remove("closeWishlist");
    }, 400); // Adjust according to animation duration
}