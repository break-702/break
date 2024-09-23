// script.js
document.getElementById('billing-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const price = parseFloat(document.getElementById('price').value);
    const quantity = parseInt(document.getElementById('quantity').value);
    const taxRate = parseFloat(document.getElementById('tax-rate').value) / 100;

    const subtotal = price * quantity;
    const tax = subtotal * taxRate;
    const total = subtotal + tax;

    document.getElementById('result').innerHTML = `
        <p>المجموع الفرعي: $${subtotal.toFixed(2)}</p>
        <p>الضريبه: $${tax.toFixed(2)}</p>
        <p>المجموع الكلي : $${total.toFixed(2)}</p>
    `;
});
