import { VeiculoProps } from "../interface/VeiculosProps.js";

// 1. Adicionamos 'abstract' aqui para impedir que Conta seja instanciada diretamente
export abstract class Veiculo<T extends VeiculoProps= VeiculoProps> {

    constructor(protected props: T) {}

    public get getPlaca(): string { return this.props.placa; }
    public get getModelo(): string { return this.props.modelo; }
    public get getMarca(): string { return this.props.marca; }
    public get getAno(): number { return this.props.ano; }

    public set setPlaca(novaPlaca: string) {
        if (novaPlaca.trim().length === 0) {
            console.log("\n ERRO: a Placa não pode ser vazia!");
            return;
        }
        this.props.placa = novaPlaca;
    }

    public set setModelo(novoModelo: string) {
        if (novoModelo.trim().length === 0) {
            console.log("\n ERRO: O Modelo não pode ser vazio!");
            return;
        }
        this.props.modelo = novoModelo;
    }

    public set setMarca(novaMarca: string) {
        if (novaMarca.trim().length === 0) {
            console.log("\n ERRO: A marca não pode ser vazio!");
            return;
        }
        this.props.marca = novaMarca;
    }

    public set setAno(novoAno: number) {
        if (novoAno === null) {
            console.log("\n ERRO: O ano não pode ser vazio!");
            return;
        }
        this.props.ano = novoAno;
    }

    // 2. Método Abstrato: Define "o que" deve ser feito, mas não "como".
    // Isso garante que todo mundo que herdar de Conta terá esse método.
    public abstract exibirExtrato(): void;
}