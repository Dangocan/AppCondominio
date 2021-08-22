import { StatusBar } from "expo-status-bar";
import React, { useContext, useState } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import { firebase } from "../../services/fibase";
import { globalContext } from "../../../App";

export default function Login() {
  const [email, setEmail] = useState();
  const [senha, setSenha] = useState();

  const { valoresGlobais, setValoresGlobais } = useContext(globalContext);

  const handleLogin = () => {
    const provider = new firebase.auth()
      .signInWithEmailAndPassword(email, senha)
      .then((res) => {
        setValoresGlobais({
          user: { email: res.user.email, uid: res.user.uid },
        });
        //Mudar para pagina inicial
      })
      .catch((erro) => console.log("Deu Ruim" + erro));
    console.log({ email: email, senha: senha });
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text>OI</Text>
      <TextInput onChangeText={(value) => setEmail(value.toString())} />
      <TextInput
        secureTextEntry
        onChangeText={(value) => setSenha(value.toString())}
      />
      <Button onPress={handleLogin}>LogIn</Button>
    </View>
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
