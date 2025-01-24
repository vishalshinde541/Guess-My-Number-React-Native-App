import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";

import StartGameScreen from "./Screens/StartGameScreen";
import GameScreen from "./Screens/GameScreen";
import Colors from "./constants/Colors";
import GameOverScreen from "./Screens/GameOverScreen";

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [isGameOver, setIsGameOver] = useState(true);
  const [numberOfRounds, setNumberOfRounds] = useState(0);

  useFonts({
    "sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
    "sans-regular": require("./assets/fonts/OpenSans-Regular.ttf"),
  });

  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber);
    setIsGameOver(false);
  }

  function gameOverHadler(gameRounds) {
    setIsGameOver(true);
    setNumberOfRounds(gameRounds);
  }

  function startNewGameHandler() {
    setIsGameOver(true);
    setUserNumber(null);
  }

  let screens = <StartGameScreen pickNumber={pickedNumberHandler} />;

  if (userNumber) {
    screens = (
      <GameScreen userNumber={userNumber} onGameOver={gameOverHadler} />
    );
  }

  if (isGameOver && userNumber) {
    screens = (
      <GameOverScreen
        numberOfRounds={numberOfRounds}
        userNumber={userNumber}
        onStartNewGame={startNewGameHandler}
      />
    );
  }

  return (
    <>
      <StatusBar style="light" />
      <LinearGradient
        colors={[Colors.primary700, Colors.accent500]}
        style={styles.rootView}
      >
        <ImageBackground
          source={require("./assets/images/background.png")}
          resizeMode="cover"
          style={styles.rootView}
          imageStyle={styles.backgroundImage}
        >
          <SafeAreaView style={styles.rootView}>{screens}</SafeAreaView>
        </ImageBackground>
      </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  rootView: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    opacity: 0.15,
  },
});
