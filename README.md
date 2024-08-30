# Animación en React Native

## Descripción

Esta aplicación muestra cómo implementar animaciones en React Native utilizando la librería `react-native-reanimated`. El proyecto presenta un título animado que se desliza hacia abajo desde la parte superior de la pantalla y se desvanece cuando el usuario presiona un botón. Además, el fondo de la pantalla cambia de color como parte de la animación.

## Tecnologías Utilizadas

- **React Native**: Framework para construir aplicaciones móviles utilizando JavaScript y React.
- **react-native-reanimated**: Librería para animaciones avanzadas en React Native.
- **react-native-paper**: Librería de componentes de UI que sigue las guías de Material Design.

## Instalación

Para instalar y ejecutar la aplicación localmente, sigue estos pasos:

1. **Clona el repositorio**:

    ```bash
    git clone https://github.com/tu_usuario/tu_repositorio.git
    ```

2. **Navega al directorio del proyecto**:

    ```bash
    cd tu_repositorio
    ```

3. **Instala las dependencias**:

    ```bash
    npm install
    ```

    o

    ```bash
    yarn install
    ```

4. **Instala las dependencias específicas de `react-native-reanimated`**:

    ```bash
    npm install react-native-reanimated
    ```

    o

    ```bash
    yarn add react-native-reanimated
    ```

5. **Ejecuta el proyecto en tu simulador/emulador**:

    ```bash
    npm start
    ```

    o

    ```bash
    yarn start
    ```

## Funcionalidades

1. **Título Animado**: Un título que se desliza desde la parte superior de la pantalla y se desvanece cuando el usuario presiona un botón.
2. **Cambio de Color de Fondo**: El fondo de la pantalla cambia de color al presionar el botón, como parte de la animación.

## Código

El código principal se encuentra en el archivo `HomeScreen.tsx` e incluye:

- **TitleAnimated Component**: 
  - **Animaciones**: Desliza el título hacia abajo desde la parte superior y ajusta su opacidad.
- **HomeScreen Component**:
  - **Estado**: Controla la visibilidad del título y el color de fondo mediante animaciones.
  - **Botón**: Cambia el estado del título y el color de fondo al ser presionado.

## Uso

1. Al iniciar la aplicación, el título aparece deslizado desde la parte superior y visible.
2. Al presionar el botón "Iniciar", el título se desvanece y el fondo cambia de color.



