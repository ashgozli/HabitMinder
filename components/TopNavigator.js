import { StyleSheet, View } from "react-native";
import { Button, Avatar } from "react-native-elements";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const TopNavigator = () => {
  const navigation = useNavigation();
  return (
    <View className="flex flex-row justify-between p-4 bg-black">
      <Button
        type="clear"
        icon={<MaterialCommunityIcons name="cog" color={"white"} size={40} />}
        onPress={() => navigation.navigate("Settings")}
      />
      <Avatar
        rounded
        size="medium"
        marginVertical={10}
        source={{
          uri: "https://ichef.bbci.co.uk/news/976/cpsprodpb/B7F6/production/_128049074_muskgetty.png",
        }}
        onPress={() => navigation.navigate("Profile")}
      />
    </View>
  );
};

export default TopNavigator;

const styles = StyleSheet.create({});
