import React, { useState } from "react";
import { View, TouchableOpacity, Text } from "react-native";

const WeekdayButtons = ({ days, setDays }) => {
  // Step 1: Implement handleItemSelect function
  // The function should check if the selected day is in the 'days' array
  // If it is, remove it from the array
  // If it's not, add it to the array

  // Step 2: Create an array called 'daysArray' containing objects with 'label' and 'value' properties for each day of the week

  // Step 3: Create a variable called 'schedule' containing an array of the weekdays as strings

  return (
    <View className="flex-row justify-between w-1/2">
      {/* Step 4: Use the 'map' function to loop through the 'schedule' array and create a TouchableOpacity for each day */}
      {/* Step 5: Set the background color of the TouchableOpacity based on whether the day is in the 'days' array */}
      {/* Step 6: Add an 'onPress' event to the TouchableOpacity that calls the 'handleItemSelect' function with the day as an argument */}
    </View>
  );
};

export default WeekdayButtons;
