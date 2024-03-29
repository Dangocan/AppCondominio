import { StatusBar } from "expo-status-bar";
import React, { useContext, useState } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import { database } from "../../services/fibase";
import { globalContext } from "../../../App";
import { styles } from "./styles";
import { Cabecalho } from "../../components/Cabecalho";
import { BotaoVoltar } from "../../components/BotaoVoltar";
import { Rodape } from "../../components/Rodape";

export default function CadastroAmbiente() {
  const [nome, setNome] = useState();
  const [descricao, setDescricao] = useState();
  const [lotacao, setLotacao] = useState(0);

  const { valoresGlobais, setValoresGlobais } = useContext(globalContext);

  const lidarCadastro = async () => {
    const ambientesColecao = database.ref("ambientes");

    const firebaseAmbientes = await ambientesColecao
      .push({
        nome: nome,
        descricao: descricao,
        lotacao: lotacao,
      })
      .then((resp) =>
        database.ref("/ambientes/" + resp.key).update({ chave: resp.key })
      );
  };

  return (
    <View style={styles.containerPrincipal}>
      <Cabecalho />
      <View style={styles.containerSecundario}>
        <View style={styles.containerCabecalho}>
          <BotaoVoltar />
          <Text style={styles.textoPrincipal}>Cadastrar ambientes</Text>
        </View>
        <TextInput
          style={styles.inputPrincipal}
          placeholder="Nome do ambiente"
          onChangeText={(value) => setNome(value.toString())}
        />
        <TextInput
          style={styles.inputPrincipal}
          placeholder="Descrição do ambiente"
          onChangeText={(value) => setDescricao(value.toString())}
        />
        <TextInput
          style={styles.inputPrincipal}
          keyboardType="numeric"
          placeholder="Lotação máxima"
          onChangeText={(value) =>
            !isNaN(value) && setLotacao(value.toString())
          }
        />
        <Text style={styles.botaoPrincipal} onClick={lidarCadastro}>
          Cadastrar
        </Text>
      </View>
      <Rodape />
    </View>
  );
}
