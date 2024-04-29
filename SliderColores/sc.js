let valor = document.querySelector("#valor");
let dv = document.querySelector("#value");
let ta = document.querySelector("#tamano");

valor.oninput = () => {
  dv.innerHTML = valor.value;
  
  
  if (valor.value <= 150) {
    dv.style.color = "yellow";
  } else if (valor.value <= 250) {
    dv.style.color = "green";
  } else if (valor.value <= 350) {
    dv.style.color = "red";
  } else {
    dv.style.color = "purple";
  }
  
  let n=parseInt(valor.value);
  dv.innerHTML = n;
  
  tamano.style.width= n+"px";
  tamano.style.height= n+"px";

if (n>=201) {
    tamano.style.background="green";
  } else if (n<=200) {
    tamano.style.background="black";
  }
  if (n==500) {
    tamano.style.background="red";
  }
}