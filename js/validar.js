document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');

    form.addEventListener('submit', function (event) {
        // Validación para el campo NumeroCliente
        const numeroClienteInput = form.querySelector('[name="NumeroCliente"]');
        const numeroCliente = numeroClienteInput.value.trim();
        if (!/^\d+$/.test(numeroCliente)) {
            alert('El número de cliente debe ser un valor numérico.');
            event.preventDefault();
            return;
        }

        // Validación para el campo Saldo
        const saldoInput = form.querySelector('[name="Saldo"]');
        const saldo = saldoInput.value.trim();
        if (!/^\d+(\.\d{1,2})?$/.test(saldo)) {
            alert('El saldo debe ser un número válido, con hasta 2 decimales.');
            event.preventDefault();
            return;
        }

        // Validación para el campo LimiteCredito
        const limiteCreditoInput = form.querySelector('[name="LimiteCredito"]');
        const limiteCredito = limiteCreditoInput.value.trim();
        if (!/^\d+(\.\d{1,2})?$/.test(limiteCredito) || parseFloat(limiteCredito) > 3000000) {
            alert('El límite de crédito debe ser un número válido, con hasta 2 decimales y no mayor a 3,000,000.');
            event.preventDefault();
            return;
        }

        // Validación para el campo Descuento
        const descuentoInput = form.querySelector('[name="Descuento"]');
        const descuento = descuentoInput.value.trim();
        if (!/^\d+(\.\d{1,2})?$/.test(descuento)) {
            alert('El descuento debe ser un número válido, con hasta 2 decimales.');
            event.preventDefault();
            return;
        }

        // Validación para el campo Descripcion
        const descripcionInput = form.querySelector('[name="Descripcion"]');
        const descripcion = descripcionInput.value.trim();
        if (descripcion === '') {
            alert('La descripción del artículo no puede estar vacía.');
            event.preventDefault();
            return;
        }

        // Validación para el campo NumeroPedido
        const numeroPedidoInput = form.querySelector('[name="NumeroPedido"]');
        const numeroPedido = numeroPedidoInput.value.trim();
        if (!/^\d+$/.test(numeroPedido)) {
            alert('El número de pedido debe ser un valor numérico.');
            event.preventDefault();
            return;
        }

        // Validación para el campo FechaPedido
        const fechaPedidoInput = form.querySelector('[name="FechaPedido"]');
        const fechaPedido = fechaPedidoInput.value.trim();
        // Puedes agregar una validación de fecha más compleja aquí

        // Validación para el campo DireccionEnvio
        const direccionEnvioInput = form.querySelector('[name="DireccionEnvio"]');
        const direccionEnvio = direccionEnvioInput.value.trim();
        if (direccionEnvio === '') {
            alert('La dirección de envío no puede estar vacía.');
            event.preventDefault();
            return;
        }

        // Validación para el campo NumeroArticulo
        const numeroArticuloInput = form.querySelector('[name="NumeroArticulo"]');
        const numeroArticulo = numeroArticuloInput.value.trim();
        if (!/^\d+$/.test(numeroArticulo)) {
            alert('El número de artículo debe ser un valor numérico.');
            event.preventDefault();
            return;
        }

        // Validación para el campo Cantidad
        const cantidadInput = form.querySelector('[name="Cantidad"]');
        const cantidad = cantidadInput.value.trim();
        if (!/^\d+$/.test(cantidad)) {
            alert('La cantidad debe ser un valor numérico.');
            event.preventDefault();
            return;
        }

        // Validación para el campo NumeroFabrica
        const numeroFabricaInput = form.querySelector('[name="NumeroFabrica"]');
        const numeroFabrica = numeroFabricaInput.value.trim();
        if (!/^\d+$/.test(numeroFabrica)) {
            alert('El número de fábrica debe ser un valor numérico.');
            event.preventDefault();
            return;
        }

        // Validación para el campo TelefonoContacto
        const telefonoContactoInput = form.querySelector('[name="TelefonoContacto"]');
        const telefonoContacto = telefonoContactoInput.value.trim();
        // Puedes agregar una validación de número de teléfono más específica aquí

        // Validación para el campo NumeroFabricaAlternativa
        const numeroFabricaAlternativaInput = form.querySelector('[name="NumeroFabricaAlternativa"]');
        const numeroFabricaAlternativa = numeroFabricaAlternativaInput.value.trim();
        if (!/^\d+$/.test(numeroFabricaAlternativa)) {
            alert('El número de fábrica alternativa debe ser un valor numérico.');
            event.preventDefault();
            return;
        }

        // Validación exitosa, el formulario se enviará si todos los campos son válidos
    });
});