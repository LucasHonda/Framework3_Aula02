import {materia} from "./materia";

$(document).ready(function(){
    $('#BotaoImportar').click(function(){
      lerJSon();
    })
    $('#BotaoIncluir').click(function(){
      IncluirJSon();
    })
    $('#BotaoConsultar').click(function(){
      ConsultarJSon();
    })
    $('#BotaoExcluir').click(function(){
      ExcluirJSon();
    })
})

function lerJSon() {
  let xmlhttp2 = new XMLHttpRequest();
  xmlhttp2.open("GET", "http://localhost:8081/materias"); 
  xmlhttp2.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      let materias = JSON.parse(this.responseText);
      let tbody = document.getElementById("tbodyResultados");
      tbody.innerHTML = '';
      for(let mt = 0; mt < materias.length; mt++){
        tbody.innerHTML +=`<td scope="row">${materias[mt].id}</td>`+
                          `<td scope="row">${materias[mt].descricao}</td>`+
                          `<td scope="row">${materias[mt].data}</td>` +
                          `<td scope="row">${materias[mt].valor}</td>`+
                          `<td scope="row">${materias[mt].optativa}</td>`;
      }
    }
  };
  xmlhttp2.send();
}

function IncluirJSon() {
    let Codigo = (<HTMLInputElement>document.getElementById('codigo')).value;
    let Descricao = (<HTMLInputElement>document.getElementById('descricao')).value;
    let Data = (<HTMLInputElement>document.getElementById('data')).value;
    let Valor = (<HTMLInputElement>document.getElementById('valor')).value;
    let Optativa = (<HTMLInputElement>document.getElementById('optativa')).value;

    let m = new materia(Number(Codigo), Descricao, Data, Number(Valor), Number(Optativa));

    let xhr = new XMLHttpRequest();
    xhr.open("POST", "http://localhost:8081/materias", true);
    xhr.setRequestHeader('Content-type','application/json; charset=utf-8');
    xhr.onload = function () {
      JSON.parse(xhr.responseText);
      lerJSon();

      (<HTMLInputElement>document.getElementById('codigo')).value = "";
      (<HTMLInputElement>document.getElementById('descricao')).value = "";
      (<HTMLInputElement>document.getElementById('data')).value = "";
      (<HTMLInputElement>document.getElementById('valor')).value = "";
      (<HTMLInputElement>document.getElementById('optativa')).value = "";
    }
    xhr.send(JSON.stringify(m));
}

function ConsultarJSon() {
  let xmlhttp2 = new XMLHttpRequest();
    let Numero = (<HTMLInputElement>document.getElementById('codigo')).value;
    xmlhttp2.open("GET", "http://localhost:8081/materias/" + Numero, true);
  
    xmlhttp2.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        let materias = JSON.parse(this.responseText);
        let tbody = document.getElementById("tbodyResultados");
        tbody.innerHTML = '';
        tbody.innerHTML +=`<td scope="row">${materias.id}</td>`+
                          `<td scope="row">${materias.descricao}</td>`+
                          `<td scope="row">${materias.data}</td>` +
                          `<td scope="row">${materias.valor}</td>`+
                          `<td scope="row">${materias.optativa}</td>`;
      }
    };
    xmlhttp2.send();
}

function ExcluirJSon() {
  let xmlhttp2 = new XMLHttpRequest();
    let Numero = (<HTMLInputElement>document.getElementById('codigo')).value;
    xmlhttp2.open("DELETE", "http://localhost:8081/materias/" + Numero, true);
    xmlhttp2.onreadystatechange = function() { lerJSon(); };
    xmlhttp2.send();
}