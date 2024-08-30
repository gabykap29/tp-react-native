import React, { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import { Button, Text as PaperText } from "react-native-paper"; // importa componentes de react-native-paper para el botón y el texto
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withTiming,
} from "react-native-reanimated"; // importa herramientas de react-native-reanimated para animaciones

// se definen los tipos de las props que recibirá el componente TitleAnimated
interface TitleAnimatedProps {
  isVisible: boolean; // propiedad booleana para controlar la visibilidad del título
}

const TitleAnimated: React.FC<TitleAnimatedProps> = ({ isVisible }) => {
  // valor compartido para la posición vertical del título
  const translateY = useSharedValue(-100); // inicializa la posición vertical fuera de la vista

  // vvalor compartido para la opacidad del título
  const opacity = useSharedValue(0); // inicializa la opacidad como 0 (invisible)

  // estilo animado para el título
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: withSpring(translateY.value) }], // aplica una animación de resorte a la posición vertical
      opacity: withTiming(opacity.value, { duration: 500 }), // aplica una animación de tiempo a la opacidad
    };
  });

  useEffect(() => {
    if (isVisible) {
      // si el título es visible, se deliza hacia abajo y hazlo visible
      translateY.value = 0; // Ajusta la posición vertical a 0
      opacity.value = 1; // Ajusta la opacidad a 1 (visible)
    } else {
      // si no es visble, se deliza hacia arriba y desvanece lentamente
      translateY.value = -100; // ajusta la posición vertical fuera de la vista
      opacity.value = 0; // ajusta la opacidad a 0 (invisible)
    }
  }, [isVisible, translateY, opacity]); // dependencias del efecto para que se ejecute cuando cambie isVisible

  return (
    <Animated.View style={animatedStyle}> 
      <PaperText style={styles.title}> 
        Título
      </PaperText>
    </Animated.View>
  );
};

const HomeScreen: React.FC = () => {
  const [isTitleVisible, setTitleVisible] = useState(true);// vlor compartido para controlar la visibilidad del título
  const isPressed = useSharedValue(0); // valor compartido para controlar si el botón ha sido presionado
   

  const handlePress = () => {
    isPressed.value = isPressed.value === 0 ? 1 : 0; // alterna entre 0 y 1 para el estado del botón
    isTitleVisible ? setTitleVisible(false): setTitleVisible(true)
  };

  // estilo animado para el contenedor basado en el estado del botón
  const containerStyle = useAnimatedStyle(() => {
    const backgroundColor = withTiming(
      isPressed.value === 0 ? "#000000" : "#fff", // cambia el color de fondo entre negro y blanco
      { duration: 500 } // duración de la transición de color de fondo
    );

    return {
      backgroundColor,
    };
  });

  return (
    <Animated.View style={[styles.container, containerStyle]}> 
        {isTitleVisible && <TitleAnimated isVisible={isTitleVisible} />} 
      <View style={styles.buttonContainer}>
        <Button
          mode="contained"
          onPress={handlePress} // maneja el evento de presionar el botón
          style={styles.button}
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
    color: "#E4080A", 
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
  },
});

export default HomeScreen;
