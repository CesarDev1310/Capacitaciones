
let listaProgramas = 
[
  {cod_item:"P48425",
  nombre:"n/a",
  codTipo:"02",
  CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }
  },
{cod_item:"P46476",nombre:"n/a",codTipo:"02",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P85635",nombre:"Engineering & Construction",codTipo:"01",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P91957",nombre:"Real Estate",codTipo:"02",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P75478",nombre:"Building Materials",codTipo:"01",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P39314",nombre:"Semiconductors",codTipo:"02",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P78996",nombre:"Major Banks",codTipo:"01",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P68390",nombre:"n/a",codTipo:"01",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P69343",nombre:"Industrial Machinery/Components",codTipo:"02",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P09795",nombre:"Biotechnology: Commercial Physical & Biological Resarch",codTipo:"01",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P43719",nombre:"Telecommunications Equipment",codTipo:"02",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P90723",nombre:"Finance: Consumer Services",codTipo:"02",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P42499",nombre:"Computer Software: Programming, Data Processing",codTipo:"02",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P59173",nombre:"Business Services",codTipo:"02",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P14058",nombre:"Investment Managers",codTipo:"02",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P13392",nombre:"Oil & Gas Production",codTipo:"01",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P76992",nombre:"n/a",codTipo:"02",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P39341",nombre:"n/a",codTipo:"01",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P25108",nombre:"Homebuilding",codTipo:"01",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P34569",nombre:"Other Specialty Stores",codTipo:"02",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P47964",nombre:"n/a",codTipo:"01",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P26004",nombre:"n/a",codTipo:"01",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P80031",nombre:"n/a",codTipo:"01",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P79060",nombre:"Major Banks",codTipo:"02",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P64742",nombre:"Major Banks",codTipo:"02",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P98954",nombre:"Major Pharmaceuticals",codTipo:"01",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P92248",nombre:"Services-Misc. Amusement & Recreation",codTipo:"02",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P74323",nombre:"n/a",codTipo:"01",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P35043",nombre:"n/a",codTipo:"01",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P72752",nombre:"Semiconductors",codTipo:"02",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P55878",nombre:"Major Pharmaceuticals",codTipo:"01",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P17024",nombre:"Major Pharmaceuticals",codTipo:"02",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P63559",nombre:"Clothing/Shoe/Accessory Stores",codTipo:"01",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P72500",nombre:"Oil & Gas Production",codTipo:"02",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P56215",nombre:"Diversified Commercial Services",codTipo:"02",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P24757",nombre:"Major Chemicals",codTipo:"01",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P95233",nombre:"n/a",codTipo:"02",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P72265",nombre:"n/a",codTipo:"01",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P69067",nombre:"n/a",codTipo:"01",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P38807",nombre:"Major Chemicals",codTipo:"01",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P61990",nombre:"Computer Software: Prepackaged Software",codTipo:"01",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P18757",nombre:"Electrical Products",codTipo:"01",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P97048",nombre:"n/a",codTipo:"01",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P53877",nombre:"n/a",codTipo:"01",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P74109",nombre:"n/a",codTipo:"01",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P49736",nombre:"n/a",codTipo:"02",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P49925",nombre:"n/a",codTipo:"01",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P23626",nombre:"n/a",codTipo:"02",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P94219",nombre:"Electrical Products",codTipo:"02",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P19516",nombre:"n/a",codTipo:"02",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P97821",nombre:"Property-Casualty Insurers",codTipo:"01",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P53938",nombre:"Business Services",codTipo:"02",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P55687",nombre:"Hotels/Resorts",codTipo:"01",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P87765",nombre:"Semiconductors",codTipo:"02",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P90250",nombre:"Real Estate Investment Trusts",codTipo:"01",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P77020",nombre:"Other Specialty Stores",codTipo:"02",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P08002",nombre:"n/a",codTipo:"01",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P08993",nombre:"n/a",codTipo:"02",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P49227",nombre:"Savings Institutions",codTipo:"01",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P27515",nombre:"n/a",codTipo:"02",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P72022",nombre:"n/a",codTipo:"01",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P63082",nombre:"Industrial Machinery/Components",codTipo:"02",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P27518",nombre:"Building Materials",codTipo:"02",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P32382",nombre:"Major Pharmaceuticals",codTipo:"01",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P08914",nombre:"Beverages (Production/Distribution)",codTipo:"02",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P00717",nombre:"Real Estate Investment Trusts",codTipo:"02",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P94153",nombre:"Oil & Gas Production",codTipo:"02",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P53930",nombre:"Apparel",codTipo:"01",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P34654",nombre:"Electrical Products",codTipo:"02",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P17585",nombre:"n/a",codTipo:"01",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P61165",nombre:"n/a",codTipo:"02",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P62838",nombre:"Major Banks",codTipo:"02",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P85107",nombre:"Major Chemicals",codTipo:"02",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P29871",nombre:"n/a",codTipo:"02",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P48419",nombre:"n/a",codTipo:"01",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P23148",nombre:"Marine Transportation",codTipo:"02",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P42157",nombre:"n/a",codTipo:"01",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P42661",nombre:"n/a",codTipo:"02",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P64828",nombre:"Television Services",codTipo:"02",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P23352",nombre:"Major Banks",codTipo:"01",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P42025",nombre:"Real Estate Investment Trusts",codTipo:"01",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P92802",nombre:"Major Pharmaceuticals",codTipo:"01",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P26097",nombre:"n/a",codTipo:"02",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P84241",nombre:"Natural Gas Distribution",codTipo:"01",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P66682",nombre:"Real Estate Investment Trusts",codTipo:"02",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P22513",nombre:"Electric Utilities: Central",codTipo:"02",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P53994",nombre:"Advertising",codTipo:"02",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P82747",nombre:"Biotechnology: Commercial Physical & Biological Resarch",codTipo:"01",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P02951",nombre:"Major Pharmaceuticals",codTipo:"02",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P29304",nombre:"Major Pharmaceuticals",codTipo:"01",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P24233",nombre:"Business Services",codTipo:"02",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P27621",nombre:"Consumer Electronics/Appliances",codTipo:"01",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P90286",nombre:"Investment Bankers/Brokers/Service",codTipo:"01",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P44876",nombre:"Telecommunications Equipment",codTipo:"01",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P89617",nombre:"Real Estate Investment Trusts",codTipo:"01",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P95990",nombre:"Business Services",codTipo:"02",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P54843",nombre:"Home Furnishings",codTipo:"01",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P22874",nombre:"EDP Services",codTipo:"02",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P18562",nombre:"Investment Bankers/Brokers/Service",codTipo:"01",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P25692",nombre:"n/a",codTipo:"01",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P80999",nombre:"Major Chemicals",codTipo:"01",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P84820",nombre:"Real Estate",codTipo:"01",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P85578",nombre:"Medical/Dental Instruments",codTipo:"01",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P96134",nombre:"Metal Fabrications",codTipo:"01",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P93919",nombre:"Steel/Iron Ore",codTipo:"02",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P04478",nombre:"n/a",codTipo:"01",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P49742",nombre:"n/a",codTipo:"02",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P71564",nombre:"n/a",codTipo:"02",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P81755",nombre:"n/a",codTipo:"01",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P74986",nombre:"Television Services",codTipo:"01",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P52831",nombre:"Major Pharmaceuticals",codTipo:"01",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P13725",nombre:"Oil & Gas Production",codTipo:"01",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P37257",nombre:"Biotechnology: Biological Products (No Diagnostic Substances)",codTipo:"01",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P70784",nombre:"Medical/Dental Instruments",codTipo:"01",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P41541",nombre:"n/a",codTipo:"01",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P86952",nombre:"Industrial Specialties",codTipo:"02",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P90830",nombre:"Biotechnology: In Vitro & In Vivo Diagnostic Substances",codTipo:"02",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P25801",nombre:"n/a",codTipo:"01",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P13129",nombre:"Major Chemicals",codTipo:"01",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P72215",nombre:"Building Materials",codTipo:"02",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P68073",nombre:"Marine Transportation",codTipo:"02",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P19128",nombre:"Telecommunications Equipment",codTipo:"02",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P79989",nombre:"n/a",codTipo:"02",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P73291",nombre:"Farming/Seeds/Milling",codTipo:"02",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P19635",nombre:"n/a",codTipo:"02",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P36936",nombre:"Natural Gas Distribution",codTipo:"02",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P18197",nombre:"Integrated oil Companies",codTipo:"01",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P92588",nombre:"Semiconductors",codTipo:"02",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P82654",nombre:"Precious Metals",codTipo:"02",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P56121",nombre:"Computer peripheral equipment",codTipo:"02",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P45533",nombre:"Metal Fabrications",codTipo:"02",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P68562",nombre:"Savings Institutions",codTipo:"01",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P49412",nombre:"n/a",codTipo:"01",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P31815",nombre:"Industrial Machinery/Components",codTipo:"01",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P29860",nombre:"Biotechnology: In Vitro & In Vivo Diagnostic Substances",codTipo:"02",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P32474",nombre:"Oil & Gas Production",codTipo:"01",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P85920",nombre:"n/a",codTipo:"01",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P41991",nombre:"Major Banks",codTipo:"01",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P21374",nombre:"Real Estate Investment Trusts",codTipo:"02",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P88372",nombre:"Food Distributors",codTipo:"02",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P96764",nombre:"Radio And Television Broadcasting And Communications Equipment",codTipo:"01",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P67629",nombre:"Package Goods/Cosmetics",codTipo:"02",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P59822",nombre:"Textiles",codTipo:"01",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P25173",nombre:"Containers/Packaging",codTipo:"02",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P52545",nombre:"Military/Government/Technical",codTipo:"01",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P71814",nombre:"n/a",codTipo:"01",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P96763",nombre:"n/a",codTipo:"01",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P82207",nombre:"Major Pharmaceuticals",codTipo:"02",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P40818",nombre:"Finance: Consumer Services",codTipo:"01",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P80549",nombre:"Recreational Products/Toys",codTipo:"01",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P78320",nombre:"n/a",codTipo:"01",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P30261",nombre:"EDP Services",codTipo:"01",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P38349",nombre:"Industrial Machinery/Components",codTipo:"02",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P03979",nombre:"Telecommunications Equipment",codTipo:"02",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P47816",nombre:"n/a",codTipo:"01",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P49866",nombre:"Oil & Gas Production",codTipo:"02",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P24247",nombre:"Radio And Television Broadcasting And Communications Equipment",codTipo:"02",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P40030",nombre:"Major Pharmaceuticals",codTipo:"01",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P34328",nombre:"Biotechnology: Biological Products (No Diagnostic Substances)",codTipo:"02",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P61957",nombre:"Biotechnology: Biological Products (No Diagnostic Substances)",codTipo:"01",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P44515",nombre:"n/a",codTipo:"02",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P30812",nombre:"n/a",codTipo:"02",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P44516",nombre:"Electrical Products",codTipo:"02",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P95883",nombre:"Industrial Machinery/Components",codTipo:"02",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P70401",nombre:"Farming/Seeds/Milling",codTipo:"01",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P31214",nombre:"n/a",codTipo:"02",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P33157",nombre:"Electrical Products",codTipo:"02",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P09371",nombre:"EDP Services",codTipo:"02",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P97043",nombre:"General Bldg Contractors - Nonresidential Bldgs",codTipo:"02",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P50546",nombre:"n/a",codTipo:"01",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P22108",nombre:"Major Pharmaceuticals",codTipo:"02",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P43835",nombre:"Real Estate Investment Trusts",codTipo:"02",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P01902",nombre:"Clothing/Shoe/Accessory Stores",codTipo:"01",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P73887",nombre:"Marine Transportation",codTipo:"01",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P94175",nombre:"Real Estate",codTipo:"02",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P29802",nombre:"n/a",codTipo:"02",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P11870",nombre:"n/a",codTipo:"01",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P78088",nombre:"Office Equipment/Supplies/Services",codTipo:"02",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P87328",nombre:"Diversified Commercial Services",codTipo:"01",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P09532",nombre:"EDP Services",codTipo:"02",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P70541",nombre:"Integrated oil Companies",codTipo:"02",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P41839",nombre:"Medical Specialities",codTipo:"01",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P46221",nombre:"Medical/Dental Instruments",codTipo:"01",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P06287",nombre:"Television Services",codTipo:"02",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P88851",nombre:"Trucking Freight/Courier Services",codTipo:"02",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P70280",nombre:"Containers/Packaging",codTipo:"01",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P26549",nombre:"EDP Services",codTipo:"02",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P88797",nombre:"n/a",codTipo:"02",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P91539",nombre:"Major Banks",codTipo:"01",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P75953",nombre:"Commercial Banks",codTipo:"02",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P11515",nombre:"Restaurants",codTipo:"02",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P58214",nombre:"Hospital/Nursing Management",codTipo:"01",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P31530",nombre:"Natural Gas Distribution",codTipo:"02",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P74382",nombre:"Major Pharmaceuticals",codTipo:"01",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P25741",nombre:"Electric Utilities: Central",codTipo:"01",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P10291",nombre:"Multi-Sector Companies",codTipo:"02",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P87953",nombre:"n/a",codTipo:"01",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P92882",nombre:"n/a",codTipo:"01",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P91645",nombre:"Major Chemicals",codTipo:"01",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P76043",nombre:"Other Pharmaceuticals",codTipo:"01",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P75219",nombre:"Industrial Specialties",codTipo:"02",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P01585",nombre:"Metal Fabrications",codTipo:"01",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P46522",nombre:"Biotechnology: Commercial Physical & Biological Resarch",codTipo:"02",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P13450",nombre:"Real Estate Investment Trusts",codTipo:"02",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P39105",nombre:"Electrical Products",codTipo:"01",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P61196",nombre:"Business Services",codTipo:"02",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P14781",nombre:"EDP Services",codTipo:"02",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P64771",nombre:"n/a",codTipo:"02",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P76634",nombre:"n/a",codTipo:"02",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P46451",nombre:"Food Distributors",codTipo:"01",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P64055",nombre:"Biotechnology: In Vitro & In Vivo Diagnostic Substances",codTipo:"02",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P98694",nombre:"Electronic Components",codTipo:"02",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P90649",nombre:"Business Services",codTipo:"02",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P68749",nombre:"Savings Institutions",codTipo:"02",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P27417",nombre:"Food Distributors",codTipo:"01",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P52435",nombre:"Power Generation",codTipo:"02",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P01058",nombre:"Oil & Gas Production",codTipo:"02",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P29161",nombre:"Auto Manufacturing",codTipo:"02",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P77832",nombre:"Hotels/Resorts",codTipo:"02",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P41368",nombre:"Marine Transportation",codTipo:"02",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P70121",nombre:"Computer Manufacturing",codTipo:"01",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P98270",nombre:"Forest Products",codTipo:"01",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P62065",nombre:"Electronic Components",codTipo:"02",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P30652",nombre:"Medical/Dental Instruments",codTipo:"01",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P19929",nombre:"Business Services",codTipo:"01",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P81788",nombre:"n/a",codTipo:"02",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P47483",nombre:"Major Pharmaceuticals",codTipo:"01",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P25203",nombre:"Hospital/Nursing Management",codTipo:"02",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P86763",nombre:"n/a",codTipo:"01",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P56221",nombre:"Finance: Consumer Services",codTipo:"01",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P30363",nombre:"Telecommunications Equipment",codTipo:"01",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P74636",nombre:"n/a",codTipo:"01",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P66036",nombre:"n/a",codTipo:"02",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P52012",nombre:"Major Pharmaceuticals",codTipo:"02",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P48175",nombre:"n/a",codTipo:"01",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P72598",nombre:"Savings Institutions",codTipo:"01",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P47444",nombre:"Industrial Machinery/Components",codTipo:"01",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P73057",nombre:"n/a",codTipo:"02",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P65407",nombre:"Hotels/Resorts",codTipo:"01",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P68224",nombre:"EDP Services",codTipo:"01",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P26171",nombre:"Industrial Machinery/Components",codTipo:"01",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P52697",nombre:"Natural Gas Distribution",codTipo:"01",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P28353",nombre:"Business Services",codTipo:"01",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P04015",nombre:"Marine Transportation",codTipo:"02",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P19008",nombre:"Professional Services",codTipo:"01",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P54908",nombre:"Multi-Sector Companies",codTipo:"02",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P05078",nombre:"Industrial Machinery/Components",codTipo:"01",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P10481",nombre:"Biotechnology: Biological Products (No Diagnostic Substances)",codTipo:"01",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P43772",nombre:"Property-Casualty Insurers",codTipo:"02",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P46424",nombre:"n/a",codTipo:"01",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P09785",nombre:"Professional Services",codTipo:"02",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P29836",nombre:"Catalog/Specialty Distribution",codTipo:"01",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P06047",nombre:"Railroads",codTipo:"02",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P13975",nombre:"n/a",codTipo:"01",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P29740",nombre:"Major Pharmaceuticals",codTipo:"02",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P20232",nombre:"Farming/Seeds/Milling",codTipo:"01",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P16857",nombre:"Major Banks",codTipo:"02",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P87475",nombre:"Major Banks",codTipo:"02",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P10854",nombre:"Real Estate Investment Trusts",codTipo:"02",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P35245",nombre:"n/a",codTipo:"02",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P46177",nombre:"Marine Transportation",codTipo:"01",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P72557",nombre:"EDP Services",codTipo:"01",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P50344",nombre:"Automotive Aftermarket",codTipo:"01",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P81683",nombre:"Telecommunications Equipment",codTipo:"02",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P68939",nombre:"n/a",codTipo:"01",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P03809",nombre:"EDP Services",codTipo:"01",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P36877",nombre:"Major Banks",codTipo:"02",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P87731",nombre:"Air Freight/Delivery Services",codTipo:"02",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P34097",nombre:"n/a",codTipo:"01",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P01312",nombre:"n/a",codTipo:"02",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P28504",nombre:"Environmental Services",codTipo:"02",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P58435",nombre:"n/a",codTipo:"02",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P04630",nombre:"Major Pharmaceuticals",codTipo:"01",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P75899",nombre:"n/a",codTipo:"01",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P83531",nombre:"Real Estate Investment Trusts",codTipo:"02",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P26610",nombre:"n/a",codTipo:"01",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P00453",nombre:"Packaged Foods",codTipo:"01",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P32632",nombre:"Aerospace",codTipo:"02",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P62142",nombre:"Auto Manufacturing",codTipo:"02",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P00120",nombre:"Marine Transportation",codTipo:"01",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P56823",nombre:"Telecommunications Equipment",codTipo:"01",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P87572",nombre:"n/a",codTipo:"02",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P59182",nombre:"Computer peripheral equipment",codTipo:"01",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P19050",nombre:"Telecommunications Equipment",codTipo:"02",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P92818",nombre:"Major Pharmaceuticals",codTipo:"01",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P89607",nombre:"Electrical Products",codTipo:"02",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P91229",nombre:"Radio And Television Broadcasting And Communications Equipment",codTipo:"01",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P07296",nombre:"Containers/Packaging",codTipo:"02",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P27293",nombre:"Hospital/Nursing Management",codTipo:"01",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P73532",nombre:"Medical/Nursing Services",codTipo:"01",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P97439",nombre:"Farming/Seeds/Milling",codTipo:"01",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P22854",nombre:"n/a",codTipo:"01",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P51336",nombre:"Broadcasting",codTipo:"01",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P59285",nombre:"n/a",codTipo:"01",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P20847",nombre:"Finance: Consumer Services",codTipo:"02",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P44692",nombre:"Investment Managers",codTipo:"01",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P78237",nombre:"Major Pharmaceuticals",codTipo:"02",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P71105",nombre:"Marine Transportation",codTipo:"01",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P80278",nombre:"Major Pharmaceuticals",codTipo:"02",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }},
{cod_item:"P92334",nombre:"Medical/Dental Instruments",codTipo:"01",CursosPrograma: [],
  items:function () {
      let val = listaCursos.filter(c=> this.CursosPrograma.includes(c.cod_item) == true)
      if (val != undefined && val != null && val.length > 0) {
        return {
          listaCursos: val,
          listaDocentes: new Set(val.map((c) => c.docente)),
          nroHoras: val.map((c) => c.duracion).reduce((i, d) => i + d, 0),
          nroCursos: val.length,
          nroCreditos: val.map((c) => c.creditos).reduce((i, d) => i + d, 0),
        }
      }else{
        null
      }
    }}];