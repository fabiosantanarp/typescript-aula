function cadastrar(Cliente: {nome:string, datanascimento: Date}) {
    console.log(Cliente.nome);
    console.log(Cliente.datanascimento);
}

// ganho do auto complete
// uma vez que defini a estrutura do meu objeto, o Vscode consegue me sugerir as propriedades.
// type Cliente = {nome:string, datanascimento: Date}

type Cliente = { nome: string, datanascimento: Date };

function cadastrar2(cliente:Cliente) {
    console.log(cliente.nome);
    console.log(cliente.datanascimento);
}