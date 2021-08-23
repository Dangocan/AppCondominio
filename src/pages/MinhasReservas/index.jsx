import { StatusBar } from "expo-status-bar";
import React, { useContext, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Picker,
  TextInput,
  FlatList,
} from "react-native";
import { database, firebase } from "../../services/fibase";
import { globalContext } from "../../../App";
import { styles } from "./styles";
import { Cabecalho } from "../../components/Cabecalho";
import { BotaoVoltar } from "../../components/BotaoVoltar";
import { Rodape } from "../../components/Rodape";

export default function MinhasReservas() {
  const [ambiente, setAmbiente] = useState({});
  const [reservas, setReservas] = useState({});

  const { valoresGlobais, setValoresGlobais } = useContext(globalContext);

  return (
    <View style={styles.containerPrincipal}>
      <Cabecalho />
      <View style={styles.containerSecundario}>
        <View
          onClick={async () =>
            console.log("OI: " + (await database.ref("reservas/")))
          }
          style={styles.containerCabecalho}
        >
          <BotaoVoltar />
          <Text style={styles.textoPrincipal}>Solicitar reserva</Text>
        </View>
        <View>
          <FlatList></FlatList>
        </View>
      </View>
      <Rodape />
    </View>
  );
}
