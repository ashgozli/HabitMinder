import { StyleSheet, View, Text } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
const Stack = createNativeStackNavigator();

// STEP 1: Define a functional component called HeaderTitle that accepts navigation object as a parameter
function HeaderTitle({ navigation }) {
  return (
    // STEP 2: Define a View component with style object containing inline styling
    <View>
      {/* STEP 3: Define another View component with style object containing inline styling */}
      <View>
        {/* STEP 4: Use MaterialCommunityIcons component from "@expo/vector-icons" package with onPress prop that calls navigation.goBack() when clicked */}
      </View>
    </View>
  );
}

export default function App() {
  return (
    // STEP 5: Define a SafeAreaView component with style object containing inline styling
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
          <Text className="text-4xl text-white">Habit Minder!</Text>
          {/* STEP 6: Use NavigationContainer component from "@react-navigation/native" package */}
          {/* STEP 7: Use createNativeStackNavigator function from "@react-navigation/native-stack" package */}
          {/* STEP 8: Define a Stack.Screen component with name prop set to "Login" and component prop set to Login */}
          {/* STEP 9: Use options prop with headerShown set to false */}
          {/* STEP 10: Define a Stack.Screen component with name prop set to "Settings" and component prop set to Settings */}
          {/* STEP 11: Define a Stack.Screen component with name prop set to "Profile" and component prop set to Profile */}
          {/* STEP 12: Use options prop with a function that returns an object with header prop set to a function that returns HeaderTitle component */}
          {/* STEP 13: Define a Stack.Screen component with name prop set to "Home" and component prop set to BottomNavigator */}
          {/* STEP 14: Use options prop with headerShown set to false */}
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

// STEP 15: Define a StyleSheet object containing a container property with inline styling

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000000",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
  },
});
