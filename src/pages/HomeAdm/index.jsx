import { StatusBar } from "expo-status-bar";
import React, { useContext, useState } from "react";
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity } from "react-native";
import { firebase } from "../../services/fibase";
import { globalContext } from "../../../App";
import { styles } from "./styles";
import { Cabecalho } from "../../components/Cabecalho";
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 as Reserva } from "@expo/vector-icons";
import { tema } from "../../styles";

export default function HomeAdm({ usuario }) {
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
          <TouchableOpacity style={styles.iconeContainer}>
            <Reserva name="glass-cheers" size={24} color={tema.cores.principal} />
            <Text style={styles.textoSecundario}>Ambientes</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconeContainer}>
            <Reserva
              name="calendar-check"
              size={30}
              color={tema.cores.principal}
            />
            <Text style={styles.textoSecundario}>Reservas</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconeContainer}>
            <FontAwesome name="user" size={30} color={tema.cores.principal} />
            <Text style={styles.textoSecundario}>Perfil</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.containerQuaternario}>
          <Text style={styles.textoSecundario}>
            Veja todas as reservas realizadas!
          </Text>
          <View style={styles.cartaoReserva}>
            <Text style={styles.textoCard}>
              Veja todas as reservas realizadas pelo condôminos.
            </Text>
            <TouchableOpacity>
              <Text style={styles.textoCard}>Ver mais</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.containerQuintenario}>
          <Text style={styles.textoSecundario}>
            Cadastre ou edite um ambiente de nosso Prédio
          </Text>
          <View style={styles.cartaoReserva}>
            <Text style={styles.textoCard}>
              Cadastre, edite ou remova um ambiente de nosso Prédio
            </Text>
            <TouchableOpacity>
              <Text style={styles.textoCard}>Ver mais</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.containerSextenario}>
          <Text style={styles.textoSecundario}>
            Veja e edite os dados do seu perfil
          </Text>
          <View style={styles.cartaoReserva}>
            <Text style={styles.textoCard}>
              Veja e edite os dados do seu perfil
            </Text>
            <TouchableOpacity>
              <Text style={styles.textoCard}>Ver mais</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View >
  );
}
