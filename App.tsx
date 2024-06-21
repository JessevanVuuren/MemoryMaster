import { Button, Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import { useCallback } from 'react';
import MainButton from './components/mainButton';


SplashScreen.preventAutoHideAsync();

export default function App() {

  const [fontsLoaded, fontError] = useFonts({
    "LilitaOne-Regular": require("./assets/fonts/LilitaOne-Regular.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <ImageBackground source={require("./assets/images/background_yellow.png")} resizeMode='cover' style={styles.container} onLayout={onLayoutRootView}>
      
      <View style={styles.images}>
        <Image style={[styles.backCard, styles.secondCard]} source={require("./assets/images/backCard.png")} />
        <Image style={styles.backCard} source={require("./assets/images/backCard.png")} />
      </View>

      <View style={styles.buttons}>
        <MainButton color='#01FB1A' dark='#076511' fontFamily='LilitaOne-Regular' fontsize={30} text='SINGLE GAME' onPress={() => console.log("hello")} textColor='#ffffff'></MainButton>
      </View>
    </ImageBackground>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',

  },
  images: {
    marginTop: 100,
  },
  backCard: {
    height: 300,
    resizeMode: "contain"
  },
  secondCard: {
    position:"absolute",
    transform:[{rotate:"-15deg"}]
  },
  buttons: {
    marginTop:50,
  }
});


