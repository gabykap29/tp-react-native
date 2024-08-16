import React, { useEffect } from "react";
import { Text, View, StyleSheet } from "react-native";
import Animated, {
  useSharedValue,
  withSpring,
  useAnimatedStyle,
} from "react-native-reanimated";

const TitleAnimated = () => {
  // valor inicial de la animación
  const translateY = useSharedValue(-100);

  //  estilo animado
  const animatedStyle = useAnimatedStyle(() => {
    return {
      // transforma el componente en el eje Y
      transform: [{ translateY: translateY.value }],
    };
  });

  // Inicia la animación al cargar el componente
  useEffect(() => {
    // animación con rebote al valor 0 en el eje Y, con el withSpring se puede configurar la animación para que tenga un rebote
    translateY.value = withSpring(0, { damping: 2, stiffness: 100 });
  }, []);

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
