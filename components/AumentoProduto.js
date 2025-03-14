import React from "react";
import { Text, View } from "react-native";

export default function AumentoProduto({ valor, percentual }) {
    const valorNumero = parseFloat(valor);
    const percentualNumero = parseFloat(percentual);
    const aumentoPercentual = valorNumero + (valorNumero * percentualNumero) / 100;
    const aumentoValor = aumentoPercentual - valor
    return (
        <View>
            <Text>Valor: R${valor}</Text>
            <Text>Aumento: {percentualNumero}%</Text>
            <Text>Valor Novo: R${aumentoPercentual}</Text>
            <Text>Valor Aumentado: R${aumentoValor}</Text>
        </View>
    )
}