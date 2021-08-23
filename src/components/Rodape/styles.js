import { StyleSheet } from "react-native";
import { tema } from "../../styles";

export const styles = StyleSheet.create({
  containerPrincipal: {
    width: "100%",
    flexDirection: "row",
    height: "10%",
    bottom: 0,
    position: "absolute",
    backgroundColor: tema.cores.principal,
    alignItems: "center",
    justifyContent: "space-around",
  },
  iconeContainer: {
    width: 30,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  iconeTexto: {
    color: tema.cores.secundaria,
    fontSize: 15,
    fontWeight: "bold",
  },
});
