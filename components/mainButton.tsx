import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Audio } from 'expo-av';

import React, { useEffect, useState } from "react"
import { Fonts } from "../types/fonts";
import { Sound } from "expo-av/build/Audio";

interface mainButtonProps {
  text: string,
  color: string,
  textColor: string,
  fontsize: number,
  dark: string,
  fontFamily: Fonts,
  onPress: () => void
}

const MainButton: React.FC<mainButtonProps> = props => {
  const [position, setPosition] = useState(7.5)
  const [sound, setSound] = useState(new Audio.Sound);

  useEffect(() => {
    (async () => {
      await sound.loadAsync(require('../assets/sound/button.wav'))
    })()

    return sound ? () => {
      console.log("unloading sound")
      sound.unloadAsync()
    } : undefined
  }, [])

  const pressed = () => {
    sound.playAsync()
    setPosition(0)

    setTimeout(() => {
      setPosition(7.5)
      sound.stopAsync()
    }, 50)

    props.onPress()
  }

  return (
    <View style={{ margin: 7.5 }}>
      <View style={[{ backgroundColor: props.dark }, styles.dark]}></View>
      <TouchableOpacity activeOpacity={1} style={[{ backgroundColor: props.color, marginBottom: position, marginTop: -position }, styles.button]} onPress={pressed}>
        <View style={styles.reflectionContainer}>
          <View style={styles.reflection}></View>
          <View style={{backgroundColor:props.color, height:40, width:20, position:"absolute", bottom:0, left:0}}></View>
          <View style={{backgroundColor:props.color, height:20, width:40, position:"absolute", bottom:0, left:0}}></View>

        </View>
        <Text style={[styles.text, { color: props.textColor, fontSize: props.fontsize, fontFamily: props.fontFamily }]}> {props.text} </Text>
      </TouchableOpacity>
    </View>
  )
}

export default MainButton


const styles = StyleSheet.create({
  container: {
  },
  button: {
    height: 70,
    width: 250,
    borderRadius: 100,
    overflow: "visible",
    alignItems: "center",
    justifyContent: "center",
  },
  dark: {
    bottom: 0,
    height: 70,
    width: 250,
    borderRadius: 100,
    position: "absolute",
  },
  text: {
    textShadowColor: "#000000",
    textShadowRadius: 10,
  },
  reflectionContainer: {
    position: "absolute",
    top: 10,
    right: 13,
  },
  reflection: {
    height: 40,
    width: 40,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: "white",

  }
})

