let miTabla = new DataTable("#miTabla", {
  language: {
    processing: "Procesando...",
    lengthMenu: "Mostrar _MENU_ registros",
    zeroRecords: "No se encontraron resultados",
    emptyTable: "Ningún dato disponible en esta tabla",
    infoEmpty: "Mostrando registros del 0 al 0 de un total de 0 registros",
    infoFiltered: "(filtrado de un total de _MAX_ registros)",
    search: "Buscar:",
    loadingRecords: "Cargando...",
    paginate: {
      first: "Primero",
      last: "Último",
      next: "Siguiente",
      previous: "Anterior",
    },
    info: "Mostrando _START_ a _END_ de _TOTAL_ registros",
  },
});

let listaTipos = [
  {
    codTipo: "01",
    nombre: "Programa",
  },
  {
    codTipo: "02",
    nombre: "Curso",
  },
  {
    codTipo: "03",
    nombre: "Alumno",
  },
  {
    codTipo: "04",
    nombre: "Docente",
  },
];

let listaCursos = [
  {
    cod_item: "C00001",
    nombre: "Habilidades Blandas",
    codTipo: "02",
    duracion: 8,
    creditos: 4,
    docente: "Docente 01",
  },
  {
    cod_item: "C00002",
    nombre: "Ingles",
    codTipo: "02",
    duracion: 8,
    creditos: 4,
    docente: "Docente 01",
  },
  {
    cod_item: "C00003",
    nombre: "Chino Mandarin",
    codTipo: "02",
    duracion: 48,
    creditos: 5,
    docente: "Docente 02",
  },
];

/*
listaCursos.forEach((e) => {
  let botoncito = "<button class='btn btn-sm btn-success' >Ver</button>";

  if (e.cod_item == "C00002") {
    botoncito =
      "<button class='btn btn-sm btn-success' >Ver 1</button> <button class='btn btn-sm btn-success' >Ver 2</button>";
  }

  miTabla.row
    .add([
      e.cod_item,
      e.nombre,
      listaTipos.find((x) => x.codTipo == e.codTipo).nombre,
      botoncito,
    ])
    .draw(true);
  miTabla.draw();
});
*/

function generarTabla(v_arr01) {

  miTabla.clear();

  for (let i = 0; i < v_arr01.length; i++) {
    
    if (v_arr01[i].nombre == "n/a") {      
      continue;
    }

    let botoncito = "<button class='btn btn-sm btn-success' >Ver</button>";

    if (v_arr01[i].codTipo == "01") {
      botoncito =
        `<button class='btn btn-sm btn-success' >Ver</button>
        <button class='btn btn-sm btn-success' onclick="verCursos('${v_arr01[i].cod_item}','${v_arr01[i].codTipo}')" >Cursos</button>`; 
    }   
    miTabla.row
      .add([
        v_arr01[i].cod_item,
        v_arr01[i].nombre,
        listaTipos.find((x) => x.codTipo == v_arr01[i].codTipo).nombre,
        botoncito,
      ])
      .draw(true);
    miTabla.draw();
  }

}

generarTabla(listaCursos);
generarTabla(listaProgramas);


function verCursos(cod, tipo){
  debugger
  //Buscar el programa en la lista de programas
  let programa = listaProgramas.find(x=>x.cod_item == cod);
  $("#modalCursosLabel").text(programa.nombre);
  //Obtienes los cursos
  $("#listaCursos").empty();

  try {
    crearButton(programa.cod_item);
    let cursos = programa.items().listaCursos;
    cursos.forEach(cursito => {
      $("#listaCursos").append('<li class="list-group-item">'+cursito.nombre+'</li>');
    });
    //Iteras los cursos para crearlos dinamicamente en el modal

    $("#modalCursos").modal("show");
    
  } catch (error) {
    console.log(error.message)
  }

  $("#modalCursos").modal("show");
}




function agregarCursos(val){
  debugger
  let index = listaProgramas.findIndex(x=>x.cod_item == val);
  listaProgramas[index].CursosPrograma.push("C00002");
    $("#modalNuevoCurso").modal("show");

    console.log(index+"   "+ listaProgramas[index].nombre);

    
    generarTabla(listaProgramas);
}


function crearButton(val){
  $("#idButtonAdd").empty();
  $("#idButtonAdd").append(`<small class="btn btn-small btn-info" onclick="agregarCursos('${val}')">Agregar Cursos Al Programa</small>`);
}




