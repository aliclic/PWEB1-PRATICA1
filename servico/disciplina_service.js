class DisciplinaService {
    constructor() {
        this.repositorio = new DisciplinaRepositorio();
    }

    inserir(codigo, nome) {
        const disciplinaPesquisada = this.pesquisarPorCodigo(codigo);
        if (disciplinaPesquisada.length > 0) {
            throw new Error('Disciplina já cadastrada!');
        }
        const disciplinaNova = new Disciplina(codigo, nome);
        this.repositorio.inserir(disciplinaNova);
        return disciplinaNova;
    }
    pesquisarPorCodigo(codigo) {
        return this.repositorio.listar().filter(
            disciplina => disciplina.getCodigo() === codigo);
    }
    atualizarNomeDisciplina(codigo, novoNome) {
        const disciplinaPesquisada = this.repositorio.listar().find(
            disciplina => disciplina.getCodigo() === codigo);
        if (disciplinaPesquisada) {
            disciplinaPesquisada.setNome(novoNome);
        } else {
            throw new Error('Nenhuma disciplina encontrada para o codigo ' + codigo);
        }

    }
    remover(codigo) {
        this.repositorio.remover(codigo);
    }
    inserirAlunoNaDisciplina(aluno, codigo) {
        const disciplina = this.pesquisarPorCodigo(codigo);
        if (disciplina) {
            disciplina.alunos.push(aluno);
        } else {
            throw new Error('Nenhuma disciplina encontrada para o codigo ' + codigo);
        }
    }
}