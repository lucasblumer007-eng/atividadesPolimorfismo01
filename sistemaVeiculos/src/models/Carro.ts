import { Veiculo } from "./Veiculo.js";
import { CarroProps } from "../interface/VeiculosProps.js";

export class Carro extends Veiculo<CarroProps>{

    constructor(props: CarroProps) {
        super(props);
    }

    public get getQtdPortas(): number { return this.props.qtdPortas; }

    public set setQtdPortas(novaQtdPortas: number) {
        this.props.qtdPortas = novaQtdPortas;
    }

    // Implementação obrigatória do método abstrato (Polimorfismo)
    public exibirExtrato(): void {
        console.log(`[FUNCIONÁRIO] Modelo: ${this.getModelo} | Marca: ${this.getMarca} | Ano: ${this.getAno} | QtdPortas: ${this.getQtdPortas}`);
    }
}
