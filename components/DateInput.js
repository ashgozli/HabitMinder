import React from 'react';
import { View, Text, TextInput } from 'react-native';

const DateInput = (props) => {
    return (
        <TextInput 
            style={{ borderColor: "white", borderWidth: 1, borderRadius: 20, width: "80%", height: 50 }} 
            type='date' 
        />
    );
  };
  
  export default DateInput;