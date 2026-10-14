import { Veiculo } from "./src/models/Veiculo.js";
import { Moto } from "./src/models/Moto.js";
import { Carro } from "./src/models/Carro.js";

console.log("=== SISTEMA DO BANCO ===");

const carro = new Carro({
    placa: "ABC123",
    modelo: "2000",
    marca: "fiat",
    ano: 2000,
    qtdPortas: 100
});

const moto = new Moto({
    placa: "ABC123",
    modelo: "3000",
    marca: "honda",
    ano: 2000,
    cilindradas: 123456789
});

console.log("\n--- DEMONSTRAÇÃO DE POLIMORFISMO ---");

// Array tipado com a Classe Abstrata recebe as subclasses
const bancoDeDados: Veiculo[] = [moto, carro];

// O polimorfismo em ação: O mesmo método se comporta diferente para cada objeto
for (const pessoa of bancoDeDados) {
    pessoa.exibirExtrato();
}
