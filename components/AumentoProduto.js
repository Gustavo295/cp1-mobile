import React from "react";
import { Text, View } from "react-native";
import Style from "./Style";

export default function AumentoProduto({ valorNumero, percentualNumero, aumentoPercentual, aumentoValor }) {

    return (
        <View>
            {/* Exibição do resultado */}
            <Text style={Style.textInfo}>Resultados</Text>
            <Text style={Style.resultado}>Valor: R${valorNumero}</Text>
            <Text style={Style.resultado}>Aumento: {percentualNumero}%</Text>
            <Text style={Style.resultado}>Valor Novo: R${aumentoPercentual}</Text>
            <Text style={Style.resultado}>Valor Aumentado: R${aumentoValor}</Text>
        </View>
    )
}