$(()=>init());
var plantas_json;
var carrito=[];
function init(){
    fetch('/json/productos.json')
    .then((response) => response.json())
    .then((data) => {
        var dataset = data.plantas;
        plantas_json = data.plantas;
        mostrarPlantas(dataset);
    });
}

function inicio(){
    mostrarPlantas(plantas_json);

}

function mostrarPlantas(datos) {
    var contenedor_plantas = $("#plantas");
    contenedor_plantas.text(" ");

    datos.forEach((planta, index) => {
        var div_planta = $("<div>");
        div_planta.addClass("col");
        div_planta.id = "planta_" + index;
        div_planta.append(`
            <div class="divimagen container-100">
                <div class="row">
                    <img src="/images/${planta.imagen_planta}" id="imagen_planta" alt="" class="img-galeria">
                </div>
                <div class="texto row">
                    <p class="nombre col-9  d-flex justify-content-start" id="nombre">${planta.nombre}</p>
                    <p class="precio col-3 d-flex justify-content-end"  id="precio">${planta.precio}€</p>
                </div>
                <div class="texto row">
                <p class="descripcion">${planta.descripcion}</p>
                </div>
                <button class="botonadd" onclick=agregarAlCarrito(${planta.id})>Añadir al carrito</button>

            </div>
        `);
        contenedor_plantas.append(div_planta);
    })
}

function filtroTODO() {
    $(".carraca").css("display","none");
    var contenedor_plantas = $("#plantas");
    contenedor_plantas.text(" ");

    plantas_json.forEach((planta, index) => {
        var div_planta = $("<div>");
        div_planta.addClass("col");
        div_planta.id = "planta_" + index;
        div_planta.append(`
            <div class="divimagen container-100">
                <div class="row">
                    <img src="/images/${planta.imagen_planta}" id="imagen_planta" alt="" class="img-galeria">
                </div>
                <div class="texto row">
                    <p class="nombre col-9  d-flex justify-content-start" id="nombre">${planta.nombre}</p>
                    <p class="precio col-3 d-flex justify-content-end"  id="precio">${planta.precio}€</p>
                </div>
                <div class="texto row">
                <p class="descripcion">${planta.descripcion}</p>
                </div>
                <button class="botonadd" onclick=agregarAlCarrito(${planta.id})>Añadir al carrito</button>

            </div>
        `);
        contenedor_plantas.append(div_planta);
    })
}


function filtroINTERIOR() {
    $(".carraca").css("display","none");
    var plantas_filtradas = plantas_json;
    plantas_filtradas = plantas_json.filter(plantas => plantas.tipo == "interior");
    var contenedor_plantas = $("#plantas");
    contenedor_plantas.text(" ");

    plantas_filtradas.forEach((planta, index) => {
        var div_planta = $("<div>");
        div_planta.addClass("col");
        div_planta.id = "planta_" + index;
        div_planta.append(`
            <div class="divimagen container-100">
                <div class="row">
                    <img src="/images/${planta.imagen_planta}" id="imagen_planta" alt="" class="img-galeria">
                </div>
                <div class="texto row">
                    <p class="nombre col-9  d-flex justify-content-start" id="nombre">${planta.nombre}</p>
                    <p class="precio col-3 d-flex justify-content-end"  id="precio">${planta.precio}€</p>
                </div>
                <div class="texto row">
                <p class="descripcion">${planta.descripcion}</p>
                </div>
                <button class="botonadd" onclick=agregarAlCarrito(${planta.id})>Añadir al carrito</button>

            </div>
        `);
        contenedor_plantas.append(div_planta);
    })
}

function filtroEXTERIOR() {
    $(".carraca").css("display","none");
    var plantas_filtradas = plantas_json;
    plantas_filtradas = plantas_json.filter(plantas => plantas.tipo == "exterior");
    var contenedor_plantas = $("#plantas");
    contenedor_plantas.text(" ");

    plantas_filtradas.forEach((planta, index) => {
        var div_planta = $("<div>");
        div_planta.addClass("col");
        div_planta.id = "planta_" + index;
        div_planta.append(`
            <div class="divimagen container-100">
                <div class="row">
                    <img src="/images/${planta.imagen_planta}" id="imagen_planta" alt="" class="img-galeria">
                </div>
                <div class="texto row">
                    <p class="nombre col-9  d-flex justify-content-start" id="nombre">${planta.nombre}</p>
                    <p class="precio col-3 d-flex justify-content-end"  id="precio">${planta.precio}€</p>
                </div>
                <div class="texto row">
                <p class="descripcion">${planta.descripcion}</p>
                </div>
                <button class="botonadd" onclick=agregarAlCarrito(${planta.id})>Añadir al carrito</button>

            </div>
        `);
        contenedor_plantas.append(div_planta);
    })
}


