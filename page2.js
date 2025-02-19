function change(imageSrc) {
    document.getElementById('zoom').src = imageSrc;
}





// function addToCart(productName, price) {
//     // Get cart items from local storage or initialize as empty array
//     let cart = JSON.parse(localStorage.getItem('cart')) || [];

//     // Check if product already exists in cart
//     const existingProduct = cart.find(item => item.name === productName);

//     if (existingProduct) {
//         // If product exists, increase the quantity
//         existingProduct.quantity += 1;
//     } else {
//         // If product does not exist, add it as new item
//         cart.push({ name: productName, price: price, quantity: 1 });
//     }

//     // Save updated cart to local storage
//     localStorage.setItem('cart', JSON.stringify(cart));
// }




// page2.js

// Function to add product to the cart
function addToCart(product) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Check if product already exists in cart
    let productIndex = cart.findIndex(item => item.id === product.id);
    
    if (productIndex !== -1) {
        // Product already exists, increase quantity
        cart[productIndex].quantity++;
    } else {
        // Product does not exist in cart, add new item
        cart.push({ ...product, quantity: 1 });
    }

    // Save updated cart to localStorage
    localStorage.setItem("cart", JSON.stringify(cart));
}

// Event listener for Add to Cart button
document.querySelector(".addto").addEventListener("click", function() {
    let product = {
        id: 1,  // Unique ID for the product
        name: "Monkey D. Luffy Action Figure",
        price: 7599,
        image: "luffy.jpg"
    };

    addToCart(product);
});
