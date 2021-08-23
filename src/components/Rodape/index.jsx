import { StatusBar } from "expo-status-bar";
import React, { useContext, useState } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import { firebase } from "../../services/fibase";
import { globalContext } from "../../../App";
import { styles } from "./styles";
import { FontAwesome } from "@expo/vector-icons";
import { FontAwesome5 as Reserva } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { tema } from "../../styles";

export function Rodape() {
  return (
    <View style={styles.containerPrincipal}>
      <View style={styles.iconeContainer}>
        <FontAwesome name="home" size={24} color={tema.cores.secundaria} />
        <Text style={styles.iconeTexto}>Home</Text>
      </View>
      <View style={styles.iconeContainer}>
        <Ionicons name="wine-sharp" size={24} color={tema.cores.secundaria} />
        <Text style={styles.iconeTexto}>Ambientes</Text>
      </View>
      <View style={styles.iconeContainer}>
        <Reserva
          name="calendar-check"
          size={24}
          color={tema.cores.secundaria}
        />
        <Text style={styles.iconeTexto}>Reservas</Text>
      </View>
      <View style={styles.iconeContainer}>
        <FontAwesome name="user" size={24} color={tema.cores.secundaria} />
        <Text style={styles.iconeTexto}>Perfil</Text>
      </View>
    </View>
  );
}