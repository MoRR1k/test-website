document.querySelectorAll('.product button').forEach(button => {
    button.addEventListener('click', () => {
        alert('Товар добавлен в корзину!');
    });
});
