import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#d7feff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    // Estilização pro formulário
    textInput: {
        width: 250,
        height: 50,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 10,
        fontSize: 20,
        textAlign: "center",
    },
    // Estilização para Textos
    textInfo: {
        fontSize: 25,
        color: '#006bc5',
        textAlign: "center",
    },
    // Estilização para os resultados exibidos
    resultado: {
        borderColor: '#000',
        borderRadius: 5,
        borderWidth: 1,
        backgroundColor: '#fff',
        fontSize: 18,
        padding: 3,
        width: 220,
        textAlign: "center"
    },
})