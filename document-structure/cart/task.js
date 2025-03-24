document.addEventListener('DOMContentLoaded', () => {
    const products = document.querySelectorAll('.product');

    products.forEach(product => {
        const quantityValue = product.querySelector('.product__quantity-value');
        const addButton = product.querySelector('.product__add');

        product.querySelector('.product__quantity-control_inc').addEventListener('click', () => {
            quantityValue.textContent = parseInt(quantityValue.textContent) + 1;
        });

        product.querySelector('.product__quantity-control_dec').addEventListener('click', () => {
            if (parseInt(quantityValue.textContent) > 1) {
                quantityValue.textContent = parseInt(quantityValue.textContent) - 1;
            }
        });

        addButton.addEventListener('click', () => {
            const cartProducts = document.querySelector('.cart__products');
            const productId = product.getAttribute('data-id');
            const productImage = product.querySelector('.product__image').src;
            const productCount = parseInt(quantityValue.textContent);

            let cartProduct = cartProducts.querySelector(`.cart__product[data-id="${productId}"]`);

            if (cartProduct) {
                const cartProductCount = cartProduct.querySelector('.cart__product-count');
                cartProductCount.textContent = parseInt(cartProductCount.textContent) + productCount;
            } else {
                cartProduct = document.createElement('div');
                cartProduct.className = 'cart__product';
                cartProduct.setAttribute('data-id', productId);
                cartProduct.innerHTML = `
                    <img class="cart__product-image" src="${productImage}" alt="Товар">
                    <div class="cart__product-count">${productCount}</div>
                `;
                cartProducts.appendChild(cartProduct);
            }
        });
    });
});