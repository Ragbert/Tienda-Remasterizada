function addToCart(ropa) {
    // Obtener los detalles del libro seleccionado
    var title = ropa.querySelector('h2').innerText;
    var price = ropa.querySelector('.ropa-price').innerText;

    // Crear un objeto para representar el artículo
    var item = { title: title, price: price };

    // Obtener los artículos existentes del carrito del almacenamiento local
    var cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

    // Agregar el artículo seleccionado al arreglo
    cartItems.push(item);

    // Guardar los artículos actualizados en el almacenamiento local
    localStorage.setItem('cartItems', JSON.stringify(cartItems));

    // Mostrar una alerta de agregado
    alert('¡' + title + ' ha sido agregado al carrito!');
}
document.addEventListener('DOMContentLoaded', function() {
    // Obtener los artículos del almacenamiento local
    var cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    var cartContainer = document.querySelector('.cart-items');

    // Mostrar cada artículo en el carrito
    cartItems.forEach(function(item) {
        var cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `
            <p>${item.title} - ${item.price}</p>
        `;
        cartContainer.appendChild(cartItem);
    });
});
function proceedToPayment() {
    alert('¡Compra exitosa!');
}



