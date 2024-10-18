import { useState } from "react"
import { Text, StyleSheet, View, Image, TouchableOpacity, Modal } from "react-native";
import Slider from "@react-native-community/slider";
import {ModalPass} from '../../components/modal'

let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"

//funções//
export function Home() {
  const [size, setSize] = useState(6)
  const [passV, setPassV] = useState('')
  const [modalVisible, setModalVisible] = useState(false)

  function gsenha() {
    let pass = "";
    for (let i = 0, n = charset.length; i < size; i++) {
      pass += charset.charAt(Math.floor(Math.random() * n))
    }

    setPassV(pass)
    setModalVisible(true);
  }

  return (
    <View style={styles.container}>
      <Image source={require("../../assets/logo.png")} style={styles.image} />

      <Text style={styles.title}>
        {size} caracteres
      </Text>

      <View style={styles.area}>
        <Slider style={{ height: 50 }}
          minimumValue={6}
          maximumValue={20}
          value={size}
          onValueChange={(value) => setSize(value.toFixed(0))}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={gsenha}>
        <Text style={styles.text}>Gerar Senha</Text>
      </TouchableOpacity>

      <Modal visible = {modalVisible} animationType="fade" transparent={true}>
         <ModalPass pass={passV} handleClose={() => setModalVisible(false)}>
         </ModalPass>
      </Modal>

    </View>
  )
}

//estilos//
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#010A17",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 200,
    height: 200,
  },
  title: {
    color: "#f3f3fF",
    fontSize: 20,
    fontWeight: "bold",
  },
  area: {
    marginTop: 14,
    marginBottom: 14,
    width: "80%",
    backgroundColor: "#03132B",
    borderRadius: 8,
    padding: 8,
  },
  button: {
    backgroundColor: "#03132B",
    width: "80%",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    padding: 8,
  },
  text: {
    color: "#F3F3FF",
    fontSize: 15,
  }
})