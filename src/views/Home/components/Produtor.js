import React from "react";
import { Text, View, Image, StyleSheet } from "react-native";

export default function Produtor({ nome, imagem, distancia, estrelas }) {
    return <View style={estilos.cartao}>
        <Image style={estilos.imagem} source={imagem} accessibilityLabel={"logo da " + nome}/>
        <View style={estilos.informacoes}>
            <Text style={estilos.nome}>{ nome }</Text>
            <Text style={estilos.distancia}>{ distancia }</Text>
        </View>
    </View>
}

const estilos = StyleSheet.create({
    cartao: {
        backgroundColor: "#f6f6f6",
        marginVertical: 16,
        marginHorizontal: 16,
        borderRadius: 6,
        flexDirection: 'row',
        // Android
        elevation: 4,
        // iOS
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
    },
    imagem: {
        width: 48,
        height: 48,
        borderRadius: 6,
        marginVertical: 16,
        marginLeft: 16,
    },
    informacoes: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 8,
        marginVertical: 16,
        marginRight: 16,
    },
    nome: {
        fontSize: 14,
        lineHeight: 22,
        fontWeight: 'bold',
    },
    distancia: {
        fontSize: 12,
        lineHeight: 19,
    },
});