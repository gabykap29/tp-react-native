import React, { useEffect } from "react";
import { View, StyleSheet, Text } from "react-native";
import { Button } from "react-native-paper";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  interpolateColor,
  withSpring,
  withTiming,
} from "react-native-reanimated";

// se define los tipos de las props que recibirá el componente TitleAnimated
interface TitleAnimatedProps {
  isVisible: boolean;
}

const TitleAnimated: React.FC<TitleAnimatedProps> = ({ isVisible }) => {
  // valor compartido para la posición vertical del título
  const translateY = useSharedValue(-100);

  // valor compartido para la opacidad del título
  const opacity = useSharedValue(0);

  // estilo animado para el título
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: withSpring(translateY.value) }],
      opacity: withTiming(opacity.value, { duration: 500 }),
    };
  });

  useEffect(() => {
    // si el título es visible, se desliza hacia abajo y se hace visible
    if (isVisible) {
      translateY.value = 0;
      opacity.value = 1;
    } else {
      // si no es visible, se desliza hacia arriba y se hace invisible
      translateY.value = -100;
      opacity.value = 0;
    }
  }, [isVisible]);

  return (
    <Animated.Text style={[styles.title, animatedStyle]}>
      Título Animado
    </Animated.Text>
  );
};

const HomeScreen: React.FC = () => {
  const isPressed = useSharedValue(0);
  const isTitleVisible = useSharedValue(true);

  const handlePress = () => {
    isPressed.value = isPressed.value === 0 ? 1 : 0;
    isTitleVisible.value = !isTitleVisible.value;
  };

  const containerStyle = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      isPressed.value,
      [0, 1],
      ["#000000", "#d3d3d3"]
    );

    return {
      backgroundColor,
    };
  });

  return (
    <Animated.View style={[styles.container, containerStyle]}>
      <TitleAnimated isVisible={isTitleVisible.value} />
      <View style={styles.buttonContainer}>
        <Button
          mode="contained"
          onPress={handlePress}
          style={styles.button}
          labelStyle={styles.buttonLabel}
        >
          Iniciar
        </Button>
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
  },
  title: {
    fontSize: 24,
    color: "#fff",
    marginBottom: 20,
  },
  buttonContainer: {
    width: "80%",
    alignItems: "center",
    marginTop: 20,
  },
  button: {
    width: "100%",
    paddingVertical: 10,
    borderRadius: 4,
  },
  buttonLabel: {
    fontSize: 16,
    color: "#fff",
  },
});

export default HomeScreen;
