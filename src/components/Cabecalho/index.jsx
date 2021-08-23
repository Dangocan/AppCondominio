import { StatusBar } from "expo-status-bar";
import React, { useContext, useState } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import { firebase } from "../../services/fibase";
import { globalContext } from "../../../App";
import { styles } from "./styles";

export function Cabecalho() {
  return (
    <View style={styles.containerPrincipal}>
      <Text style={styles.texto1Cabecalho}>
        App<Text style={styles.texto2Cabecalho}>Condomínio</Text>
      </Text>
    </View>
  );
}
