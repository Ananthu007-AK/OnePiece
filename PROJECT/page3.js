function change(imageSrc) {
    document.getElementById('zoom').src = imageSrc;
}



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
        id: 2,  // Unique ID for the product
        name: "Roronoa Zoro Action Figure",
        price: 6399,
        image: "zoro.jpg"
    };

    addToCart(product);
});