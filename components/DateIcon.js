import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

import config from '../config.json';

const DateIcon = ({ date }) => {
    const dateUnix = new Date(Date.parse(date));
    console.log(config.colors[dateUnix.getDay()]);
    return (
        <View
            style={{
                ...styles.mainContainer,
                backgroundColor: config.colors[dateUnix.getDay()],
            }}>
            <Text
                style={{
                    fontWeight: 'bold',
                    fontSize: 11,
                    textAlign: 'center',
                }}>
                {config.monthNames[dateUnix.getMonth()]}
            </Text>
            <Text
                style={{
                    fontWeight: 'bold',
                    fontSize: 11,
                    textAlign: 'center',
                }}>
                {dateUnix.getDate()}
            </Text>
        </View>
    );
};

export default DateIcon;

const styles = StyleSheet.create({
    mainContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        width: 35,
        height: 35,
        borderRadius: 10,
        marginLeft: 5,
    },
});
