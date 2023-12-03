function Pessoa(nome) {
  this.nome = nome;
  this.userSelected = function () {
    console.log(`Usuário(a) selecionado: ${this.nome}`);
  };
}

function Funcionario(nome, cargo, salario) {
  this.cargo = cargo;
  let _salario = salario;

  this.getSalario = function () {
    if (_salario === undefined) {
      return `O salário ainda não foi atribuído.`;
    }
    return `O salário de ${this.nome} é R$ ${_salario}`;
  };

  this.setSalario = function (valor) {
    if (typeof valor === "number") {
      _salario = valor;
    }
  };

  this.dizCargo = function () {
    console.log(this.cargo);
  };

  Pessoa.call(this, nome);
}

const funcionario1 = new Funcionario("Sara", "médico(a)", undefined);

funcionario1.userSelected();
funcionario1.dizCargo();

funcionario1.setSalario("cinquenta mil"); // não funciona
// funcionario1.setSalario(undefined);

console.log(funcionario1.getSalario());
