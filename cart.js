// function updateSubtotal() { 
//     const cartItems = document.querySelectorAll('#cart-items tr'); 
//     let grandTotal = 0; 
//     cartItems.forEach(item => {
//          const price = parseFloat(item.dataset.price); 
//          const quantity = item.querySelector('input').value;
//          const subtotal = price * quantity; 
//          item.querySelector('.subtotal').innerText = 'Rs. ' + subtotal;
//          grandTotal += subtotal; }); 
//          document.getElementById('grand-total').innerText = grandTotal;
//          }
// function increaseQuantity(button) {
//     const input = button.previousElementSibling; 
//     input.value = parseInt(input.value) + 1; 
//     updateSubtotal(); 
// } 
// function decreaseQuantity(button) { 
//     const input = button.nextElementSibling; 
//     if (parseInt(input.value) > 1) {
//         input.value = parseInt(input.value) - 1; 
//         updateSubtotal(); 
//         } 
// } 
// function removeItem(button) { 
//     const row = button.parentElement;
//     row.parentElement.removeChild(row);
//     updateSubtotal();
// }


// const pricePerItem = 7599;
//     const quantityInput = document.getElementById("quantity");
//     const totalElement = document.getElementById("total");
//     const subtotalElement = document.getElementById("subtotal");
//     const cartItem = document.getElementById("cart-item");

//     function updateTotal() {
//         const quantity = parseInt(quantityInput.value);
//         const total = pricePerItem * quantity;
//         totalElement.innerText = "Rs. " + total;
//         subtotalElement.innerText = "Rs. " + total;
//     }

//     function increaseQuantity() {
//         let quantity = parseInt(quantityInput.value);
//         quantity += 1;
//         quantityInput.value = quantity;
//         updateTotal();
//     }

//     function decreaseQuantity() {
//         let quantity = parseInt(quantityInput.value);
//         if (quantity > 1) {
//             quantity -= 1;
//             quantityInput.value = quantity;
//             updateTotal();
//         }
//     }

//     function removeItem() {
//         cartItem.style.display = "none";
//         subtotalElement.innerText = "Rs. 0";
//     }



// let subtotal = 7599;

//     function updateSubtotal() {
//         document.getElementById("subtotal").innerText = "Rs. " + subtotal;
//     }

//     function changeQuantity(quantityId, totalId, pricePerItem, change) {
//         const quantityInput = document.getElementById(quantityId);
//         let quantity = parseInt(quantityInput.value);

//         quantity += change;
//         if (quantity < 1) quantity = 1; 

//         const itemTotal = pricePerItem * quantity;
//         document.getElementById(totalId).innerText = "Rs. " + itemTotal;

//         subtotal += (change * pricePerItem);
//         quantityInput.value = quantity;
//         updateSubtotal();
//     }

//     function removeItem(itemId, itemPrice) {
//         const itemElement = document.getElementById(itemId);
//         const quantity = parseInt(document.getElementById("quantity-" + itemId.split('-')[2]).value);

//         itemElement.style.display = "none";
//         subtotal -= itemPrice * quantity;

        
//         updateSubtotal();
//     }









// document.addEventListener('DOMContentLoaded', loadCart);

// function loadCart() {
//     const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
//     const cartContainer = document.getElementById('cart-items');
//     cartContainer.innerHTML = ''; // Clear previous content

//     let total = 0;

//     cartItems.forEach((item, index) => {
//         const itemTotal = item.price * item.quantity;
//         total += itemTotal;

//         cartContainer.innerHTML += `
//             <div class="cart-item">
//                 <h3>${item.name}</h3>
//                 <p>Price: Rs.${item.price}</p>
//                 <p>Quantity: 
//                     <button onclick="updateQuantity(${index}, -1)">-</button> 
//                     ${item.quantity} 
//                     <button onclick="updateQuantity(${index}, 1)">+</button>
//                 </p>
//                 <p>Subtotal: Rs.${itemTotal}</p>
//                 <button onclick="removeItem(${index})">Remove</button>
//             </div>
//             <hr>
//         `;
//     });

//     document.getElementById('total').innerText = `Total: Rs.${total}`;
// }

// function updateQuantity(index, change) {
//     let cart = JSON.parse(localStorage.getItem('cart'));

//     // Update quantity and remove if quantity goes below 1
//     cart[index].quantity += change;
//     if (cart[index].quantity < 1) {
//         cart.splice(index, 1);
//     }

//     // Save updated cart and reload cart display
//     localStorage.setItem('cart', JSON.stringify(cart));
//     loadCart();
// }

// function removeItem(index) {
//     let cart = JSON.parse(localStorage.getItem('cart'));

//     // Remove item at the specified index
//     cart.splice(index, 1);

//     // Save updated cart and reload cart display
//     localStorage.setItem('cart', JSON.stringify(cart));
//     loadCart();
// }









// Function to display cart items
function displayCart() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let cartItemsContainer = document.getElementById("cartItems");
    cartItemsContainer.innerHTML = "";  // Clear current content

    let total = 0;
    
    cart.forEach(item => {
        // Create each cart item element
        let cartItem = document.createElement("div");
        cartItem.classList.add("cart-item");
        cartItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}" width="100">
            <h3>${item.name}</h3>
            
            <p>
                <button onclick="updateQuantity(${item.id}, -1)">-</button>
                <span id="quantity-${item.id}">${item.quantity}</span>
                <button onclick="updateQuantity(${item.id}, 1)">+</button>
            </p>
            <p>Rs.<span id="subtotal-${item.id}">${item.price * item.quantity}</span></p>
            <button onclick="removeItem(${item.id})">Remove</button>
        `;
        
        // Append to cart container
        cartItemsContainer.appendChild(cartItem);
        
        // Update total
        total += item.price * item.quantity;
    });

    // Display total amount
    let totalContainer = document.getElementById("total");
    totalContainer.innerHTML = `<h2>Subtotal: Rs.${total}</h2>`;
}

// Function to update quantity of a product
function updateQuantity(productId, change) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let productIndex = cart.findIndex(item => item.id === productId);

    if (productIndex !== -1) {
        cart[productIndex].quantity += change;
        if (cart[productIndex].quantity < 1) {
            cart[productIndex].quantity = 1;
        }

        // Update quantity and subtotal in the cart
        localStorage.setItem("cart", JSON.stringify(cart));
        displayCart();
    }
}

// Function to remove an item from the cart
function removeItem(productId) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart = cart.filter(item => item.id !== productId);

    // Update cart in localStorage
    localStorage.setItem("cart", JSON.stringify(cart));
    displayCart();
}

// Call the displayCart function on page load
window.onload = function() {
    displayCart();
};