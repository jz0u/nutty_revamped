import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Friday, May 29</Text>
      <Text>1,240 / 2,000 kcal</Text>
      <View>
        <Text>Protein 64 / 150g</Text>
        <Text>Carbs 120 / 200g</Text>
        <Text>Fat 40 / 65g</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
