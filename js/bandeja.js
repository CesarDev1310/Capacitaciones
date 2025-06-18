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
