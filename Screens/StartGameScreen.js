import {
  TextInput,
  View,
  StyleSheet,
  Alert,
  useWindowDimensions,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import { useState } from "react";

import PrimaryBotton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title";

import Colors from "../constants/Colors";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";

function StartGameScreen({ pickNumber }) {
  const [enteredNumber, setEnteredNumber] = useState("");

  const { width, height } = useWindowDimensions();

  function numberInputHandler(enteredText) {
    setEnteredNumber(enteredText);
  }

  function confirmInputHandler() {
    const chosenNumber = parseInt(enteredNumber);

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert("Invalid Number", "Number has to be between 1 to 99", [
        { text: "Okay", style: "destructive", onPress: resetInputHandler },
      ]);
      return;
    }

    console.log("Valid Number");
    pickNumber(chosenNumber);
  }

  function resetInputHandler() {
    setEnteredNumber("");
  }

  const topMarginDistance = height < 412 ? 30 : 100;

  return (
    <ScrollView style={styles.screen}>
      <KeyboardAvoidingView style={styles.screen} behavior="position">
        <View style={[styles.rootContainer, { marginTop: topMarginDistance }]}>
          <Title>Guess My Number</Title>
          <Card>
            <InstructionText>Enter a Number</InstructionText>
            <TextInput
              style={styles.inputNumber}
              maxLength={2}
              keyboardType="number-pad"
              autoCapitalize="none"
              onChangeText={numberInputHandler}
              value={enteredNumber}
            />
            <View style={styles.buttonsContainer}>
              <View style={styles.singleBtnContainer}>
                <PrimaryBotton onPress={resetInputHandler}>Reset</PrimaryBotton>
              </View>
              <View style={styles.singleBtnContainer}>
                <PrimaryBotton onPress={confirmInputHandler}>
                  Confirm
                </PrimaryBotton>
              </View>
            </View>
          </Card>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}

export default StartGameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  rootContainer: {
    flex: 1,
    marginTop: 100,
    alignItems: "center",
  },
  inputNumber: {
    height: 60,
    width: 50,
    fontSize: 32,
    marginVertical: 8,
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    color: Colors.accent500,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  singleBtnContainer: {
    flex: 1,
  },
});
