import { View, Text, StyleSheet } from "react-native"

export default function Index() {
  return (
    <View
      style={styles.container}
    >
      <Text style={styles.txt}>Rasheed yule B. Montes BSIT-2B .</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
     
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "black",
  
  },

  txt:{
    color:"white",
    fontSize: 30
  }

})