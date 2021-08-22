import { StatusBar } from "expo-status-bar";
import React, { useContext, useState } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import { database } from "../../services/fibase";
import { globalContext } from "../../../App";

export default function CadastroAmbiente() {
  const [nome, setNome] = useState();
  const [descricao, setDescricao] = useState();
  const [lotacao, setLotacao] = useState(0);

  const { valoresGlobais, setValoresGlobais } = useContext(globalContext);

  const handleCadastro = async () => {
    const ambientesColecao = database.ref("ambientes");

    const firebaseAmbientes = await ambientesColecao.push({
      nome: nome,
      descricao: descricao,
      lotacao: lotacao,
    });
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text>Cadastrar ambientes</Text>
      <TextInput
        placeholder="Nome do ambiente"
        onChangeText={(value) => setNome(value.toString())}
      />
      <TextInput
        placeholder="Descrição do ambiente"
        onChangeText={(value) => setDescricao(value.toString())}
      />
      <TextInput
        keyboardType="numeric"
        placeholder="Lotação máxima"
        onChangeText={(value) =>
          "1234567890".includes(value) && setLotacao(value.toString())
        }
      />
      <Button onPress={handleCadastro}>Cadastrar</Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
