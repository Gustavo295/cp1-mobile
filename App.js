import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, TextInput, View } from 'react-native';
import AumentoProduto from './components/AumentoProduto';
import Style from './components/Style';

export default function App() {
  const [nome, setNome] = useState("");
  const [valor, setValor] = useState(0);
  const [porcentagem, setPorcentagem] = useState(0);
  const [resultado, setResultado] = useState(null);

  const calcularAumento = () => {
    const valorNumero = parseFloat(valor);
    const percentualNumero = parseFloat(porcentagem);
    const aumentoPercentual = parseFloat(valorNumero + (valorNumero * percentualNumero) / 100);
    const aumentoValor = parseFloat(aumentoPercentual - valorNumero);

    if (isNaN(valorNumero) || isNaN(percentualNumero)) {
      alert("Valor nulo");
      return;
    }

    setResultado({ valorNumero, percentualNumero, aumentoPercentual, aumentoValor });
  };
  return (
    <View style={Style.container}>
      <StatusBar style="auto" />
      <TextInput
        placeholder='Nome do Produto'
        style={Style.textInput}
        onChangeText={setNome}
        value={nome}
      ></TextInput>
      <TextInput
        placeholder='Valor do Produto'
        style={Style.textInput}
        keyboardType='decimal-pad'
        onChangeText={setValor}
        value={valor}
      ></TextInput>
      <TextInput
        placeholder='Percentual de Aumento'
        style={Style.textInput}
        keyboardType='decimal-pad'
        onChangeText={setPorcentagem}
        value={porcentagem}
      ></TextInput>

      <Button title="Calcular" onPress={calcularAumento} />
      {resultado && <AumentoProduto {...resultado} />}
    </View >
  );
};
