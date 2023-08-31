class DisciplinaControlador {

    constructor() {
        this.servico = new DisciplinaService(); 
    }

    inserir() {
        const codigoElemento = document.querySelector('#codigo').value;
        const nomeElemento = document.querySelector('#nome').value;
        const disciplinaInserida = this.servico.inserir(codigoElemento, nomeElemento);
        const listaDisciplinas = document.querySelector('#listaDisciplinas');
        if (disciplinaInserida) {
            this.inserirDisciplinaNoHtml(disciplinaInserida, listaDisciplinas);
        }
    }

    inserirDisciplinaNoHtml(disciplina, elementoDestino) {
        const disciplinaElemento = document.createElement("li");
        disciplinaElemento.textContent = `Código: ${disciplina.getCodigo()} - Nome: ${disciplina.getNome()}`;
        elementoDestino.appendChild(disciplinaElemento);
    }

}