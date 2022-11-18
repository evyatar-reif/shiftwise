import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useSelector } from 'react-redux';

import JobLine from './JobLine';

const JobSelector = ({ currentJob, onSelected }) => {
    const { allJobs } = useSelector((state) => state.jobs);

    const elements = allJobs.map((j) => (
        <Pressable onPressIn={() => onSelected(j)}>
            <JobLine
                isSelected={j.id == currentJob.id}
                job={j}
            />
        </Pressable>
    ));

    return <View style={styles.mainContainer}>{elements}</View>;
};

export default JobSelector;

const styles = StyleSheet.create({
    mainContainer: {
        width: 250,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
