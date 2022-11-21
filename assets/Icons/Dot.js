import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Svg, { Path, Circle } from 'react-native-svg';

const Dot = ({ style, color, size }) => {
    return (
        <View style={style}>
            <Svg
                width={size}
                height={size}
                viewBox='0 0 22 22'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'>
                <Circle
                    cx='11'
                    cy='11'
                    r='11'
                    fill='white'
                />
            </Svg>
        </View>
    );
};

export default Dot;

const styles = StyleSheet.create({});
