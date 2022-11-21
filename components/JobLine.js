import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

import config from '../config.json';

import CheckMark from '../assets/Icons/CheckMark';
import ColorIcon from '../components/ColorIcon';

const JobLine = ({ job, isSelected, selectedStyle }) => {
    return (
        <View
            style={{
                ...styles.container,
                backgroundColor: isSelected ? '#72777A' : 'transparent',
            }}>
            <View style={styles.container}>
                <ColorIcon
                    color={config.colors[job.color]}
                    size={35}
                />
                <Text style={styles.txt}>{job.name}</Text>
            </View>
            <View style={styles.container}>
                <Text style={styles.txt}>{job.pay}/h </Text>
                <Text style={styles.txt}>{job.currency}</Text>
            </View>
        </View>
    );
};

export default JobLine;

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between',
        alignContent: 'center',
        display: 'flex',
        flexDirection: 'row',
        borderRadius: 15,
        padding: 5,
    },
    txt: {
        fontSize: 24,
    },
});
