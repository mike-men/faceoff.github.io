document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    const navbar = document.querySelector('.navbar');
    const icon = document.getElementById('hamburger-icon');

    hamburger.addEventListener('click', function() {
        // Toggle the active class on the navbar
        navbar.classList.toggle('active');

        // Toggle between hamburger and close icons
        if (navbar.classList.contains('active')) {
            icon.classList.replace('bx-menu', 'bx-x');
        } else {
            icon.classList.replace('bx-x', 'bx-menu');
        }
        
        // Log the icon's class for debugging
        console.log(icon.className);
    });
});

// JavaScript for toggling the navigation menu
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('show');
});

// JavaScript for cart management
let cart = [];

function addToCart(productName, productPrice) {
    const existingProduct = cart.find(item => item.name === productName);

    if (existingProduct) {
        existingProduct.quantity++;
    } else {
        cart.push({ name: productName, price: productPrice, quantity: 1 });
    }

    updateCartDisplay();
}

function updateCartDisplay() {
    const cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.innerHTML = '';

    let total = 0;

    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;

        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price} x ${item.quantity}`;
        cartItemsContainer.appendChild(li);
    });

    document.getElementById('cart-total').textContent = `$${total.toFixed(2)}`;
    document.getElementById('cart-count').textContent = cart.length;
}

// Toggle the cart dropdown
const cartIcon = document.getElementById('cart-icon');
const cartDropdown = document.getElementById('cart-dropdown');

cartIcon.addEventListener('click', () => {
    cartDropdown.classList.toggle('active');
});

// Add to Cart functionality
const addToCartButtons = document.querySelectorAll('.add-to-cart');
addToCartButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        const productItem = event.target.closest('.product-item');
        const productName = productItem.getAttribute('data-name');
        const productPrice = parseFloat(productItem.getAttribute('data-price'));

        addToCart(productName, productPrice);
    });
});

// Buy Now functionality
const buyNowButtons = document.querySelectorAll('.buy-now');
buyNowButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        const productItem = event.target.closest('.product-item');
        const productName = productItem.getAttribute('data-name');
        const productPrice = parseFloat(productItem.getAttribute('data-price'));

        addToCart(productName, productPrice);

        // Redirect to checkout page (replace 'checkout.html' with your actual checkout page)
        window.location.href = 'checkout.html';
    });
});

