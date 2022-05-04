const divDeLista = document.getElementById("listaDeProductos");

const lista = document.createElement("ul");
divDeLista?.appendChild(lista);
let arregloDeProductos: string[] = new Array(2);

arregloDeProductos[0] = "Aceite";
arregloDeProductos[1] = "Harina";

arregloDeProductos.forEach((item) => {
  const items = document.createElement("li");
  const inputDeProductos = document.createElement("input");
  
  function contarCantidad() {
    let cantidad: any;
    cantidad =inputDeProductos.value;
    console.log(cantidad);
  }
  const botonDeProductos = document.createElement("button");
  botonDeProductos.classList.add("botones");
  let btns = document.querySelectorAll("botones");

  for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("submit", contarCantidad);
  }

  items.textContent = item;
  lista.appendChild(items);
  console.log(items);
});
