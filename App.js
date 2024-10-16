import {useState} from "react"
import {Text, StyleSheet, View, Image, TouchableOpacity} from "react-native";
import Slider from "@react-native-community/slider";

let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789" 

//funções//
export default function app(){
  const [size, setSize]= useState(6)
   
  function gsenha(){
    let pass = "";
    for(let i = 0, n = charset.length; i <size; i++){
      pass += charset.charAt(Math.floor(Math.random() * n))
    }

    console.log(pass);
  }

  return(
    <View style ={styles.container}>
      <Image source = {require("./src/assets/logo.png")} style={styles.image}/>

      <Text style={styles.title}>
        {size} caracteres
      </Text>

      <View style={styles.area}> 
        <Slider style={{height: 50}}
        minimumValue={6}
        maximumValue={20}
        value={size}
        onValueChange={ (value) => setSize(value.toFixed(0))}
        />
      </View>

      <TouchableOpacity style={styles.buttom} onPress={gsenha}>
        <Text style={styles.text}>Gerar Senha</Text>
      </TouchableOpacity>
    </View>
  )
}

//estilos//
const styles  = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: "#010A17",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 200,
    height: 200,
  },
  title:{
    color: "#f3f3fF",
    fontSize: 20,
    fontWeight: "bold",
  },
  area:{
    marginTop: 14,
    marginBottom: 14,
    width: "80%",
    backgroundColor: "#03132B",
    borderRadius: 8,
    padding: 8,
  },
  buttom:{
    backgroundColor: "#03132B",
    width: "80%",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius:8,
    padding: 8,
  },
  text:{
    color: "#F3F3FF",
    fontSize: 15,
  }
})