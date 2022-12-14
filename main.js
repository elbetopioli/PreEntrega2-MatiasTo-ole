const OrdenarMenorMayor = () => {
    productos.sort((a, b) => a.precio - b.precio)
    mostrarListOrdenada()
}

const OrdenarMayorMenor = () => {
    productos.sort((a, b) => b.precio - a.precio)
    mostrarListOrdenada()
}

const mostrarListaOrdenada = () => {
    const listaOrdenada = productos.map (prodcuto => {
        return "- "+"productos.nombre+" $"producto.precio"
    });
    alert("Lista de precios:"+"n\n"+listaOrdenada.join("\n")  )
    comprarProductos(listaOrdenada)
};

const comprarProductos = (listaDeProductos) => {
    let otroProducto = false;
    let productoNombre = " ";
    let productoCantidad = 0;

    do {
        productoNombre = prompt ("¿Qué desea comprar?"+"n\n"+listaDeProductos.join("\n"));
        productoCantidad = parseInt (prompt ("¿Cuántos desea comprar?"));
        console.log(producto)
        otroProducto = confirm ("¿Querés agregar otro producto?")
    } while (otroProducto);
};
    