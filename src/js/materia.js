System.register([], function (exports_1, context_1) {
    "use strict";
    var materia;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            materia = class materia {
                constructor(codigo, descricao, data, valor, optativa) {
                    this.id = codigo;
                    this.descricao = descricao;
                    this.data = data;
                    this.valor = valor;
                    this.optativa = optativa == 0;
                }
                GetCodigo() {
                    return this.id;
                }
                GetDescricao() {
                    return this.descricao;
                }
                GetData() {
                    return this.data;
                }
                GetValor() {
                    return this.valor;
                }
                GetOptativa() {
                    return this.optativa;
                }
            };
            exports_1("materia", materia);
        }
    };
});
