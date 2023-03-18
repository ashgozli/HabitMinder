import * as React from "react";
import { View, useWindowDimensions, Text } from "react-native";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import Overview from "../screens/Overview";
import Productivty from "../screens/Productivity";

// Create a function to render the Overview screen
const FirstRoute = () => (
  <View style={{ flex: 1, backgroundColor: "black" }}>
    <Overview />
  </View>
);

// Create a function to render the Productivity screen
const SecondRoute = () => (
  <View style={{ flex: 1, backgroundColor: "black" }}>
    <Productivty />
  </View>
);

export default function TabMenu() {
  // Set the initial index of the tab view to 0
  const [index, setIndex] = React.useState(0);

  // Create an array of routes for the tab view
  const [routes] = React.useState([
    { key: "first", title: "Overview" },
    { key: "second", title: "Productivty" },
  ]);
  return (
    <TabView
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={SceneMap({
        first: FirstRoute,
        second: SecondRoute,
      })}
      swipeEnabled={false}
      renderTabBar={(props) => (
        <TabBar
          {...props}
          indicatorStyle={{
            backgroundColor: "white",
          }}
          style={{
            backgroundColor: "#1E90FF",
            borderRadius: 100,
            marginHorizontal: 20,
            overflow: "hidden",
          }}
        />
      )}
    />
  );
}
