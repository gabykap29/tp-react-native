import Animated, {
  useSharedValue,
  withSpring,
  useAnimatedStyle,
} from "react-native-reanimated";
import { Button, View } from "react-native";

const AnimationSimple = () => {
  const width = useSharedValue(100);

  const handlePress = () => {
    width.value =
      width.value < 400 ? withSpring(width.value + 50) : withSpring(100);
  };

  const animatedStyle = useAnimatedStyle(() => {
    return {
      width: width.value,
    };
  });

  return (
    <>
      <View>
        <Animated.View
          style={[
            animatedStyle,
            {
              height: 100,
              backgroundColor: "violet",
            },
          ]}
        />
      </View>
      <View style={{ marginTop: 20 }}>
        <Button title="Click" onPress={handlePress} />
      </View>
    </>
  );
};

export default AnimationSimple;
