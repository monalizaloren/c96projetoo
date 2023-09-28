import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    Platform,
    StatusBar,
    Image
} from "react-native";

//PASSO 1
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "darkblue"
    },
    droidSafeArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 35
    },
    appTitle: {
        flex: 0.07,
        padding: 5,
        flexDirection: "row",
        justifyContent: "center"
    },
    appTitleText: {
        color: "white",
        fontSize: 28,
    },
    cardContainer: {
        flex: 0.93
    }
});
