import { StatusBar } from "expo-status-bar";
import React, { useContext, useState } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import { database, firebase } from "../../services/fibase";
import { globalContext } from "../../../App";
import { styles } from "./style";
import { Cabecalho } from "../../components/Cabecalho";

export default function Cadastro() {
  const [email, setEmail] = useState();
  const [senha, setSenha] = useState();
  const [senhaCorreta, setSenhaCorreta] = useState(false);
  const [numApartamento, setNumApartamento] = useState();
  const [nome, setNome] = useState();

  const { valoresGlobais, setValoresGlobais } = useContext(globalContext);

  const lidarCadastro = () => {
    const provider = new firebase.auth()
      .createUserWithEmailAndPassword(email, senha)
      .then(async (res) => {
        await database.ref("usuario").push({
          nome: nome,
          numApartamento: numApartamento,
          email: res.user.email,
          uid: res.user.uid,
        });
        setValoresGlobais({
          user: {
            nome: nome,
            numApartamento: numApartamento,
            email: res.user.email,
            uid: res.user.uid,
          },
        });
        //Mudar para pagina inicial
      })
      .then((a) => console.log("oi"))
      .catch((erro) => console.log("Deu Ruim" + erro));
  };

  return (
    <View style={styles.containerPrincipal}>
      <Cabecalho />
      <View style={styles.containerSecundario}>
        <Text style={styles.textoPrincipal}>Cadastre-se</Text>
        <TextInput
          style={styles.inputPrincipal}
          placeholder="Nome"
          onChangeText={(value) => setNome(value.toString())}
        />
        <TextInput
          style={styles.inputPrincipal}
          placeholder="Email"
          onChangeText={(value) => setEmail(value.toString())}
        />
        <TextInput
          style={styles.inputPrincipal}
          placeholder="N° do Apartamento"
          onChangeText={(value) =>
            !isNaN(value) && setNumApartamento(value.toString())
          }
        />
        <TextInput
          style={styles.inputPrincipal}
          placeholder="Senha"
          secureTextEntry
          onChangeText={(value) => setSenha(value.toString())}
        />
        <TextInput
          style={styles.inputPrincipal}
          placeholder="Confirme a senha"
          secureTextEntry
          onChangeText={(value) =>
            value.toString() === senha
              ? setSenhaCorreta(true)
              : setSenhaCorreta(false)
          }
        />
        <Text
          style={styles.botaoPrincipal}
          onClick={senhaCorreta && lidarCadastro}
        >
          Cadastrar
        </Text>
      </View>
    </View>
  );
}
