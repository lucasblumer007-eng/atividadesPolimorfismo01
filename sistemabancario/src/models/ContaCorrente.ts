import { Conta } from "./Conta.js";
import { ContaCorrenteProps } from "../interface/ContaProps.js";

export class ContaCorrente extends Conta<ContaCorrenteProps>{

    constructor(props: ContaCorrenteProps) {
        super(props);
    }

    public get getLimite(): number { return this.props.limite; }

    public set setLimite(novoLimite: number) {
        this.props.limite = novoLimite;
    }

    // Implementação obrigatória do método abstrato (Polimorfismo)
    public exibirExtrato(): void {
        console.log(`[FUNCIONÁRIO] Titular: ${this.getTitular} | Agencia: ${this.getAgencia} | Numero: ${this.getNumero} | Limite: ${this.getLimite} | Saldo ${this.getSaldo}`);
    }
}
