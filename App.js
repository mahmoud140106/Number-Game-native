import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,ImageBackground,SafeAreaView } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import GameOverScreen from './screens/GameOverScreen';
import {LinearGradient} from 'expo-linear-gradient'
import React, {useState } from 'react';
import GameScreen from './screens/GameScreen';
import Colors from './constants/Colors';
import { useFonts } from 'expo-font';
// import AppLoading from 'expo-app-loading';
import * as SplashScreen from 'expo-splash-screen';

export default function App() {

  const[userNumber,setUserNumber]=useState();
  const [gameIsOver,setGameIsOver]=useState(true);
  const [guessRounds,setGuessRounds]=useState(0);

  function pickedNumberHandler(pickedNumber){
    setUserNumber(pickedNumber);
    setGameIsOver(false)
  }
  function gameOverHandler(numberOfRounds){
    setGameIsOver(true);
    setGuessRounds(numberOfRounds);
  }
  function startNewGameHandler(){
    setUserNumber(null);
    setGuessRounds(0);
  }
  let screen =<StartGameScreen onPickNumber={pickedNumberHandler} />
  if(userNumber){
    screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />
  }

  if(gameIsOver&&userNumber){
    screen = <GameOverScreen roundNumber={guessRounds} userNumber={userNumber} onStartNewGame={startNewGameHandler} />
  }

  // const [fontsLoaded] = useFonts({
  //   'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
  //   'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  // });
  // if(!fontsLoaded){
  //   return <AppLoading />
  // }

  const [fontsLoaded] = useFonts({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  });
  
  if (!fontsLoaded) {
    SplashScreen.preventAutoHideAsync()
      .then(/* perform any asynchronous tasks you need */)
      .finally(() => SplashScreen.hideAsync());
    return null; // Return null instead of <AppLoading />
  }
  return (
    <>
    <StatusBar style='light' />
    <LinearGradient colors={[Colors.primaryRedCard,Colors.primaryYellow]} style={styles.rootScreen}>
      <ImageBackground 
      source={require('./assets/images/background.png')}
      // resizeMethod="cover"
      style={styles.rootScreen}
      imageStyle={styles.backgroundImg}
      >
        {/* <StartGameScreen /> */}
        <SafeAreaView style={styles.rootScreen}>
        {screen}
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex:1,
    // backgroundColor: '#ddb52f',
  },
  backgroundImg:{
    opacity:0.15,
  }
});
