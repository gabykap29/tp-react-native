import { View, StyleSheet, Button } from "react-native";
import AnimationSimple from "@/components/animations/animacionCarga";
import CardAnimated from "@/components/animations/CardAnimated";
import TitleAnimated from "@/components/animations/titleAnimated";

export default function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", backgroundColor: "black" }}>
      <TitleAnimated />
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
