import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View
      // style={{
      //   flex: 1,
      //   justifyContent: "center",
      //   alignItems: "center",
      //   backgroundColor: "black",
        
        
      // }}
      style={styles.container}
    >
      <Text style={styles.txt}>Paul Andrey P. Yu BSIT-2B .</Text>
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