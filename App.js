import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, Text, TextInput, View } from 'react-native';
import AumentoProduto from './components/AumentoProduto';
import Style from './components/Style';

export default function App() {
  // Definindo use state
  const [nome, setNome] = useState("");
  const [valor, setValor] = useState(0);
  const [porcentagem, setPorcentagem] = useState(0);
  const [resultado, setResultado] = useState(null);

  // Função para calcular o aumento da porcentagem
  const calcularAumento = () => {
    // Variáveis
    // Valor do produto
    const valorNumero = parseFloat(valor);
    // Percentual de aumento
    const percentualNumero = parseFloat(porcentagem);
    // Novo valor com o aumento
    const aumentoPercentual = parseFloat(valorNumero + (valorNumero * percentualNumero) / 100);
    // Preço que aumentou
    const aumentoValor = parseFloat(aumentoPercentual - valorNumero);

    // Função caso o valor inserido seja nulo
    if (isNaN(valorNumero) || isNaN(percentualNumero)) {
      alert("Insira um valor válido");
      return;
    }

    setResultado({ valorNumero, percentualNumero, aumentoPercentual, aumentoValor });
  };
  return (
    <View style={Style.container}>
      <StatusBar style="auto" />
      {/* Exibição do formulário */}
      <Text style={Style.textInfo}>Produto</Text>
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

      {/* Botão que ativa a função de calcular */}
      <Button title="Calcular" onPress={calcularAumento} />

      {/* Exibição dos valores novos puxando pelo componente AumentoProduto */}
      {resultado && <AumentoProduto {...resultado} />}
    </View >
  );
};
