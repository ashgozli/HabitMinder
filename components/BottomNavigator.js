import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import Habits from "../screens/Habits";
import AddHabits from "../screens/AddHabits";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import TopNavigator from "./TopNavigator";
import { SafeAreaProvider } from "react-native-safe-area-context";

const Tab = createMaterialBottomTabNavigator();

const BottomNavigator = () => {
  return (
    <SafeAreaProvider>
      <TopNavigator />
      <Tab.Navigator
        labeled={false}
        initialRouteName="HomeScreen"
        inactiveColor="#ffffff"
        barStyle={{ backgroundColor: "#000000" }}
      >
        <Tab.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            tabBarLabel: "Home",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Add"
          component={AddHabits}
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
          component={Habits}
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
    </SafeAreaProvider>
  );
};

export default BottomNavigator;
