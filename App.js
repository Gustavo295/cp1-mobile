import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, TextInput, View } from 'react-native';
import AumentoProduto from './components/AumentoProduto';
import Style from './components/Style';

export default function App() {
  const nome = [nome, setNome] = useState(0)
  return (
    <View style={Style.container}>
      <TextInput
        placeholder='Nome do Produto'
        style={Style.textInput}
        onChange={nome}
      ></TextInput>
      <TextInput
        placeholder='Valor do Produto'
        style={Style.textInput}
        keyboardType='decimal-pad'
      ></TextInput>
      <TextInput
        placeholder='Percentual de Aumento'
        style={Style.textInput}
        keyboardType='decimal-pad'
      ></TextInput>
      <Button
        title='Calcular'
        onPress={() => { }}
      />
      <StatusBar style="auto" />
      <AumentoProduto />
    </View>
  );
};
