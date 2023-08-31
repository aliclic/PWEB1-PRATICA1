class Disciplina {

    constructor(codigo, nome) {
        this._codigo = codigo;
        this._nome = nome;
        this.alunos = [];
    }

    getCodigo() {
        return this._codigo;
    }

    setCodigo(novoCodigo) {
        this._codigo = novoCodigo;
    }

    getNome() {
        return this._nome;
    }

    setNome(novoNome) {
        this._nome = novoNome;
    }

    getAlunos() {
        return this._alunos;
    }

    setAlunos(novosAlunos) {
        this._alunos = novosAlunos;
    }
}