import React from "react";
import {StyleSheet,Text,TextInput,Pressable,SafeAreaView,View,Image} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { useRoute } from "@react-navigation/core"

const HomeScreen = ({ navigation }) => {
  const [name, setName] = React.useState("");
  const [tag, setTag] = React.useState("");
  const [server, setServer] = React.useState("");

  return (
    <View style={styles.container}>
    <SafeAreaView>
      <View style={styles.box}>
        <Image source={require("../../assets/logo_valo.png")} style={styles.logo} />
      </View>
      <Text style={styles.headerText}>Detective Valo</Text>

      <View style={styles.formContainer}>
        <View style={styles.border}>
          <TextInput placeholder="username" style={styles.input} onChangeText={(e) => setName(e)}/>
        </View>

        <View style={styles.border2}>
          <TextInput placeholder="tag" style={styles.input} onChangeText={(e) => setTag(e)}/>
        </View>

        <View style={styles.border2}>
          <TextInput placeholder="server (eu,na,kr,ap)" style={styles.input} onChangeText={(e) => setServer(e)}/>
        </View>
      </View>
      <Pressable style={styles.border3} onPress={() =>
        navigation.navigate("Search", {
          name: name, tag: tag , server: server
        })}>
       <Icon name="angle-double-right" size={34} style={{ color: "black", margin: 34}} onPress={() => navigation.navigate("Search")}/>
      </Pressable>
      <Text style={{top: 365, left: 300}} onPress={() => navigation.navigate("About")}>
        About
      </Text>
    </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:"white",
    flex: 1
  },
  box: {
    left: 39,
    top: 120,
  },
  headerText: {
    color: "black",
    fontSize: 20,
    fontWeight: "700",
    textAlign: "center",
    // marginTop: 4
  },
  formContainer:{
    marginTop: 56,
  },
  border:{
    width: 245,
    height: 59,
    left: 60,
    top: 100,
    borderWidth: 3,
    borderStyle: "solid",
    borderColor : "#474747",
    borderRadius: 10
  },
  border2:{
    width: 245,
    height: 59,
    left: 60,
    top: 105,
    borderWidth: 3,
    borderStyle: "solid",
    borderColor : "#474747",
    borderRadius: 10
  },
  border3:{
    width: 100,
    height: 100,
    left: 130,
    top: 200,
    color : 'red',
    borderWidth: 3,
    borderStyle: "solid",
    borderColor : "#474747",
    borderRadius: 25
  },
  input: {
    height: 40,
    marginLeft: 5,
    borderWidth: 1,
    borderColor:"transparent",
    borderRadius: 3,
    paddingTop: 5,
    display:'flex',
    textAlign:'left',
    width:230,
  },
  logo: {
    resizeMode:"cover",
    width: 300,
    height: 90,
  },
});

export default HomeScreen;