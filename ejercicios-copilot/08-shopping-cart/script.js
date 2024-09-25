let cart = [];

function addToCart(productId) {
    const product = { id: productId, quantity: 1 };
    const existingProduct = cart.find(item => item.id === productId);

    if (existingProduct) {
        existingProduct.quantity++;
    } else {
        cart.push(product);
    }

    renderCart();
}

function removeFromCart(productId) {
    const existingProduct = cart.find(item => item.id === productId);

    if (existingProduct.quantity > 1) {
        existingProduct.quantity--;
    } else {
        cart = cart.filter(item => item.id !== productId);
    }

    renderCart();
}

function renderCart() {
    const cartList = document.getElementById('cart');
    cartList.innerHTML = '';

    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `Producto ${item.id} - Cantidad: ${item.quantity}`;

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Eliminar';
        removeButton.onclick = () => removeFromCart(item.id);

        li.appendChild(removeButton);
        cartList.appendChild(li);
    });
}

// New code added
const cartCountElement = document.querySelector('.cart-count');
let cartCount = 0;

const addToCartButtons = document.querySelectorAll('.add-to-cart');
addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        const productId = button.dataset.productId; // Assuming the product ID is stored in a data-product-id attribute
        addToCart(productId);
        cartCount++;
        cartCountElement.textContent = cartCount;
    });
});