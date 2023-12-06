function Pessoa(nome) {
  this.nome = nome;
  this.userSelected = function () {
    console.log(`Usuário(a): ${this.nome}`);
  };
}

function Funcionario(nome, cargo, salario) {
  this.cargo = cargo;
  let _salario = salario;

  // getters e setters
  this.getSalario = function () {
    if (_salario === undefined) {
      return `O salário ainda não foi atribuído.`;
    }
    return _salario;
  };

  this.setSalario = function (valor) {
    if (typeof valor === "number") {
      _salario = valor;
    }
  };

  Pessoa.call(this, nome);

  this.dizCargo = function () {
    return this.cargo;
  };

  this.aumento = function () {
    const novoSalario = _salario * 1.1;

    _salario = novoSalario;
  };
}

function Estagiario(nome) {
  Funcionario.call(this, nome, "Estagiário", 2000); //herdando propriedades da função Funcionario

  this.aumento = function () {
    const novoSalario = this.getSalario() * 1.07;
    this.setSalario(novoSalario);
  };
}

function Gerente(nome) {
  Funcionario.call(this, nome, "Gerente", 10000); //herdando propriedades da função Funcionario

  this.aumento = function () {
    const novoSalario = this.getSalario() * 1.15;
    this.setSalario(novoSalario);
  };
}

const funcionario1 = new Funcionario("Irineu", "eng. front-end", 5000);
const funcionario2 = new Estagiario("Nemeu");
const funcionario3 = new Gerente("Naosaby");

funcionario1.aumento();
console.log(funcionario1.getSalario());

funcionario2.aumento();
console.log(funcionario2.getSalario());

funcionario3.aumento();
console.log(funcionario3.getSalario());
