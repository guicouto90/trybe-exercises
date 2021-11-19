const states = ['AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO', 'DF'];

function selectEstados() {
    let posicaoEstados = document.getElementById('estados');
    for (let index = 0; index < states.length; index += 1) {
        let opcoes = document.createElement('option');
        opcoes.innerHTML = states[index];
        posicaoEstados.appendChild(opcoes);
    }
}

selectEstados();

let nome = document.getElementById('name');
nome.maxLength = 40;
nome.required = true;

let email = document.getElementById('email');
email.maxLength = 50;
email.required = true;

let cpf = document.getElementById('CPF');
cpf.maxLength = 11;
cpf.required = true;

let endereco = document.getElementById('endereco');
endereco.maxLength = 200;
endereco.required = true;

let cidade = document.getElementById('cidade');
cidade.maxLength = 28;
cidade.required = true;

let estados = document.getElementById('estados');
estados.required = true;

let moradia = document.getElementById('moradia');
moradia.required = true;

let curriculo = document.getElementById('curriculo');
curriculo.maxLength = 1000;
curriculo.required = true;

let cargo = document.getElementById('cargo');
cargo.maxLength = 40;
cargo.required = true;

let descricaoCargo = document.getElementById('descricao-cargo');
descricaoCargo.maxLength = 500;
descricaoCargo.required = true;

let data = document.getElementById('data');
data.required = true;