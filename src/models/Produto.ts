import Categoria from './Categoria';

interface Produto {
    id: number;
    nome: string;
    preco: number;
    foto: string;
    categoria?: Categoria | null
}

export default Produto;