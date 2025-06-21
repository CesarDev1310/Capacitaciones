



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



let dataDemo = [
  ["C00001", "Habilidades Blandas", listaTipos.find(x=> x.codTipo == "02").nombre],
  ["C00002", "Ingles", listaTipos.find(x=> x.codTipo == "03").nombre],
  ["C00003", "Chino Mandarin", listaTipos.find(x=> x.codTipo == "04").nombre]
];

let miTabla = new DataTable('#miTabla', {
  language : {
    url: '//cdn.datatables.net/plug-ins/2.3.2/i18n/es-ES.json',
  },
  columns:[
    {title: "Código"},
    {title: "Nombre Curso/Programa"},
    {title: "Tipo"}
  ],
  data: dataDemo
});