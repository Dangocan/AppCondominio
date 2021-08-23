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
    paddingTop: 60,
    paddingBottom: 250,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-around",
  },
  containerCabecalho: {
    width: "82%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
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
    alignSelf: "flex-start",
    color: tema.cores.principal,
    fontSize: 30,
    fontWeight: "bold",
  },
  textoSecundario: {
    color: tema.cores.principal,
    fontSize: 18,
    paddingBottom: 20,
  },
});
