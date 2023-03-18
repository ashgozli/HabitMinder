import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import WeekdayButtons from "../components/WeekdayButtons";
import { Button } from "react-native-elements";
// Import the necessary Firebase and Firestore libraries

const AddHabits = () => {
  const [title, setTitle] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [days, setDays] = useState([]);

  /* Create a function to handle form submission, and use Firestore methods to add the habit to the database */
  const handleFormSubmit = async () => {
    console.log("title", title);
    console.log("startDate", startDate);
    console.log("endDate", endDate);
    console.log("selectedDays", days);
    // Write your firestore function here
  };

  const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  return (
    <ScrollView>
      <View className="flex-1 bg-black">
        <View className="mt-2 p-4 px-8">
          <Text className="font-bold text-[40px] text-white">Habits Start</Text>
          <Text className="font-bold text-[40px] text-white">Here.</Text>
        </View>
        <View className="flex flex-col justify-center items-center">
          <Text className="font-bold text-base self-start ml-12 mt-2 text-white">
            Title of Your Habit:
          </Text>
          <TextInput
            style={{
              borderColor: "white",
              borderWidth: 1,
              borderRadius: 20,
              width: "80%",
              height: 50,
              paddingLeft: 20,
              color: "white",
            }}
            placeholder="Ex. Read Book"
            placeholderTextColor="grey"
            value={title}
            onChangeText={(title) => {
              setTitle(title);
            }}
          />
          <Text className="font-bold text-base self-start ml-12 mt-2 text-white">
            Start Date:
          </Text>
          <TextInput
            style={{
              borderColor: "white",
              borderWidth: 1,
              borderRadius: 20,
              width: "80%",
              height: 50,
              paddingLeft: 20,
              color: "white",
            }}
            value={startDate}
            onChangeText={(startDate) => {
              setStartDate(startDate);
            }}
          />
          <Text className="font-bold text-base self-start ml-12 mt-2 text-white">
            End Date:
          </Text>
          <TextInput
            style={{
              borderColor: "white",
              borderWidth: 1,
              borderRadius: 20,
              width: "80%",
              height: 50,
              paddingLeft: 20,
              color: "white",
            }}
            value={endDate}
            onChangeText={(endDate) => {
              setEndDate(endDate);
            }}
          />
          <Text className="font-bold text-base self-start ml-12 mt-2 text-white">
            Habit Frequency:
          </Text>
          <View className="justify-center items-center">
            <WeekdayButtons days={days} setDays={setDays} />
          </View>
          {/* <Button className="bg-blue-500 hover:bg-blue-700 py-6 px-3 mt-5 rounded-full">
          Let's Do It!
        </Button> */}
          <Button
            className="mt-3"
            title="Let's Do It!"
            buttonStyle={{
              borderColor: "#1E90FF",
              backgroundColor: "#1E90FF",
              borderRadius: 100,
              paddingVertical: 15,
            }}
            type="outline"
            titleStyle={{ color: "white" }}
            containerStyle={{
              width: 280,
              marginHorizontal: 60,
              marginVertical: 15,
            }}
            onPress={handleFormSubmit}
          />
          <Button
            className="w-full"
            title="I am Not Ready Yet!"
            buttonStyle={{
              borderColor: "#1E90FF",
              backgroundColor: "#1E90FF",
              borderRadius: 100,
              paddingVertical: 15,
            }}
            type="outline"
            titleStyle={{ color: "white" }}
            containerStyle={{
              width: 280,
              marginHorizontal: 60,
              marginVertical: 5,
            }}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default AddHabits;
