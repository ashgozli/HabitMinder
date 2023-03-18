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

const AddHabits = () => {
  const [title, setTitle] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [days, setDays] = useState([]);

  const handleFormSubmit = async () => {
    console.log("title", title);
    console.log("startDate", startDate);
    console.log("endDate", endDate);
    console.log("selectedDays", days);

    console.log("Document written with ID: ", docRef.id);
    setTitle("");
    setStartDate("");
    setEndDate("");
    setDays([]);
  };

  const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  return (
    <ScrollView>
      <View className="flex-1 bg-black">
        <View className="mt-2 p-4 px-8">
          {/* Step 1: Add "Habits Start" and "Here." texts */}
          {/* ... */}
        </View>
        <View className="flex flex-col justify-center items-center">
          {/* Step 2: Add Title of Your Habit Text and TextInput */}
          {/* ... */}

          {/* Step 3: Add Start Date Text and TextInput */}
          {/* ... */}

          {/* Step 4: Add End Date Text and TextInput */}
          {/* ... */}

          {/* Step 5: Add Habit Frequency Text and WeekdayButtons component */}
          {/* ... */}

          {/* Step 6: Add "Let's Do It!" Button */}
          {/* ... */}

          {/* Step 7: Add "I am Not Ready Yet!" Button */}
          {/* ... */}
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
