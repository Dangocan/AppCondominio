import { StatusBar } from "expo-status-bar";
import React, { useContext, useState } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import { firebase } from "../../services/fibase";
import { globalContext } from "../../../App";
import { styles } from "./styles";
import { Cabecalho } from "../../components/Cabecalho";

export default function Login() {
  const [email, setEmail] = useState();
  const [senha, setSenha] = useState();

  const { valoresGlobais, setValoresGlobais } = useContext(globalContext);

  const lidarLogin = () => {
    const provider = new firebase.auth()
      .signInWithEmailAndPassword(email, senha)
      .then((res) => {
        setValoresGlobais({
          user: {
            email: res.user.email,
            uid: res.user.uid,
          },
        });
        //Mudar para pagina inicial
      })
      .catch((erro) => console.log("Deu Ruim" + erro));
  };

  return (
    <View style={styles.containerPrincipal}>
      <Cabecalho />
      <View style={styles.containerSecundario}>
        <Text style={styles.textoPrincipal}>Login</Text>
        <Text style={styles.textoSecundario}>
          Utilize seu e-mail e senha para acesso
        </Text>

        <TextInput
          style={styles.inputPrincipal}
          placeholder="Email"
          onChangeText={(value) => setEmail(value.toString())}
        />

        <TextInput
          style={styles.inputPrincipal}
          placeholder="Senha"
          secureTextEntry
          onChangeText={(value) => setSenha(value.toString())}
        />

        <Text style={styles.botaoPrincipal} onClick={lidarLogin}>
          Entrar
        </Text>
      </View>
    </View>
  );
}
