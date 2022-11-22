import { StyleSheet, Text, View, Dimensions } from 'react-native';
import React from 'react';
import Svg, { Path, Circle } from 'react-native-svg';

const WaveTop = ({ color }) => {
    return (
        <View
            style={{
                backgroundColor: color,
                paddingTop: 120,
                height: 180,
                marginBottom: 90,
            }}>
            <Svg
                height={200}
                width={Dimensions.get('screen').width + 10}
                viewBox='0 0 1440 320'>
                <Path
                    fill={color}
                    d='M0,192L60,170.7C120,149,240,107,360,112C480,117,600,171,720,197.3C840,224,960,224,1080,208C1200,192,1320,160,1380,144L1440,128L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z'
                />
            </Svg>
        </View>
    );
};

export default WaveTop;

const styles = StyleSheet.create({});
