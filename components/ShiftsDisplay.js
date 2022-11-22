import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useSelector } from 'react-redux';

import ShiftLine from './ShiftLine';

import { getShiftsOfJob } from '../utils/shiftUtils';

const ShiftsDisplay = ({ job }) => {
    const { allShifts } = useSelector((state) => state.shifts);
    const jobShifts = getShiftsOfJob(job.id, [...allShifts]);

    if (jobShifts.length == 0) {
        return (
            <View style={styles.mainContainer}>
                <Text>No Shifts</Text>
            </View>
        );
    }

    const elements = jobShifts.map((js, i) => (
        <ShiftLine
            key={i}
            shift={js}
        />
    ));
    return <View style={styles.mainContainer}>{elements}</View>;
};

export default ShiftsDisplay;

const styles = StyleSheet.create({
    mainContainer: {
        width: '80%',
        padding: 10,
        borderRadius: 15,
        backgroundColor: '#F2F4F5',
    },
});
