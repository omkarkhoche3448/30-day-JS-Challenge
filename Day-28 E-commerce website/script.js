const products = [
    { id: 1, name: "Premium Watch", price: 199.99, description: "Elegant timepiece for any occasion", image: "https://images.unsplash.com/photo-1600854025596-3728a582b873" },
    { id: 2, name: "Designer Sunglasses", price: 149.99, description: "Stylish protection for your eyes", image: "https://images.unsplash.com/photo-1600585154321-8d2b5fc9b0e2" },
    { id: 3, name: "Leather Wallet", price: 79.99, description: "Sleek and durable everyday carry", image: "https://images.unsplash.com/photo-1579276946807-9bda0ad6c453" },
    { id: 4, name: "Wireless Earbuds", price: 129.99, description: "Crystal-clear audio on the go", image: "https://images.unsplash.com/photo-1592194996308-7b43878e84a6" },
    { id: 5, name: "Smart Home Hub", price: 199.99, description: "Control your home with your voice", image: "https://images.unsplash.com/photo-1598497520197-6bb91c742e8b" },
    { id: 6, name: "Fitness Tracker", price: 89.99, description: "Monitor your health and activity", image: "https://images.unsplash.com/photo-1598468778653-56b0f7e75b7b" },
];

// Initialize cart and orders from localStorage
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let orders = JSON.parse(localStorage.getItem('orders')) || [];

// Display products on page load
function displayProducts() {
    const productList = document.getElementById("product-list");
    productList.innerHTML = "";

    products.forEach(product => {
        const productCard = document.createElement("div");
        productCard.className = "product-card";
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <div class="product-info">
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <p class="price">$${product.price.toFixed(2)}</p>
                <button class="add-to-cart" onclick="addToCart(${product.id})">Add to Cart</button>
            </div>
        `;
        productList.appendChild(productCard);
    });
}

// Add product to cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        const existingItem = cart.find(item => item.id === productId);
        if (existingItem) {
            existingItem.quantity++;
        } else {
            cart.push({ ...product, quantity: 1 });
        }
        updateCartDisplay();
        saveCart();
        showNotification(`${product.name} added to cart`);
    }
}

// Update cart display
function updateCartDisplay() {
    const cartItems = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total");
    const cartCount = document.getElementById("cart-count");

    cartItems.innerHTML = "";
    let total = 0;

    cart.forEach(item => {
        const cartItem = document.createElement("div");
        cartItem.className = "cart-item";
        cartItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div class="cart-item-info">
                <h4>${item.name}</h4>
                <p>$${item.price.toFixed(2)}</p>
            </div>
            <div class="cart-item-quantity">
                <button onclick="updateQuantity(${item.id}, ${item.quantity - 1})">-</button>
                <span>${item.quantity}</span>
                <button onclick="updateQuantity(${item.id}, ${item.quantity + 1})">+</button>
            </div>
        `;
        cartItems.appendChild(cartItem);
        total += item.price * item.quantity;
    });

    cartTotal.textContent = total.toFixed(2);
    cartCount.textContent = cart.reduce((sum, item) => sum + item.quantity, 0);
}

// Update item quantity in cart
function updateQuantity(productId, newQuantity) {
    const cartItem = cart.find(item => item.id === productId);
    if (cartItem) {
        if (newQuantity <= 0) {
            cart = cart.filter(item => item.id !== productId);
        } else {
            cartItem.quantity = newQuantity;
        }
        updateCartDisplay();
        saveCart();
    }
}

// Save cart to localStorage
function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Show notification message
function showNotification(message) {
    alert(message);
}

// Open cart modal
function openCartModal() {
    document.getElementById('cart-modal').style.display = 'block';
}

// Close modal
function closeModal() {
    document.querySelectorAll('.modal').forEach(modal => {
        modal.style.display = 'none';
    });
}

// Place an order
function placeOrder() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const address = document.getElementById('address').value;
    const card = document.getElementById('card').value;

    if (name && email && address && card) {
        orders.push({ date: new Date().toLocaleString(), items: [...cart] });
        localStorage.setItem('orders', JSON.stringify(orders));
        cart = [];
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartDisplay();
        displayOrders();
        closeModal();
        showNotification('Order placed successfully');
    } else {
        showNotification('Please fill in all the details');
    }
}

// Display orders on page load
function displayOrders() {
    const orderList = document.getElementById("order-list");
    orderList.innerHTML = "";

    orders.forEach(order => {
        const orderCard = document.createElement("div");
        orderCard.className = "order-card";
        orderCard.innerHTML = `
            <h4>Order Date: ${order.date}</h4>
            ${order.items.map(item => `
                <p>${item.name} - $${item.price.toFixed(2)} x ${item.quantity}</p>
            `).join('')}
        `;
        orderList.appendChild(orderCard);
    });
}

// Setup event listeners
document.getElementById('cart-icon').addEventListener('click', openCartModal);
document.getElementById('checkout-btn').addEventListener('click', function () {
    document.getElementById('checkout-modal').style.display = 'block';
});

document.querySelectorAll('.close').forEach(closeBtn => {
    closeBtn.addEventListener('click', closeModal);
});

document.getElementById('checkout-form').addEventListener('submit', function (event) {
    event.preventDefault();
    placeOrder();
});

// Initialize on page load
window.onload = function () {
    displayProducts();
    displayOrders();
    updateCartDisplay();
};
