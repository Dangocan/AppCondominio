import { StatusBar } from "expo-status-bar";
import React, { createContext, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import CadastroAmbiente from "./src/pages/CadastroAmbiente";
import LoginPage from "./src/pages/Login";

export const globalContext = createContext({});

export default function App() {
  const [valoresGlobais, setValoresGlobais] = useState({});

  return (
    <globalContext.Provider value={{ valoresGlobais, setValoresGlobais }}>
      <CadastroAmbiente />
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
