var spinner=document.querySelector("#spinner");

document.querySelector("#btnver").onclick = () =>{
  spinner.innerHTML= "<img src='../SPINNERS/SPINNER.png' width=200px>";
  setTimeout(()=>{
    spinner.innerHTML="<h1> Hola Mundo!</h1>";
  },2000);
}