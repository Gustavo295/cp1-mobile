import React from "react";
import { Text, View } from "react-native";
import Style from "./Style";

export default function AumentoProduto({ valorNumero, percentualNumero, aumentoPercentual, aumentoValor }) {

    return (
        <View style={Style.resultado}>
            <Text>Valor: R${valorNumero}</Text>
            <Text>Aumento: {percentualNumero}%</Text>
            <Text>Valor Novo: R${aumentoPercentual}</Text>
            <Text>Valor Aumentado: R${aumentoValor}</Text>
        </View>
    )
}