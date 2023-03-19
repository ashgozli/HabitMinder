import { Avatar } from "react-native-elements";
import React, { useState } from "react";
import { View, Text, Switch } from "react-native";
import { Button } from "react-native-elements";
import { auth } from '../firebase'

function Profile({ navigation }) {
  const [isEnabled, setIsEnabled] = useState(false);
  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace("Login")
      })
      .catch(error => alert(error.message))
  }
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  return (
    <View className="flex-1 items-center px-8 bg-black">
      <Avatar
        rounded
        size="xlarge"
        marginVertical={10}
        source={{
          uri: "https://ichef.bbci.co.uk/news/976/cpsprodpb/B7F6/production/_128049074_muskgetty.png",
        }}
      />
      <Text className="font-extrabold text-[40px] text-white">Elon Musk</Text>
      <Text className="text-sm text-zinc-300 mb-4">elonmusk@tesla.com</Text>
      <View className="flex flex-col px-8 py-2 m-4 rounded-md">
        <Text className="text-sm text-left text-zinc-300 mb-2">
          Notificaitons
        </Text>
        <View className="flex flex-row items-center bg-[#333333] px-8 py-2 rounded-md">
          <Text className="text-white text-md mx-4">Turn on Notificaitons</Text>
          <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={isEnabled ? "#ffffff" : "#5674fd"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
      </View>
      <Button
        className="mt-48"
        onPress={handleSignOut}
        title="Log Out"
        buttonStyle={{
          borderColor: "#d04344",
          backgroundColor: "#d04344",
          borderRadius: 100,
          paddingVertical: 15,
        }}
        type="outline"
        titleStyle={{ color: "white", marginHorizontal: 20 }}
        containerStyle={{
          width: 200,
          marginHorizontal: 50,
          marginVertical: 10,
        }}
      />
    </View>
  );
}

export default Profile;
