import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { } from "react"
import { Fonts } from "../types/fonts";

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

  return (
    <TouchableOpacity style={[{ backgroundColor: props.color }, styles.button]} onPress={props.onPress}>
      <Text style={[{ color: props.textColor, fontSize: props.fontsize, fontFamily: props.fontFamily }]}>{props.text}</Text>
      <View style={[{ backgroundColor: props.dark }, styles.dark]}></View>
    </TouchableOpacity>
  )
}

export default MainButton


const styles = StyleSheet.create({
  container: {

  },
  button: {

  },
  dark: {

  }
})

