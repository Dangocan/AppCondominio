import { StatusBar } from "expo-status-bar";
import React, { useContext, useState } from "react";
import { StyleSheet, Text, View, Picker, TextInput } from "react-native";
import { database, firebase } from "../../services/fibase";
import { globalContext } from "../../../App";
import { styles } from "./styles";
import { Cabecalho } from "../../components/Cabecalho";
import { BotaoVoltar } from "../../components/BotaoVoltar";
import { Rodape } from "../../components/Rodape";

export default function CadastroReserva() {
  const [nomeReserva, setNomeReserva] = useState();
  const [descricao, setDescricao] = useState();
  const [data, setData] = useState("");
  const [ambiente, setAmbiente] = useState({});

  const { valoresGlobais, setValoresGlobais } = useContext(globalContext);

  const lidarCadastro = async () => {
    const reservasolecao = database.ref("reservas");

    const firebaseAmbientes = await reservasolecao
      .push({
        usuarioUid: valoresGlobais.user?.uid || "admin",
        nomeReserva: nomeReserva,
        ambiente: ambiente,
        data: data,
      })
      .then((resp) =>
        database.ref("/reservas/" + resp.key).update({ chave: resp.key })
      );
  };

  return (
    <View style={styles.containerPrincipal}>
      <Cabecalho />
      <View style={styles.containerSecundario}>
        <View style={styles.containerCabecalho}>
          <BotaoVoltar />
          <Text style={styles.textoPrincipal}>Solicitar reserva</Text>
        </View>
        <TextInput
          style={styles.inputPrincipal}
          placeholder="Nome da reserva"
          onChangeText={(value) => setNomeReserva(value.toString())}
        />
        <TextInput
          style={styles.inputPrincipal}
          placeholder="Nome do ambiente"
          onChangeText={(value) => setAmbiente(value.toString())}
        />
        <TextInput
          style={styles.inputPrincipal}
          placeholder="dd/mm/yyyy"
          onChangeText={(value) => setData(Date.parse(value.toString()))}
        />
        <Text style={styles.botaoPrincipal} onClick={lidarCadastro}>
          Solicitar
        </Text>
      </View>
      <Rodape />
    </View>
  );
}
