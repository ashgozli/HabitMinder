import { StyleSheet, View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomNavigator from "./components/BottomNavigator";
import Settings from "./screens/Settings";
import Login from "./screens/Login";
import Profile from "./screens/Profile";
import { Icon } from "react-native-elements";
import { MaterialCommunityIcons } from "@expo/vector-icons";
const Stack = createNativeStackNavigator();

function HeaderTitle({ navigation }) {
  return (
    <View
      style={{
        flexDirection: "row",
        marginRight: 15,
        backgroundColor: "black",
        marginTop: 10,
        padding: 10,
      }}
    >
      <View
        style={{
          justifyContent: "center",
          borderRadius: 100,
          backgroundColor: "#333333",
          padding: 10,
        }}
      >
        <MaterialCommunityIcons
          name="home"
          size={30}
          color="#ffffff"
          onPress={() => navigation.goBack()}
        />
      </View>
    </View>
  );
}

export default function App() {
  return (
    <SafeAreaView style={[styles.container]}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="Settings" component={Settings} />
          <Stack.Screen
            name="Profile"
            component={Profile}
            options={({ navigation }) => {
              return {
                header: () => <HeaderTitle navigation={navigation} />,
              };
            }}
          />
          <Stack.Screen
            name="Home"
            component={BottomNavigator}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
  },
});
