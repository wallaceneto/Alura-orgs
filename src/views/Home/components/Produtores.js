import React from "react";
import { FlatList, Text, StyleSheet } from "react-native";

import Produtor from "./Produtor";
import useProdutores from "../../../hooks/useProdutores";

export default function Produtores({ topo: Topo }) {
    const [titulo, lista] = useProdutores();

    function TopoLista() {
        return <>
            <Topo />
            <Text style={estilos.titulo}>{ titulo }</Text>
        </>;
    }

    return <FlatList
        ListHeaderComponent={TopoLista} 
        data={lista}
        keyExtractor={({ nome }) => nome}
        renderItem={({ item }) =>
            <Produtor {...item} />
        }
    />
}

const estilos = StyleSheet.create({
    titulo: {
        fontSize: 20,
        lineHeight: 32,
        marginHorizontal: 16,
        marginTop: 16,
        fontWeight: 'bold',
        color: '#464646',
    },
});