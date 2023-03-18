import * as React from "react";
import { View, useWindowDimensions, Text } from "react-native";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import Overview from "../screens/Overview";
import Productivty from "../screens/Productivity";

const FirstRoute = () => (
  <View style={{ flex: 1, backgroundColor: "black" }}>
    <Overview />
  </View>
);

const SecondRoute = () => (
  <View style={{ flex: 1, backgroundColor: "black" }}>
    <Productivty />
  </View>
);

const renderTabBar = (props) => (
  <TabBar
    {...props}
    indicatorStyle={{ backgroundColor: "white" }}
    style={{ backgroundColor: "pink" }}
  />
);

export default function TabMenu() {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
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
