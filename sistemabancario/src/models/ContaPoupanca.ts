import { Conta } from "./Conta.js";
import { ContaPoupancaProps } from "../interface/ContaProps.js";

export class ContaPoupanca extends Conta<ContaPoupancaProps>{

    constructor(props: ContaPoupancaProps) {
        super(props);
    }

    public get getTaxaAniversario(): number { return this.props.taxaAniversario; }

    public set setTaxaAniversario(novaTaxaAniversario: number) {
        this.props.taxaAniversario = novaTaxaAniversario;
    }

    // Implementação obrigatória do método abstrato (Polimorfismo)
    public exibirExtrato(): void {
        console.log(`[FUNCIONÁRIO] Titular: ${this.getTitular} | Agencia: ${this.getAgencia} | Numero: ${this.getNumero} | TaxaAniversario: ${this.getTaxaAniversario} | Saldo ${this.getSaldo}`);
    }
}