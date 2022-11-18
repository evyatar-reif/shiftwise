import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const ColorIcon = ({ color, size, borderWidth }) => {
    return (
        <View
            style={{
                backgroundColor: color,
                height: size,
                width: size,
                borderRadius: 25,
                marginRight: 15,
                borderWidth: borderWidth,
            }}></View>
    );
};

export default ColorIcon;
