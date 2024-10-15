import {Text, StyleSheet, View, Image} from "react-native";
import Slider from "@react-native-community/slider";

export default function app(){
  return(
    <View style ={styles.container}>
      <Image source = {require("./src/assets/logo.png")} style={styles.image}/>

      <Text style={styles.title}>
        10 caracteres
      </Text>

      <View style={styles.area}> 
        <Slider style={{height: 50}}
        minimumValue={6}
        maximumValue={20}
        />
      </View>
    </View>
  )
}

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
    color: "#fff",
  },
  area:{

  },
})