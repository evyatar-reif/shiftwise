import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useSelector } from 'react-redux';

import ShiftLine from './ShiftLine';

import { getShiftsOfJob } from '../utils/shiftUtils';

const ShiftsDisplay = ({ job }) => {
    const { allShifts } = useSelector((state) => state.shifts);
    const jobShifts = getShiftsOfJob(job.id, [...allShifts]);

    const elements = jobShifts.map((js, i) => (
        <ShiftLine
            key={i}
            shift={js}
        />
    ));
    return <View>{elements}</View>;
};

export default ShiftsDisplay;

const styles = StyleSheet.create({});
