export interface ContaProps {
    numero: string;
    agencia: string;
    titular: string;
    saldo: number;
}

// Interface do Cliente (Herda a base)
export interface ContaCorrenteProps extends ContaProps {
    limite: number;
}

// Interface do Funcionário (Herda a base)
export interface ContaPoupancaProps extends ContaProps {
    taxaAniversario: number;
}