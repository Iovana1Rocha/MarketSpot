document.addEventListener("DOMContentLoaded", function() {
    const cantidadInput = document.getElementById('cantidad');
    const comisionDisplay = document.getElementById('comision');
    const subtotalDisplay = document.getElementById('subtotal');
    const totalDisplay = document.getElementById('total');
    const toast = document.getElementById('toast');
    const incrementButton = document.getElementById('increment');
    const decrementButton = document.getElementById('decrement');

    let cantidad = 20000;
    let precio = parseFloat(localStorage.getItem('precio')) || 0;

    const showToast = (message) => {
        toast.textContent = message;
        toast.className = "toast show";
        setTimeout(() => { toast.className = toast.className.replace("show", ""); }, 3000);
    };

    const calculate = () => {
        cantidad = Number(cantidadInput.value);

        if (cantidad * precio < 20000) {
            showToast('La compra mínima es de 20,000 litros');
        } else {
            const comisionCalculada = cantidad * 0.04603175;
            const subtotalCalculado = cantidad * precio;
            const totalCalculado = subtotalCalculado + comisionCalculada;

            comisionDisplay.textContent = comisionCalculada.toLocaleString('es-MX', { style: 'currency', currency: 'MXN' });
            subtotalDisplay.textContent = subtotalCalculado.toLocaleString('es-MX', { style: 'currency', currency: 'MXN' });
            totalDisplay.textContent = totalCalculado.toLocaleString('es-MX', { style: 'currency', currency: 'MXN' });

            localStorage.setItem('Comision', comisionCalculada.toString());
            localStorage.setItem('Subtotal', subtotalCalculado.toString());
            localStorage.setItem('Final_Price', totalCalculado.toString());
        }
    };

    cantidadInput.addEventListener('input', calculate);

    incrementButton.addEventListener('click', () => {
        cantidadInput.value = Number(cantidadInput.value) + 1;
        calculate();
    });

    decrementButton.addEventListener('click', () => {
        if (Number(cantidadInput.value) > 0) {
            cantidadInput.value = Number(cantidadInput.value) - 1;
            calculate();
        }
    });

    calculate();  // Initial calculation
});
