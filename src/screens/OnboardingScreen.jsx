import { Dimensions, StyleSheet, Text, View } from "react-native";
import Onboarding from "react-native-onboarding-swiper";
import Lottie from "lottie-react-native";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";
import { setItem } from "../utils/asyncStroge";

const { width, height } = Dimensions.get("window");

const OnboardingScreen = () => {
  const navigation = useNavigation();

  const handleDone = () => {
    navigation.navigate("Home");
    setItem("onboarding", "1");
  };

  const doneButton = ({ ...props }) => {
    return (
      <TouchableOpacity style={styles.doneButton} {...props}>
        <Text>Done</Text>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
      <Onboarding
        onDone={handleDone}
        onSkip={handleDone}
        DoneButtonComponent={doneButton}
        containerStyles={{ paddingHorizontal: 15 }}
        pages={[
          {
            backgroundColor: "#a7f3d0",
            image: (
              <View style={styles.lottie}>
                <Lottie
                  style={{ flex: 1 }}
                  source={require("../assets/animation/boost.json")}
                  autoPlay
                  loop
                />
              </View>
            ),
            title: "Boost Your Productivity",
            subtitle: "Join our Udemig courses to enhance your skills!",
          },
          {
            backgroundColor: "#fef3ce",
            image: (
              <View style={styles.lottie}>
                <Lottie
                  style={{ flex: 1 }}
                  source={require("../assets/animation/achieve.json")}
                  autoPlay
                  loop
                />
              </View>
            ),
            title: "Work Without Interruption",
            subtitle:
              "Complete your tasks smoothly with our productivity tips.",
          },
          {
            backgroundColor: "#a78bfa",
            image: (
              <View style={styles.lottie}>
                <Lottie
                  style={{ flex: 1 }}
                  source={require("../assets/animation/work.json")}
                  autoPlay
                  loop
                />
              </View>
            ),
            title: "Reach Higher Goals",
            subtitle:
              "Utilize our platform to achieve your professional aspirations.",
          },
        ]}
      />
    </View>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  lottie: {
    width: width * 0.9,
    height: width,
  },
  doneButton: {
    padding: 20,
  },
});
