import { StyleSheet, Text, View, Dimensions, SafeAreaView } from "react-native";

import Lottie from "lottie-react-native";
import { TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { removeItem } from "../utils/asyncStroge";

const { width, height } = Dimensions.get("window");
const HomeScreen = () => {
  const navigation = useNavigation();

  const handleReset = async () => {
    await removeItem("onboarded");
    navigation.push("Onboarding");
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.lottie}>
        <Lottie
          style={{ flex: 1 }}
          source={require("../assets/animation/confetti.json")}
          autoPlay
          loop
        />
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate("Todo")}
        style={styles.addTaskButton}
      >
        <LinearGradient
          style={styles.addTaskButton}
          colors={["#00169a", "#ccb603"]}
        >
          <Text style={styles.addTaskText}>New Task, Who is In ?</Text>
        </LinearGradient>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleReset} style={styles.resetButton}>
        <LinearGradient
          style={styles.resetButton}
          colors={["#00169a", "#ccb603"]}
        >
          <Text style={styles.resetText}>Reset</Text>
        </LinearGradient>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fef3c7",
  },

  lottie: {
    width: width * 0.9,
    height: width,
  },

  addTaskButton: {
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
    marginTop: 20,
  },
  addTaskText: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
  },
  resetButton: {
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
    marginTop: 20,
  },

  resetText: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
  },
});
