import { StyleSheet, Text, View } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import { useCallback } from 'react';
import MainButton from './components/mainButton';


SplashScreen.preventAutoHideAsync();

export default function App() {

  const [fontsLoaded, fontError] = useFonts({
    "coop-Black": require("./assets/fonts/Cooper-Black.ttf"),
    "coop-BlackItalic": require("./assets/fonts/Cooper-BlackItalic.ttf"),
    "coop-Bold": require("./assets/fonts/Cooper-Bold.ttf"),
    "coop-BoldItalic": require("./assets/fonts/Cooper-BoldItalic.ttf"),
    "coop-ExtraBold": require("./assets/fonts/Cooper-ExtraBold.ttf"),
    "coop-ExtraBoldItalic": require("./assets/fonts/Cooper-ExtraBoldItalic.ttf"),
    "coop-Italic": require("./assets/fonts/Cooper-Italic.ttf"),
    "coop-Medium": require("./assets/fonts/Cooper-Medium.ttf"),
    "coop-MediumItalic": require("./assets/fonts/Cooper-MediumItalic.ttf"),
    "coop-Regular": require("./assets/fonts/Cooper-Regular.ttf"),
    "coop-SemiBold": require("./assets/fonts/Cooper-SemiBold.ttf"),
    "coop-SemiBoldItalic": require("./assets/fonts/Cooper-SemiBoldItalic.ttf"),
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
    <View style={styles.container} onLayout={onLayoutRootView}>
      <Text style={{ fontFamily: 'coop-SemiBoldItalic', fontSize: 30, lineHeight:35 }} >Memory master</Text>
      <MainButton color='#01FB1A' dark='#076511' fontFamily='coop-Black' fontsize={30} text='SINGLE GAME' onPress={() => console.log("hello")} textColor='#ffffff'></MainButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


