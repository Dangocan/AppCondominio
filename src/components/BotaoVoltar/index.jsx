import { StatusBar } from "expo-status-bar";
import React, { useContext, useState } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import { firebase } from "../../services/fibase";
import { globalContext } from "../../../App";
import { AntDesign } from "@expo/vector-icons";
import { styles } from "./styles";
import { tema } from "../../styles";

export function BotaoVoltar() {
  return (
    <View style={styles.containerPrincipal}>
      <AntDesign name="arrowleft" size={24} color={tema.cores.secundaria} />
    </View>
  );
}
