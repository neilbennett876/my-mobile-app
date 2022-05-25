import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View} from 'react-native';
import Hero from "./src/components/Hero.js"
import Counter from "./src/components/Counter.js"

export default function App() {
  return (
    <View style={styles.container}>
      <Hero />
      <Counter />
      <StatusBar style="auto" />
    </View>
  );
}



const styles = StyleSheet.create({

heading: {
  fontSize: 38,
  color: '#fff'
},
container: {
    flex: 1,
    backgroundColor: "#bae6bf",
    alignItems: 'center',
    justifyContent: 'center'
  },
});
