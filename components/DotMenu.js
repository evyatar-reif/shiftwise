import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

import Dot from '../assets/Icons/Dot';

const DotMenu = ({ length, position }) => {
    var elements = [];

    for (var i = 0; i < length; i++) {
        if (i == position) {
            elements.push(
                <Dot
                    style={{ margin: 5 }}
                    size={25}
                />
            );
        } else {
            elements.push(
                <Dot
                    style={{ margin: 5 }}
                    size={15}
                />
            );
        }
    }

    return <View style={styles.mainContainer}>{elements}</View>;
};

export default DotMenu;

const styles = StyleSheet.create({
    mainContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
});
