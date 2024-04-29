let va = document.querySelector("#vn1");
let vb = document.querySelector("#vn2");
let vc = document.querySelector("#vn3");

let ca = document.querySelector("#n1");
let cb = document.querySelector("#n2");
let cc = document.querySelector("#n3");

let r = document.querySelector("#resultado");
let e= document.querySelector("#ecuacion")

va.innerHTML = ca.value;
vb.innerHTML = cb.value;
vc.innerHTML = cc.value;

ca.oninput = () => { calcular() };
cb.oninput = () => { calcular() };
cc.oninput = () => { calcular() };

const calcular = () => {
    let a = parseFloat(ca.value);
    let b = parseFloat(cb.value);
    let c = parseFloat(cc.value);

    va.innerHTML = a;
    vb.innerHTML = b;
    vc.innerHTML = c;

    if(isNaN(a) || isNaN(b) || isNaN(c)){
        r.innerHTML="VALORES INVALIDOS,INTENTALO DE NUEVO";
        return;
    }

    if(a===0){
        r.innerHTML="ECUACION CUADRATICA INVALIDA";
        return;
    }
//r.innerHTML="<img src='/19Parcial2P7/spinner1.gif' width=90px> ";

//e.innerHTML="<img src='/19Parcial2P7/spinner1.gif' width=30px> "; 

   r.innerHTML="<img src='../SPINNERS/SPINNER.png' width=120px >";
   e.innerHTML="<img src='../SPINNERS/SPINNER.png' width=90px >";
 
   setTimeout(()=>{

    let factor = Math.pow(b, 2) - (4 * a * c);

    if (factor === 0) {
        let x = (-b) / (2 * a);
        r.innerHTML = "x= " + x;
        
        let f = (b > 0 && c>0) ? (a + "x² +" + b + "x +" + c + "=0") : a + "x² " + b + "x " + c + "=0";
        
        e.innerHTML = f;
    } else if (factor > 0) {
        let x1 = (-b + Math.sqrt(factor)) / (2 * a);
        
        let x2 = (-b - Math.sqrt(factor)) / (2 * a);
        r.innerHTML = "x1= " + x1.toFixed(2) + "<br><br>" + "x2= " + x2.toFixed(2);
        let f = (b > 0 && c>0) ? (a + "x² +" + b + "x +" + c + "=0") : a + "x² " + b + "x " + c + "=0";
        
        e.innerHTML = f;
    } else {
        r.innerHTML = "No hay solución";
        let f = (b > 0 && c>0) ? (a + "x² +" + b + "x +" + c + "=0") : a + "x² " + b + "x " + c + "=0";
        
        e.innerHTML = f;
    }
}, 300);
}