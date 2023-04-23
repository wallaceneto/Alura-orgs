import { useEffect, useState } from "react";
import { carregaProdutores } from "../services/carregaDados";

export default function useProdutores() {
    const [ordenador] = useState(1);
    const [titulo, setTitulo] = useState('');
    const [lista, setLista] = useState([]);

    const fatorOrdenador = (itemA, itemB) => {
        if (ordenador == 0) return itemA.distancia - itemB.distancia;
        if (ordenador == 1) return itemA.estrelas - itemB.estrelas;
    } 
 
    useEffect(() => {
        const retorno = carregaProdutores();
        retorno.lista.sort(
            (produtor1, produtor2) => fatorOrdenador(produtor1, produtor2),
        );
        setTitulo(retorno.titulo);
        setLista(retorno.lista);
    }, []);
 
    return [titulo, lista];
 }