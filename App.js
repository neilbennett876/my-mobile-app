import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Stylesheet } from 'react-native';
import Counter from "./src/components/Counter.js"

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>🤔</Text>
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
    backgroundColor: "#ad0546",
    alignItems: 'center',
    justifyContent: 'center',
  },
});
