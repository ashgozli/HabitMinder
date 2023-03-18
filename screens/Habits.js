import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import HabitListCard from "../components/HabitListCard";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { ScrollView } from "react-native";

const Habits = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [data, setData] = useState([]);

  const handleSearch = (text) => {
    setSearchTerm(text);
    console.log("searching");
  };

  return (
    <ScrollView>
      <View className="flex-1 bg-black">
        {/* Step 1: Display the title "Habit Hub" */}
        
        {/* Step 2: Create a search bar with TextInput and AntDesign icons */}
        
        {/* Step 3: Add filter buttons for "All" and "Favorites" using TouchableOpacity */}
        
        {/* Step 4: Render predefined HabitListCard components */}
        
        {/* Step 5: Use data.map to render HabitListCards from data */}
        
      </View>
    </ScrollView>
  );
};

export default Habits;
