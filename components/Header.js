import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useSelector } from 'react-redux';
import GestureRecognizer, { swipeDirections } from 'react-native-swipe-detect';

import config from '.././config.json';

import DotMenu from './DotMenu';
import WaveTop from '../assets/WaveTop';

const Header = ({ job, jobIndex, setJobIndex, maxValue }) => {
    function swipeLeft() {
        if (jobIndex != maxValue) {
            setJobIndex((prev) => prev + 1);
        }
    }
    function swipeRight() {
        if (jobIndex != 0) {
            setJobIndex((prev) => prev - 1);
        }
    }

    return (
        <GestureRecognizer
            onSwipeLeft={swipeLeft}
            onSwipeRight={swipeRight}>
            <View style={styles.mainContainer}>
                <WaveTop color={config.colors[job.color]} />
                <View style={styles.titleContainer}>
                    <DotMenu
                        position={jobIndex}
                        length={maxValue + 1}
                    />
                    <Text style={styles.title}>{job.name}</Text>
                </View>
            </View>
        </GestureRecognizer>
    );
};

export default Header;

const styles = StyleSheet.create({
    mainContainer: {},
    titleContainer: {
        position: 'absolute',
        top: '35%',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 35,
        color: '#ffffff',
    },
});
