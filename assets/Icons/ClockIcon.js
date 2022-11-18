import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Svg, { Path, Circle } from 'react-native-svg';

const ClockIcon = () => {
    return (
        <Svg
            width='35'
            height='35'
            viewBox='0 0 15 15'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'>
            <Circle
                cx='7.5'
                cy='7.5'
                r='6.25'
                fill='#D7E0FF'
                stroke='#4147D5'
                stroke-width='1.5'
            />
            <Path
                d='M7.5 5.01227V7.51227L9 9.01227'
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
