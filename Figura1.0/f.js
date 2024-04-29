let colorInput = document.querySelector("#cool");

let ancho = document.querySelector("#ancho");
let dv = document.querySelector("#vancho");

let alto = document.querySelector("#alto");
let dv2 = document.querySelector("#valto");

let color = document.querySelector("#color");
let dv3 = document.querySelector("#vcolor");

let aborde = document.querySelector("#aborde");
let dv4 = document.querySelector("#vborde");

let coborde = document.querySelector("#cborde");
let dv5 = document.querySelector("#vborde2");

let tbor = document.querySelector("#tipob");
let dv6 = document.querySelector("#vtborde");

let caja1 = document.querySelector("#caja1");
let dv7 = document.querySelector("#ccaja")

let cajita = document.querySelector("#cajita");

ancho.oninput = () => {
  let n = parseInt(ancho.value);
  dv.innerHTML = n;
  cajita.style.width = n + "px";
}

alto.oninput = () => {
  let n = parseInt(alto.value);
  dv2.innerHTML = n;
  cajita.style.height = n + "px";
}

color.oninput = () => {
  let n = color.value;
  dv3.innerHTML = n;
  cajita.style.backgroundColor = n;
}

aborde.oninput = () => {
  let n = aborde.value;
  dv4.innerHTML = n;
  cajita.style.borderWidth = n + "px";
  console.log("ancho cambiado a: "+n);
}

coborde.oninput = () => {
  let n = coborde.value;
  dv5.innerHTML = n;
  cajita.style.borderColor = n;
  console.log("color cambiado a: "+n);
}

tbor.onchange = () => {
  let n = tbor.value;
  dv6.innerHTML = n;
  cajita.style.borderStyle = n;
  console.log("tipo cambiado a: "+n);
}






colorInput.addEventListener("input", () => {

  let nuevoColor = colorInput.value;
  
  caja1.style.backgroundColor = nuevoColor;
  console.log("color cambiado a: "+ nuevoCo);
});