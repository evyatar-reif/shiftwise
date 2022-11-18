import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Svg, { Path, Circle } from 'react-native-svg';

const ClockIcon = () => {
    return (
        <Svg
            width='14'
            height='15'
            viewBox='0 0 14 15'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'>
            <Path
                d='M0.75 8.8125L5.29545 13.5C7.43437 7.35579 9.2157 4.65965 13.25 1'
                stroke='#4147D5'
                stroke-width='1.5'
                stroke-linecap='round'
                stroke-linejoin='round'
            />
        </Svg>
    );
};

export default ClockIcon;

const styles = StyleSheet.create({});
