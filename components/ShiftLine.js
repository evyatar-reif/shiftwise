import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const ShiftLine = ({ shift }) => {
    return (
        <View>
            <Text>{shift.startTime}</Text>
        </View>
    );
};

export default ShiftLine;

const styles = StyleSheet.create({});