function filtroHUERTO() {
    $(".carraca").css("display","none");
    var plantas_filtradas = plantas_json;
    plantas_filtradas = plantas_json.filter(plantas => plantas.tipo == "huerto");
    var contenedor_plantas = $("#plantas");
    contenedor_plantas.text(" ");

    plantas_filtradas.forEach((planta, index) => {
        var div_planta = $("<div>");
        div_planta.addClass("col");
        div_planta.id = "planta_" + index;
        div_planta.append(`
            <div class="divimagen container-100">
                <div class="row">
                    <img src="/images/${planta.imagen_planta}" id="imagen_planta" alt="" class="img-galeria">
                </div>
                <div class="texto row">
                    <p class="nombre col-9  d-flex justify-content-start" id="nombre">${planta.nombre}</p>
                    <p class="precio col-3 d-flex justify-content-end"  id="precio">${planta.precio}€</p>
                </div>
                <div class="texto row">
                <p class="descripcion">${planta.descripcion}</p>
                </div>
                <button class="botonadd" onclick=agregarAlCarrito(${planta.id})>Añadir al carrito</button>

            </div>
        `);
        contenedor_plantas.append(div_planta);
    })
}


function filtroSEMILLAS() {
    $(".carraca").css("display","none");
    var plantas_filtradas = plantas_json;
    plantas_filtradas = plantas_json.filter(plantas => plantas.tipo == "semilla");
    var contenedor_plantas = $("#plantas");
    contenedor_plantas.text(" ");

    plantas_filtradas.forEach((planta, index) => {
        var div_planta = $("<div>");
        div_planta.addClass("col");
        div_planta.id = "planta_" + index;
        div_planta.append(`
            <div class="divimagen container-100">
                <div class="row">
                    <img src="/images/${planta.imagen_planta}" id="imagen_planta" alt="" class="img-galeria">
                </div>
                <div class="texto row">
                    <p class="nombre col-9  d-flex justify-content-start" id="nombre">${planta.nombre}</p>
                    <p class="precio col-3 d-flex justify-content-end"  id="precio">${planta.precio}€</p>
                </div>
                <div class="texto row">
                <p class="descripcion">${planta.descripcion}</p>
                </div>
                <button class="botonadd" onclick=agregarAlCarrito(${planta.id})>Añadir al carrito</button>

            </div>
        `);
        contenedor_plantas.append(div_planta);
    })
}


function filtroBUSCAR() {
    $(".carraca").css("display","none");

    var plantas_filtradas = plantas_json;
    var plantaseleccionada=$("#buscar").val();

    if (plantaseleccionada) {
        plantas_filtradas = plantas_json.filter(plantas => plantas.nombre == plantaseleccionada);
    }


    var contenedor_plantas = $("#plantas");
    contenedor_plantas.text(" ");

    plantas_filtradas.forEach((planta, index) => {
        var div_planta = $("<div>");
        div_planta.addClass("col");
        div_planta.id = "planta_" + index;
        div_planta.append(`
            <div class="divimagen container-100">
                <div class="row">
                    <img src="/images/${planta.imagen_planta}" id="imagen_planta" alt="" class="img-galeria">
                </div>
                <div class="texto row">
                    <p class="nombre col-9  d-flex justify-content-start" id="nombre">${planta.nombre}</p>
                    <p class="precio col-3 d-flex justify-content-end"  id="precio">${planta.precio}€</p>
                </div>
                <div class="texto row">
                    <p >${planta.descripcion}</p>
                </div>
                <button class="botonadd"  onclick=agregarAlCarrito(${planta.id})>Añadir al carrito</button>

            </div>
        `);
        contenedor_plantas.append(div_planta);
    })
}

function agregarAlCarrito(plantaId) {
    // Buscar la planta en el JSON por su ID
    var plantaSeleccionada = plantas_json.find(planta => planta.id === plantaId);

    // Agregar la planta al carrito
    carrito.push({
        id: plantaSeleccionada.id,
        nombre: plantaSeleccionada.nombre,
        precio: plantaSeleccionada.precio,
    });

    // Actualizar la visualización del carrito (llamar a la función que mostrará el carrito)
    mostrarCarrito();
}





function mostrarCarrito() {
    var carritoContenido = $("#carritoContenido");
    carritoContenido.empty();
    var totalCarrito = 0;

    if (carrito.length === 0) {
        carritoContenido.append("<p>El carrito está vacío.</p>");
    } else {
        carrito.forEach((planta,index) => {

            var precio_planta = planta.precio;
            totalCarrito += precio_planta;
            totalCarrito.toFixed(2);

            carritoContenido.append(`
                <div>
                    ${planta.nombre} - ${planta.precio}€
                    <button class="btn btn-danger btn-sm" onclick="eliminarDelCarrito(${index})">Eliminar</button>                
                    </div>
                    <br>
            `);
        });
            carritoContenido.append(`
            <div class="total">
                <p>Total del carrito: ${totalCarrito.toFixed(2)}€</p>
            </div>
        `);
        
    }

    // Abre el modal
    $("#carritoModal").modal("show");
}

function realizarCompra() {
    carrito = [];
    $("#carritoModal").modal("hide");
}

function eliminarDelCarrito(index_planta) {
    carrito.splice(index_planta, 1);
    
    mostrarCarrito();
}


