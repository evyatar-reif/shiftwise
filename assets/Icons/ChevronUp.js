import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Svg, { Path, Circle } from 'react-native-svg';

const ChevronDown = ({ style }) => {
    return (
        <Svg
            style={style}
            width='25'
            height='15'
            viewBox='0 0 15 8'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'>
            <Path
                d='M13.5 7L7.5 1L1.5 7'
                stroke='#090A0A'
                stroke-width='1.5'
                stroke-linecap='round'
                stroke-linejoin='round'
            />
        </Svg>
    );
};

export default ChevronDown;

const styles = StyleSheet.create({});
