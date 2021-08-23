import { StatusBar } from "expo-status-bar";
import React, { useContext, useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  FlatList,
} from "react-native";
import { database, firebase } from "../../services/fibase";
import { globalContext } from "../../../App";
import { styles } from "./styles";
import { Cabecalho } from "../../components/Cabecalho";
import { BotaoVoltar } from "../../components/BotaoVoltar";
import { Rodape } from "../../components/Rodape";
import { FontAwesome5 as Icones } from "@expo/vector-icons";
import { tema } from "../../styles";

export default function ListagemAmbientes() {
  const [ambientes, setAmbientes] = useState({});
  const { valoresGlobais, setValoresGlobais } = useContext(globalContext);

  useEffect(() => {
    (async function () {
      const ambientesColecao = (
        await database.ref("ambientes").get()
      ).toJSON();
      setAmbientes(ambientesColecao);
    })();
  }, []);

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
          <Text style={styles.textoPrincipal}>Ambientes</Text>
        </View>
        <View style={styles.containerTerciario}>
          <FlatList
            data={ambientes}
            keyExtractor={item => item.chave}
            renderItem={item =>
              <View style={styles.containerAmbiente}>
                <Text>
                  {item.nome}
                </Text>
                <Icones name="pencil-square-o" color={tema.cores.principal} />
                <Icones name="trash-alt" color={tema.cores.principal} />
              </View>
            }
          />
        </View>
      </View>
      <Rodape />
    </View>
  );
}
