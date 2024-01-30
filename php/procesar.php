<?php
// Verificar si se ha enviado el formulario
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Recibir y limpiar los datos del formulario
    $numeroCliente = cleanInput($_POST["NumeroCliente"]);
    $saldo = cleanInput($_POST["Saldo"]);
    $limiteCredito = cleanInput($_POST["LimiteCredito"]);
    $descuento = cleanInput($_POST["Descuento"]);
    $descripcion = cleanInput($_POST["Descripcion"]);
    $numeroPedido = cleanInput($_POST["NumeroPedido"]);
    $fechaPedido = cleanInput($_POST["FechaPedido"]);
    $direccionEnvio = cleanInput($_POST["DireccionEnvio"]);
    $numeroArticulo = cleanInput($_POST["NumeroArticulo"]);
    $cantidad = cleanInput($_POST["Cantidad"]);
    $numeroFabrica = cleanInput($_POST["NumeroFabrica"]);
    $telefonoContacto = cleanInput($_POST["TelefonoContacto"]);
    $numeroFabricaAlternativa = cleanInput($_POST["NumeroFabricaAlternativa"]);

    // Validar los datos (puedes agregar más validaciones según tus necesidades)
    if (!is_numeric($numeroCliente) || !is_numeric($saldo) || !is_numeric($limiteCredito) || !is_numeric($descuento) ||
        empty($descripcion) || !is_numeric($numeroPedido) || empty($fechaPedido) || empty($direccionEnvio) ||
        !is_numeric($numeroArticulo) || !is_numeric($cantidad) || !is_numeric($numeroFabrica) ||
        empty($telefonoContacto) || !is_numeric($numeroFabricaAlternativa)) {
        // Algunos datos no son válidos, redireccionar o mostrar un mensaje de error
        echo "Error en los datos ingresados. Por favor, verifica los campos y vuelve a intentar.";
    } else {
        // Todos los datos son válidos, puedes proceder a insertarlos en la base de datos

        // Establecer la conexión a la base de datos (debes configurar tus propios datos de conexión)
        $servername = "localhost";
        $username = "tu_usuario";
        $password = "tu_contraseña";
        $dbname = "mi_empresa";

        $conn = new mysqli($servername, $username, $password, $dbname);

        // Verificar la conexión
        if ($conn->connect_error) {
            die("Error de conexión: " . $conn->connect_error);
        }

        // Preparar y ejecutar la consulta SQL (debes adaptarla según tu estructura de base de datos)
        $sql = "INSERT INTO tu_tabla (NumeroCliente, Saldo, LimiteCredito, Descuento, Descripcion, NumeroPedido, FechaPedido, DireccionEnvio, NumeroArticulo, Cantidad, NumeroFabrica, TelefonoContacto, NumeroFabricaAlternativa) VALUES ('$numeroCliente', '$saldo', '$limiteCredito', '$descuento', '$descripcion', '$numeroPedido', '$fechaPedido', '$direccionEnvio', '$numeroArticulo', '$cantidad', '$numeroFabrica', '$telefonoContacto', '$numeroFabricaAlternativa')";

        if ($conn->query($sql) === TRUE) {
            echo "Datos insertados con éxito.";
        } else {
            echo "Error al insertar datos: " . $conn->error;
        }

        // Cerrar la conexión
        $conn->close();
    }
}

// Función para limpiar los datos de entrada
function cleanInput($input) {
    $input = trim($input);
    $input = stripslashes($input);
    $input = htmlspecialchars($input);
    return $input;
}
?>
