import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

import CheckMark from '../assets/Icons/CheckMark';

const JobLine = ({ job, isSelected }) => {
    return (
        <View style={styles.container}>
            <View style={styles.iconContainer}>
                <View style={{ width: 25 }}>{isSelected && <CheckMark />}</View>
                <View
                    style={{
                        backgroundColor: job.color,
                        height: 25,
                        width: 25,
                        borderRadius: 25,
                        marginRight: 15,
                    }}></View>
            </View>
            <Text style={styles.txt}>{job.name}</Text>
        </View>
    );
};

export default JobLine;

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        paddingRight: 10,
        paddingLeft: 10,
        alignItems: 'center',
        borderBottomWidth: 1,
        borderTopWidth: 1,
        width: 200,
    },
    iconContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    txt: {
        fontWeight: 'bold',
        fontSize: 20,
    },
});
