import React from "react";
import {StyleSheet,Text,View,Image,Pressable,} from "react-native";
import { ImageBackground } from 'react-native';

import Header from "../Header";

const AboutPage = ({ navigation }) => {

  return (
    <View style={styles.container}>
      <Pressable style={{width: '100%', marginBottom: 100}} onPress={() => navigation.goBack()}> 
        <Header headerTitle="Tentang Developer"/>
      </Pressable>
      <ImageBackground source={require('../../assets/bg_about.jpg')} style={styles.image}>
      </ImageBackground>
      <View style={styles.box}></View>
      <View style={styles.elips}>
        <Image source={require("../../assets/PP_about.jpg")} style={styles.profil} />
      </View>
      <Text style={styles.textinput}>
        Nama : Edo Sani {"\n"}
      </Text>
      <Text style={styles.textinput2}>
        NIM : 120140179 {"\n"}
      </Text>
      <Text style={styles.textinput3}>
        Prodi : Teknik Informatika {"\n"}
      </Text>
      <Text style={styles.textinput4}>
        This application was created to fulfill the Midterm Examination {"\n"}
      </Text>
      <Text style={styles.textinput5}>
        for the Mobile Application Development.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:"white",
    flex: 1
  },
  box: {
    position: "absolute",
    width: '100%',
    height: '100%',
    marginTop: 87,
    backgroundColor: 'rgba(71, 71, 71, 0.6)',
  },
  headerText: {
    color: "black",
    fontSize: 20,
    fontWeight: "700",
    textAlign: "center",
  },
  elips: {
    position: 'absolute',
    width: 100,
    height: 100,
    left: 10,
    top: 90,
    borderWidth: 2,
    borderRadius: 100,
    borderColor : "#FA4454",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  profil: {
    width: "100%",
    height: "100%",
    borderRadius: 100,
  },
  textinput: {
    position: "absolute",
    width: '100%',
    height: 40,
    padding: 10,
    top: 90,
    left: 105,
    fontSize: 16
  },
  textinput2: {
    position: "absolute",
    width: '100%',
    height: 40,
    padding: 10,
    top: 110,
    left: 105,
    fontSize: 16
  },
  textinput3: {
    position: "absolute",
    width: '100%',
    height: 40,
    padding: 10,
    top: 130,
    left: 105,
    fontSize: 16
  },
  textinput4: {
    position: "absolute",
    width: '100%',
    height: 40,
    padding: 10,
    top: 230,
    left: 10,
    fontSize: 16
  },
  textinput5: {
    position: "absolute",
    width: '100%',
    height: 40,
    padding: 10,
    top: 250,
    left: 10,
    fontSize: 16
  },
});

export default AboutPage;