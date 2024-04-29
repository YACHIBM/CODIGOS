document.querySelector("#btn1").onclick=()=>{
    Swal.fire("Ejemplo 1 de alerta");
}
    document.querySelector("#btn2").onclick=()=>{
    Swal.fire({
        title: "HOLA COMO ESTAS??",
        text: "Q ONDA",
        icon: "question"
      });
    }
    document.querySelector("#btn3").onclick=()=>{
Swal.fire({
  icon: "error",
  title: ":(",
  text: "INTENTALO MAS TARDE",
  footer: '<a href="#">ENTRA AQUI PARA MAS</a>'
});
    }
    document.querySelector("#btn4").onclick=()=>{
      Swal.fire({
        title: "Segur@?",
        text: "Puede ser la unica vez",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "SI,Estoy my segur@"
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "PERFECTO",
            text: "Lo hiciste bien",
            icon: "success"
          });
        }
      });
    }
    document.querySelector("#btn5").onclick=()=>{
        Swal.fire({
            title: "ELIGUE UNA OPCION",
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: "GUARDAR",
            denyButtonText: `NO GUARDAR`
          }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
              Swal.fire("GUARDADO", "", "success");
            } else if (result.isDenied) {
              Swal.fire("SIN GUARDAR", "", "info");
            }
          });
}
    document.querySelector("#btn6").onclick=()=>{
        Swal.fire({
            title: "ESTE MENSAJE PUEBA QUE EXISTE EL EJEMPLO 6 DE ALERTA",
            width: 600,
            padding: "3em",
            color: "#716add",
            background: "skyblue url(/images/trees.png) ",
            backdrop: `
              rgba(0,0,123,0.4)
              url("/IMGC/K1.gif")
              left top
              no-repeat
              
              
            `
            
          });
    }

    document.querySelector("#btn7").onclick=()=>{
        Swal.fire({
            title: "YASVHIRA",
            text: "GRUPO 405 CECYLOVER",
            imageUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/0/05/Hello_kitty_character_portrait.png/220px-Hello_kitty_character_portrait.png",
            imageWidth: 400,
            imageHeight: 500,
            imageAlt: "Custom image"
          });

    }