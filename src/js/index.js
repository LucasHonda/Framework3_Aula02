System.register(["./materia"], function (exports_1, context_1) {
    "use strict";
    var materia_1;
    var __moduleName = context_1 && context_1.id;
    function lerJSon() {
        let xmlhttp2 = new XMLHttpRequest();
        xmlhttp2.open("GET", "http://localhost:8081/materias");
        xmlhttp2.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                let materias = JSON.parse(this.responseText);
                let tbody = document.getElementById("tbodyResultados");
                tbody.innerHTML = '';
                for (let mt = 0; mt < materias.length; mt++) {
                    tbody.innerHTML += `<td scope="row">${materias[mt].id}</td>` +
                        `<td scope="row">${materias[mt].descricao}</td>` +
                        `<td scope="row">${materias[mt].data}</td>` +
                        `<td scope="row">${materias[mt].valor}</td>` +
                        `<td scope="row">${materias[mt].optativa}</td>`;
                }
            }
        };
        xmlhttp2.send();
    }
    function IncluirJSon() {
        let Codigo = document.getElementById('codigo').value;
        let Descricao = document.getElementById('descricao').value;
        let Data = document.getElementById('data').value;
        let Valor = document.getElementById('valor').value;
        let Optativa = document.getElementById('optativa').value;
        let m = new materia_1.materia(Number(Codigo), Descricao, Data, Number(Valor), Number(Optativa));
        let xhr = new XMLHttpRequest();
        xhr.open("POST", "http://localhost:8081/materias", true);
        xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
        xhr.onload = function () {
            JSON.parse(xhr.responseText);
            lerJSon();
            document.getElementById('codigo').value = "";
            document.getElementById('descricao').value = "";
            document.getElementById('data').value = "";
            document.getElementById('valor').value = "";
            document.getElementById('optativa').value = "";
        };
        xhr.send(JSON.stringify(m));
    }
    function ConsultarJSon() {
        let xmlhttp2 = new XMLHttpRequest();
        let Numero = document.getElementById('codigo').value;
        xmlhttp2.open("GET", "http://localhost:8081/materias/" + Numero, true);
        xmlhttp2.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                let materias = JSON.parse(this.responseText);
                let tbody = document.getElementById("tbodyResultados");
                tbody.innerHTML = '';
                tbody.innerHTML += `<td scope="row">${materias.id}</td>` +
                    `<td scope="row">${materias.descricao}</td>` +
                    `<td scope="row">${materias.data}</td>` +
                    `<td scope="row">${materias.valor}</td>` +
                    `<td scope="row">${materias.optativa}</td>`;
            }
        };
        xmlhttp2.send();
    }
    function ExcluirJSon() {
        let xmlhttp2 = new XMLHttpRequest();
        let Numero = document.getElementById('codigo').value;
        xmlhttp2.open("DELETE", "http://localhost:8081/materias/" + Numero, true);
        xmlhttp2.onreadystatechange = function () { lerJSon(); };
        xmlhttp2.send();
    }
    return {
        setters: [
            function (materia_1_1) {
                materia_1 = materia_1_1;
            }
        ],
        execute: function () {
            $(document).ready(function () {
                $('#BotaoImportar').click(function () {
                    lerJSon();
                });
                $('#BotaoIncluir').click(function () {
                    IncluirJSon();
                });
                $('#BotaoConsultar').click(function () {
                    ConsultarJSon();
                });
                $('#BotaoExcluir').click(function () {
                    ExcluirJSon();
                });
            });
        }
    };
});
