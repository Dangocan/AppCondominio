import { StatusBar } from "expo-status-bar";
import React, { createContext, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Cadastro from "./src/pages/Cadastro";
import EditarAmbiente from "./src/pages/EditarAmbiente";
import CadastroAmbiente from "./src/pages/CadastroAmbiente";
import CadastroReserva from "./src/pages/CadastroReserva";
import MinhasReservas from "./src/pages/MinhasReservas";
import Login from "./src/pages/Login";
import Home from "./src/pages/Home";
import { database } from "./src/services/fibase";

export const globalContext = createContext({});

export default function App() {
  const [valoresGlobais, setValoresGlobais] = useState({});

  return (
    <globalContext.Provider value={{ valoresGlobais, setValoresGlobais }}>
      <Login />
    </globalContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
