import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import config from '../config.json';

import DateIcon from './DateIcon';

const ShiftLine = ({ shift }) => {
    return (
        <View style={styles.mainContainer}>
            <View style={{ ...styles.infoContainer, flex: 0, marginLeft: 0 }}>
                <Text
                    style={{
                        ...styles.jobIcon,
                        backgroundColor: config.colors[shift.job.color],
                    }}>
                    {shift.job.name[0]}
                </Text>
                <DateIcon date={shift.date} />
            </View>
            <View style={styles.infoContainer}>
                <Text style={styles.infoTxt}>{shift.length} hours</Text>
                <Text style={styles.infoTxt}>
                    {shift.pay} {shift.job.currency}
                </Text>
            </View>
        </View>
    );
};

export default ShiftLine;

const styles = StyleSheet.create({
    mainContainer: {
        marginTop: 5,
        marginBottom: 5,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    jobIcon: {
        width: 35,
        height: 35,
        color: '#ffffff',
        fontWeight: 'bold',
        fontSize: 25,
        textAlign: 'center',
        borderRadius: 10,
    },
    infoContainer: {
        marginLeft: 10,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        alignSelf: 'stretch',
        alignContent: 'stretch',
        flex: 1,
    },
    infoTxt: {
        fontSize: 22,
        fontWeight: 'bold',
    },
});
