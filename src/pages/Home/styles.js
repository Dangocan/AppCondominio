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
    height: "75%",
    width: "95%",
    paddingBottom: 600,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  containerTerciario: {
    flexDirection: "row",
    width: "98%",
    position: "absolute",
    top: "-28%",
    alignItems: "center",
    justifyContent: "space-between",
  },
  containerQuaternario: {
    width: "98%",
    position: "absolute",
    top: "15%",
    alignItems: "center",
    justifyContent: "space-between",
  },
  containerCartao: {
    flexDirection: "row",
    top: "-70%",
    zIndex: 1,
    positon: "absolute",
    height: 80,
    width: "80%",
    alignItems: "center",
    justifyContent: "space-around",
  },
  containerUsuario: {
    width: 80,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  iconeContainer: {
    backgroundColor: tema.cores.cinza,
    borderRadius: 20,
    height: 110,
    width: 110,
    padding: 20,
    alignItems: "center",
    justifyContent: "space-around",
  },
  cartaoReserva: {
    height: 120,
    width: "98%",
    padding: 10,
    margin: 30,
    paddingTop: 10,
    borderWidth: 1,
    borderColor: tema.cores.principal,
    borderRadius: 10,
    fontSize: 20,
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
    zIndex: 1,
    width: "98%",
    textAlign: "center",
    color: tema.cores.secundaria,
    fontSize: 20,
    fontWeight: "bold",
  },
  textoSecundario: {
    zIndex: 1,
    textAlign: "center",
    color: tema.cores.principal,
    fontSize: 18,
  },
  textoCard: {
    marginTop: 20,
    color: tema.cores.principal,
    fontSize: 16,
  },
});
