import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

// local

import SafeViewAndroid from "./SafeViewAndroid";

class Header extends Component {
    render() {
        return (
            <SafeAreaView style={[SafeViewAndroid.AndroidSafeArea, {backgroundColor: this.props.whichPage === "AboutDev" ? "#FFF9CF" : "#FFFDF2",}]}>
                <View style={[styles.container, {backgroundColor: "#FFF9CF"}]}>
                    <Icon name="long-arrow-left" size={25} style={{color: "black"}} ></Icon>
                    <Text style={styles.headerText}>{this.props.headerTitle}</Text>
                    <View style={styles.dummyItem}></View>   
                </View>
            </SafeAreaView>
        );
    }
}
export default Header;

const styles = StyleSheet.create({
    container: {
        flexDirection : 'row',
        height: 59,
        alignItems : "center",
        justifyContent: 'space-between',
        backgroundColor: "#FFFDF2",

        paddingRight: 13,
        paddingLeft: 13,
    },
    headerText:{
        fontStyle: "normal",
        fontWeight: "700",
        fontSize: 16,
        color: "black",

        alignSelf: "center",
    },
    dummyItem : {
        width: 30,
        height: 30,
    },
});