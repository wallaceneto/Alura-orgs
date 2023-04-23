import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
// views
import Home from './src/views/Home';

function App() {
  return <SafeAreaView style={estilos.tela}>
    <Home />
  </SafeAreaView>
}

const estilos = StyleSheet.create({
  tela: {
    flex: 1,
  },
});

export default App;