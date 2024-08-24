import React, { useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { Button } from "react-native-paper";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  interpolateColor,
  withSpring,
  withTiming,
} from "react-native-reanimated";

// Se definen los tipos de las props que recibirá el componente TitleAnimated
interface TitleAnimatedProps {
  isVisible: boolean;
}

const TitleAnimated: React.FC<TitleAnimatedProps> = ({ isVisible }) => {
  // Valor compartido para la posición vertical del título
  const translateY = useSharedValue(-100);

  // Valor compartido para la opacidad del título
  const opacity = useSharedValue(0);

  // Estilo animado para el título
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: withSpring(translateY.value) }],
      opacity: withTiming(opacity.value, { duration: 2000 }), 
    };
  });

  useEffect(() => {
    if (isVisible) {
      // si el título es visible, se deliza hacia abajo y hazlo visible
      translateY.value = 0;
      opacity.value = 1;
    } else {
      // si no es visible, se deliza hacia arriba y desvanece lentamente
      translateY.value = -100;
      opacity.value = 0;
    }
  }, [isVisible, translateY, opacity]);

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
    const backgroundColor = withTiming(
      isPressed.value === 0 ? "#000000" : "#d3d3d3",
      { duration: 2000 } // se ajusta la duración para que la transición sea suave
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
    width: "100%",
    position: "absolute",
    bottom: 20,
    alignItems: "center",
  },
  button: {
    width: "80%",
    paddingVertical: 10,
    borderRadius: 4,
  },
  buttonLabel: {
    fontSize: 16,
    color: "#fff",
  },
});

export default HomeScreen;
