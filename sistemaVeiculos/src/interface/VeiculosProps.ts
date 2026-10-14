export interface VeiculoProps {
    placa: string;
    modelo: string;
    marca: string;
    ano: number;
}

// Interface do Cliente (Herda a base)
export interface CarroProps extends VeiculoProps {
    qtdPortas: number;
}

// Interface do Funcionário (Herda a base)
export interface MotoProps extends VeiculoProps {
    cilindradas: number;
}