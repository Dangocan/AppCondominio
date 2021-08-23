import { StyleSheet } from "react-native";
import { tema } from "../../styles";

export const styles = StyleSheet.create({
  containerPrincipal: {
    flex: 1,
    height: "100%",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  containerSecundario: {
    height: "85%",
    width: "95%",
    paddingTop: 35,
    paddingBottom: 180,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-around",
  },
  inputPrincipal: {
    height: 50,
    width: "90%",
    padding: 10,
    borderWidth: 1,
    borderColor: tema.cores.principal,
    borderRadius: 10,
    fontSize: 20,
  },
  botaoPrincipal: {
    textAlign: "center",
    padding: 15,
    width: "90%",
    borderRadius: 10,
    height: 50,
    backgroundColor: tema.cores.principal,
    color: tema.cores.secundaria,
    fontSize: 20,
    fontWeight: "bold",
  },
  textoPrincipal: {
    color: tema.cores.principal,
    fontSize: 30,
    fontWeight: "bold",
  },
});
