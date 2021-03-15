import e from "express";

class materia {

    private id: number;
    private descricao: string;
    private data: string;
    private valor: number;
    private optativa: boolean;

    constructor(codigo: number, descricao: string, data: string, valor: number, optativa: number) {
        this.id = codigo;
        this.descricao = descricao;
        this.data = data;
        this.valor = valor;
        this.optativa = optativa == 0;     
    }

    GetCodigo(): number {
        return this.id;
    }

    GetDescricao(): string {
        return this.descricao;
    }

    GetData(): string {
        return this.data;
    }

    GetValor(): number {
        return this.valor;
    }

    GetOptativa(): boolean {
        return this.optativa;
    }

}

export {materia};