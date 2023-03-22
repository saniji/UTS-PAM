import React, {useEffect } from "react";
import {StyleSheet, Text, Pressable, View, Image} from "react-native";
import { ImageBackground } from 'react-native';
import { useRoute } from "@react-navigation/core";
import axios from "axios";

import Header from "../Header";

const SearchPage = ({ navigation }) => {
  const route = useRoute();
  const name = route.params.name;
  const tag = route.params.tag;
  const server = route.params.server;

  const [rankIcon, setRankIcon] = React.useState('');
  const [profileIcon, setProfileIcon]= React.useState('');
  const [rankName, setRankName] = React.useState('');
  const [accLv, setAccLv] = React.useState();
  const [tierLv, setTierLv] = React.useState();
  const [region, setRegion] = React.useState('');
  const [accdata, setAccData] = React.useState({});
  const [mmrdata, setMmrData] = React.useState({});

  const getAccData = async() => {
    try {
      const resp = await axios.get("https://api.henrikdev.xyz/valorant/v1/account/Dipsy/7666?force=true");
      setAccData(resp.data);
    } catch(error) {
      alert(error.message);
    }

    setProfileIcon(accdata.data.card.small);
    setAccLv(accdata.data.account_level);
  };

  const getMmrData = async() => {
    try {
      const resp = await axios.get("https://api.henrikdev.xyz/valorant/v1/mmr-history/ap/Dipsy/7666");
      setMmrData(resp.data);
    } catch(error) {
      alert(error.message);
    }
    setRankIcon(mmrdata.data[0].images.large);
    setTierLv(mmrdata.data[0].ranking_in_tier);
    setRankName(mmrdata.data[0].currenttierpatched);
  };

  useEffect(() => {
    getAccData();
    getMmrData();
    if(server == "ap") {
      setRegion("Asia-Pasific");
    } else if(server == "kr") {
      setRegion("Korea");
    } else if(server == "eu") {
      setRegion("Europe");
    } else {
      setRegion("North America");
    }
  },[])

  console.log(accdata);
  console.log(mmrdata);
  return (
    <View style={styles.container}>
      <Pressable style={{width: '100%', marginBottom: 100}} onPress={() => navigation.goBack()}> 
        <Header headerTitle="Result Search"/>
      </Pressable>
      <ImageBackground source={require('../../assets/bg_detail_page.jpg')} style={styles.image}>
      </ImageBackground>
      <View style={styles.box}></View>

      <View style={styles.box2}>
        <View>
          <Image source={{uri: rankIcon}} style={[styles.cube,{width: 85, height:85}]}/>
          <Text style={{marginTop: 10, marginLeft: 147}}>{rankName}</Text>
        </View>
        <View style={{flex: 1, flexDirection: "row", justifyContent: "flex-start", marginTop: 80}}>
          <Image source={{uri: profileIcon}} style={[styles.cube2, {width: 70, height:70}]}/>
          <View style={{flex: 1, marginLeft: 23}}>
            <Text>{name}#{tag}</Text>
            <Text>Account Level : {accLv}</Text>
            <Text>Tier in Rank : {tierLv}</Text>
            <Text>Region : {region}</Text>
          </View>
        </View>
        
      </View>
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
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  box2: {
    position: "absolute",
    width: 330,
    height: 280,
    left: 30,
    top: 250,
    backgroundColor: "#FA4454",
    borderRadius: 10
  },
  cube: {
    borderRadius: 10,
    left: 124
  },
  cube2: {
    borderRadius: 10,
    left: 15,
  }
});

export default SearchPage;