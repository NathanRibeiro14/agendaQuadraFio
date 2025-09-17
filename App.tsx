import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Inicio from './src/pages/inicio';
import Partedois from './src/pages/partedois';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Partedois />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
