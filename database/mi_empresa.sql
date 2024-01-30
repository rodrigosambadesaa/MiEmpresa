-- Customer Table
CREATE TABLE Cliente (
    NumeroCliente INT PRIMARY KEY,
    Saldo DECIMAL(10, 2),
    LimiteCredito DECIMAL(10, 2) CHECK (LimiteCredito <= 3000000),
    Descuento DECIMAL(5, 2)
);

-- Shipping Address Table (linked to Cliente)
CREATE TABLE DireccionesEnvio (
    NumeroCliente INT,
    Direccion VARCHAR(255),
    Comuna VARCHAR(255),
    Ciudad VARCHAR(255),
    FOREIGN KEY (NumeroCliente) REFERENCES Cliente(NumeroCliente)
);

-- Article Table
CREATE TABLE Articulo (
    NumeroArticulo INT PRIMARY KEY,
    Descripcion VARCHAR(255)
);

-- Order Table
CREATE TABLE Pedido (
    NumeroPedido INT PRIMARY KEY,
    NumeroCliente INT,
    FechaPedido DATETIME,
    DireccionEnvio VARCHAR(255),
    FOREIGN KEY (NumeroCliente) REFERENCES Cliente(NumeroCliente)
);

-- Order Line Table (linked to Pedido and Articulo)
CREATE TABLE LineaPedido (
    NumeroPedido INT,
    NumeroArticulo INT,
    Cantidad INT,
    FOREIGN KEY (NumeroPedido) REFERENCES Pedido(NumeroPedido),
    FOREIGN KEY (NumeroArticulo) REFERENCES Articulo(NumeroArticulo)
);

-- Factory Table
CREATE TABLE Fabrica (
    NumeroFabrica INT PRIMARY KEY,
    TelefonoContacto VARCHAR(20)
);

-- Article-Factory Relationship
CREATE TABLE Distribucion (
    NumeroArticulo INT,
    NumeroFabrica INT,
    PRIMARY KEY (NumeroArticulo, NumeroFabrica),
    FOREIGN KEY (NumeroArticulo) REFERENCES Articulo(NumeroArticulo),
    FOREIGN KEY (NumeroFabrica) REFERENCES Fabrica(NumeroFabrica)
);

-- Alternative Factory Table (linked to Fabrica)
CREATE TABLE FabricaAlternativa (
    NumeroFabricaAlternativa INT PRIMARY KEY,
    NumeroFabrica INT,
    FOREIGN KEY (NumeroFabrica) REFERENCES Fabrica(NumeroFabrica)
);
