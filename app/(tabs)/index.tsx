import React from "react";
import { View, StyleSheet } from "react-native";
import { Button } from "react-native-paper";
import TitleAnimated from "@/components/animations/titleAnimated";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  interpolateColor,
  withSpring,
} from "react-native-reanimated";

export default function HomeScreen() {
  // Variable compartida que controla el estado de presión del botón (0 o 1)
  const isPressed = useSharedValue(0);

  // Función llamada al presionar el botón
  const handlePress = () => {
    // Alterna el valor de isPressed entre 0 y 1
    isPressed.value = isPressed.value === 0 ? 1 : 0;
  };

  // Define el estilo animado basado en el valor de isPressed
  const containerStyle = useAnimatedStyle(() => {
    // Interpola el color basado en el valor de isPressed
    const backgroundColor = interpolateColor(
      isPressed.value, // Valor de isPressed (0 o 1)
      [0, 1], // Rango de valores de isPressed
      ["#000000", "#d3d3d3"], // Negro a gris
    );

    // Interpola la opacidad basado en el valor de isPressed
    const opacity = withSpring(isPressed.value === 0 ? 1 : 0.5, {
      damping: 2, // Controla el "rebote" de la animación
      stiffness: 100, // Controla la rapidez de la animación
    });

    return {
      backgroundColor, // Devuelve el color interpolado como parte del estilo
      opacity, // Devuelve la opacidad interpolada
    };
  });

  return (
    <Animated.View style={[styles.container, containerStyle]}>
      <TitleAnimated />

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
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black", // Color de fondo inicial (será reemplazado por la animación)
  },
  buttonContainer: {
    width: "80%", // Ajusta el ancho del contenedor del botón
    alignItems: "center",
    marginTop: 20,
  },
  button: {
    width: "100%", // Ocupa todo el ancho disponible
    paddingVertical: 10, // Agrega padding vertical
    borderRadius: 4, // Redondea los bordes del botón
  },
  buttonLabel: {
    fontSize: 16, // Tamaño del texto en el botón
    color: "#fff", // Color del texto en el botón
  },
});
