import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import Habits from "../screens/Habits";
import AddHabits from "../screens/AddHabits";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import TopNavigator from "./TopNavigator";
import { SafeAreaProvider } from "react-native-safe-area-context";

// create a BottomTabNavigator
const Tab = createMaterialBottomTabNavigator();

const BottomNavigator = () => {
  return (
    <>
      <TopNavigator />
      <Tab.Navigator
        labeled={false}
        initialRouteName="HomeScreen"
        inactiveColor="#ffffff"
        barStyle={{ backgroundColor: "#000000" }}
      >
        <Tab.Screen
          name="HomeScreen"
          // Step 1. Render the HomeScreen component
          options={{
            tabBarLabel: "Home",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Add"
          // Step 2. Render the AddHabits component
          options={{
            tabBarLabel: "Add Habit",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons
                name="plus-circle-outline"
                color={color}
                size={26}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Habits"
          // Step 3. Render the Habits component
          options={{
            tabBarLabel: "Habits",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons
                name="format-list-checks"
                color={color}
                size={26}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </>
  );
};

export default BottomNavigator;
