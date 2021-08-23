import { StatusBar } from "expo-status-bar";
import React, { useContext, useState } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import { database, firebase } from "../../services/fibase";
import { globalContext } from "../../../App";
import { styles } from "./styles";
import { Cabecalho } from "../../components/Cabecalho";
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 as Reserva } from "@expo/vector-icons";
import { tema } from "../../styles";

export default function Home({ usuario }) {
  const { valoresGlobais, setValoresGlobais } = useContext(globalContext);

  const lidarLogOut = async () => {
    await firebase.auth().signOut();
    setValoresGlobais({});
  };

  return (
    <View style={styles.containerPrincipal}>
      <Cabecalho />
      <View style={styles.containerSecundario}>
        <View style={styles.containerTerciario}>
          <Text style={styles.textoPrincipal}>
            {usuario || "plachelderson"}
          </Text>
          <View style={styles.containerUsuario} onClick={lidarLogOut}>
            <Ionicons
              name="log-out-outline"
              size={30}
              color={tema.cores.secundaria}
            />
            <Text style={styles.textoPrincipal}>Sair</Text>
          </View>
        </View>
        <View style={styles.containerCartao}>
          <View style={styles.iconeContainer}>
            <Reserva
              name="calendar-check"
              size={30}
              color={tema.cores.principal}
            />
            <Text style={styles.textoSecundario}>Reservas</Text>
          </View>
          <View style={styles.iconeContainer}>
            <FontAwesome name="user" size={30} color={tema.cores.principal} />
            <Text style={styles.textoSecundario}>Perfil</Text>
          </View>
        </View>
        <View style={styles.containerQuaternario}>
          <Text style={styles.textoSecundario}>
            Reserve o ambiente de sua escolha em nosso prédio
          </Text>
          <View style={styles.cartaoReserva}>
            <Text style={styles.textoCard}>
              Reserve um dos nosso ambientes para realizar o evento dos seus
              sonhos
            </Text>
            <Text style={styles.textoCard}>Ver mais</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
