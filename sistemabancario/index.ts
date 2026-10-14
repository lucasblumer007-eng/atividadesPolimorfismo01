import { Conta } from "./src/models/Conta.js";
import { ContaCorrente } from "./src/models/ContaCorrente.js";
import { ContaPoupanca } from "./src/models/ContaPoupanca.js";

console.log("=== SISTEMA DO BANCO ===");

const contaPoupanca = new ContaPoupanca({
    numero: "123456",
    agencia: "Lucao's",
    titular: "lucao",
    saldo: 2000,
    taxaAniversario: 100
});

const contaCorrente = new ContaCorrente({
    numero: "123456",
    agencia: "Lucao's",
    titular: "lucao",
    saldo: 2000,
    limite: 123456789
});

console.log("\n--- DEMONSTRAÇÃO DE POLIMORFISMO ---");

// Array tipado com a Classe Abstrata recebe as subclasses
const bancoDeDados: Conta[] = [contaPoupanca, contaCorrente];

// O polimorfismo em ação: O mesmo método se comporta diferente para cada objeto
for (const pessoa of bancoDeDados) {
    pessoa.exibirExtrato();
}
