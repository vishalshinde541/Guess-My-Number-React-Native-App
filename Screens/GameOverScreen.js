import { View, Image, StyleSheet, Text } from "react-native";
import Title from "../components/ui/Title";
import Colors from "../constants/Colors";
import PrimaryBotton from "../components/ui/PrimaryButton";

function GameOverScreen({ numberOfRounds, userNumber, onStartNewGame }) {
  return (
    <View style={styles.rootContainer}>
      <Title>GAME OVER!</Title>
      <View style={styles.imgContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/success.png")}
        />
      </View>
      <Text style={styles.summaryText}>
        Your phone needed{" "}
        <Text style={styles.heighlightText}>{numberOfRounds}</Text> round to
        guess the number
        <Text style={styles.heighlightText}>{userNumber}</Text>.
      </Text>
      <PrimaryBotton onPress={onStartNewGame}>Start New Game</PrimaryBotton>
    </View>
  );
}

export default GameOverScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    paddingTop: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  imgContainer: {
    width: 300,
    height: 300,
    margin: 36,
    borderRadius: 150,
    borderWidth: 2,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  summaryText: {
    fontFamily: "sans-regular",
    fontSize: 24,
    textAlign: "center",
    marginBottom: 24,
  },
  heighlightText: {
    fontFamily: "sans-bold",
    color: Colors.primary500,
  },
});
