import React,{component} from "react";
import {
    View,
    Text,
    Alert,
    Image,
    StyleSheet,
    SafeAreaView,
    Platform,
    StatusBar,
    TextImput,
    TouchebleOpacity
} from "react-native";

import firebase from "firebase";
import { RFValue } from "react-native-responsive-fontsize";
import * as Font from "expo-font";

import * as SplashScreen from 'expo-splash-screen'
import { Component } from "react";
SplashScreen.preventAutoHideAsync();

let customFonts = {
"Bubblegum -Sans": require: ("../assets/fonts/BubblegumSans-Regular.ttf"), 
};
const appIcon = require("../assets/Logo tipo.png");

export default class LoginScreen extends Component{

constructor(props) {
    super(props);
    this.state = {
        email: "",
        password: "",
        fontsLoaded: false,
        userSignedIn: false

    };
}
    async_loadFontsAsync() {
        await Font.loadAsync
    }
}