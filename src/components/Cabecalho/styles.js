import { StyleSheet } from "react-native";
import { tema } from "../../styles";

export const styles = StyleSheet.create({
  containerPrincipal: {
    flex: 1,
    width: "100%",
    backgroundColor: tema.cores.principal,
    alignItems: "center",
    justifyContent: "center",
  },
  texto1Cabecalho: {
    color: tema.cores.principalOpaca,
    fontSize: 25,
    fontWeight: "bold",
  },
  texto2Cabecalho: {
    color: tema.cores.secundaria,
    fontSize: 25,
    fontWeight: "bold",
  },
});
