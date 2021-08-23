import { StatusBar } from "expo-status-bar";
import React, { useContext, useEffect, useState } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import { database } from "../../services/fibase";
import { globalContext } from "../../../App";
import { styles } from "./styles";
import { Cabecalho } from "../../components/Cabecalho";
import { BotaoVoltar } from "../../components/BotaoVoltar";
import { Rodape } from "../../components/Rodape";

export default function CadastroAmbiente({ ambienteChave }) {
  const [nome, setNome] = useState();
  const [descricao, setDescricao] = useState();
  const [lotacao, setLotacao] = useState();
  const [desabilitarBotao, setDesabilitarBotao] = useState(true);
  const [ambiente, setAmbiente] = useState({});

  const { valoresGlobais, setValoresGlobais } = useContext(globalContext);

  const lidarEditar = async () => {
    console.log(ambiente);

    const refAmbinte = database.ref("/ambientes/" + ambienteChave);

    await refAmbinte.update({
      nome: nome,
      descricao: descricao,
      lotacao: lotacao,
    });
  };

  useEffect(() => {
    (async function () {
      const ambientesColecao = (
        await database.ref("/ambientes/" + ambienteChave).get()
      ).toJSON();
      setAmbiente(ambientesColecao);
      setNome(ambientesColecao.nome);
      setDescricao(ambientesColecao.descricao);
      setLotacao(ambientesColecao.lotacao);
      setDesabilitarBotao(false);
    })();
  }, []);

  return (
    <View style={styles.containerPrincipal}>
      <Cabecalho />
      <View style={styles.containerSecundario}>
        <View style={styles.containerCabecalho}>
          <BotaoVoltar />
          <Text style={styles.textoPrincipal}>Editar ambientes</Text>
        </View>
        <TextInput
          editable={!desabilitarBotao}
          style={styles.inputPrincipal}
          defaultValue={nome}
          placeholder="Nome do ambiente"
          onChangeText={(value) => setNome(value.toString())}
        />
        <TextInput
          editable={!desabilitarBotao}
          defaultValue={descricao}
          style={styles.inputPrincipal}
          placeholder="Descrição do ambiente"
          onChangeText={(value) => setDescricao(value.toString())}
        />
        <TextInput
          editable={!desabilitarBotao}
          defaultValue={lotacao}
          style={styles.inputPrincipal}
          keyboardType="numeric"
          placeholder="Lotação máxima"
          onChangeText={(value) =>
            !isNaN(value) && setLotacao(value.toString())
          }
        />
        <Text
          style={styles.botaoPrincipal}
          onClick={
            !desabilitarBotao ? lidarEditar : () => console.log("desabilitado")
          }
        >
          Cadastrar
        </Text>
      </View>
      <Rodape />
    </View>
  );
}
