import { Veiculo } from "./Veiculo.js";
import { MotoProps } from "../interface/VeiculosProps.js";

export class Moto extends Veiculo<MotoProps>{

    constructor(props: MotoProps) {
        super(props);
    }

    public get getCilindradas(): number { return this.props.cilindradas; }

    public set setCilindradas(novaCilindradas: number) {
        this.props.cilindradas = novaCilindradas;
    }

    // Implementação obrigatória do método abstrato (Polimorfismo)
    public exibirExtrato(): void {
        console.log(`[FUNCIONÁRIO] Modelo: ${this.getModelo} | Marca: ${this.getMarca} | Ano: ${this.getAno} | Cilindradas: ${this.getCilindradas}`);
    }
}
