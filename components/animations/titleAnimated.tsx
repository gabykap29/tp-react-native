import React from "react";
import { Text, View, StyleSheet } from "react-native";
import Animated, {
  useSharedValue,
  withTiming, // Importar withTiming para animación de opacidad
  useAnimatedStyle,
} from "react-native-reanimated";

// Define el tipo de las props que recibe el componente
interface TitleAnimatedProps {
  isVisible: boolean; // Prop para controlar la visibilidad del título
}

const TitleAnimated: React.FC<TitleAnimatedProps> = ({ isVisible }) => {
  // Valor compartido para la animación de opacidad
  const opacity = useSharedValue(1);

  // Define el estilo animado basado en la prop isVisible
  const animatedStyle = useAnimatedStyle(() => {
    return {
      // Controla la opacidad del título basado en isVisible
      opacity: withTiming(isVisible ? 1 : 0, {
        duration: 500, // Duración de la animación de desvanecimiento (500 ms)
      }),
      // Controla la animación de movimiento vertical (puede ser ajustado o eliminado)
      transform: [{ translateY: withTiming(0, { duration: 500 }) }],
    };
  }, [isVisible]); // Dependencia de isVisible para actualizar la animación

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.titleContainer, animatedStyle]}>
        <Text style={styles.title}>¡Bienvenido a la aplicación!</Text>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  titleContainer: {},
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
});

export default TitleAnimated;
