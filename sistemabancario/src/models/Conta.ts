import { ContaProps } from "../interface/ContaProps.js";

// 1. Adicionamos 'abstract' aqui para impedir que Conta seja instanciada diretamente
export abstract class Conta<T extends ContaProps= ContaProps> {

    constructor(protected props: T) {}

    public get getNumero(): string { return this.props.numero; }
    public get getAgencia(): string { return this.props.agencia; }
    public get getTitular(): string { return this.props.titular; }
    public get getSaldo(): number { return this.props.saldo; }

    public set setNumero(novoNumero: string) {
        if (novoNumero.trim().length === 0) {
            console.log("\n ERRO: O numero não pode ser vazio!");
            return;
        }
        this.props.numero = novoNumero;
    }

    public set seaAgencia(novaAgencia: string) {
        if (novaAgencia.trim().length === 0) {
            console.log("\n ERRO: A agencia não pode ser vazio!");
            return;
        }
        this.props.agencia = novaAgencia;
    }

    public set setTitular(novoTitular: string) {
        if (novoTitular.trim().length === 0) {
            console.log("\n ERRO: O titular não pode ser vazio!");
            return;
        }
        this.props.titular = novoTitular;
    }

    public set setSaldo(novoSaldo: number) {
        if (novoSaldo === null) {
            console.log("\n ERRO: O saldo não pode ser vazio!");
            return;
        }
        this.props.saldo = novoSaldo;
    }

    // 2. Método Abstrato: Define "o que" deve ser feito, mas não "como".
    // Isso garante que todo mundo que herdar de Conta terá esse método.
    public abstract exibirExtrato(): void;
}