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

let listaProgramas = [
  {
    cod_item: "P00001",
    nombre: "Programa de Inicio",
    codTipo: "01",
    items: function (val) {
      return {
        listaCursos: val,
        listaDocentes: new Set(val.map((c) => c.docente)),
        nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
        nroCursos: val.length,
        nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
      };
    },
  },
  {
    cod_item: "P00002",
    nombre: "Programa Intermedio",
    codTipo: "01",
    items: function (val) {
      return {
        listaCursos: val,
        listaDocentes: new Set(val.map((c) => c.docente)),
        nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
        nroCursos: val.length,
        nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
      };
    },
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

  v_arr01.forEach((e) => {
    let botoncito = "<button class='btn btn-sm btn-success' >Ver</button>";

    if (e.codTipo == "01") {
      botoncito =
        "<button class='btn btn-sm btn-success' >Ver</button>" +
        '<button class="btn btn-sm btn-success" onclick="verCursos("1321321")" >Cursos</button>';
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
}

generarTabla(listaCursos);
generarTabla(listaProgramas);


function verCursos(valor){

  console.log("Codigo recibido "+ valor);

}