import { View, Text, Button, StyleSheet } from "react-native";
import  {useState} from 'react'

export default function Counter() {
    const [count, setCount] = useState(0)
    return(
        <View style={styles.counterContainer}>
            <Text style={styles.counterText}>You clicked the button {count} times</Text>
            <Button style={styles.counterButton} title="Plus" onPress={() => setCount(count +1)}/>
            <Button title="Minus" onPress={() => setCount(count -1)}/>
            <Button title="Reset" onPress={() => setCount(0)}/>
        </View>
    )
}

const styles = StyleSheet.create({
    counterContainer: {
        width: "50%",
        margin: 14,
        padding: 14,
        borderRadius: 15,
        borderWidth: 1,
        top: '15%'

    },
    counterText: {
        fontSize: 30,
        textAlign: "center",
    },
    counterButton: {
        backgroundColor: '#ff0089'
    }

})
