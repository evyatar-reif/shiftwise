import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const Modal = (props) => {
    if (!props.open) {
        return null;
    }

    return (
        <View style={styles.mainContainer}>
            <View style={styles.child}>
                {props.children}
                {/* <Pressable
                    onPressIn={props.onClose}
                    style={styles.cancel}>
                    <Text style={{ color: 'red' }}>Cancel</Text>
                </Pressable> */}
            </View>
        </View>
    );
};

export default Modal;

const styles = StyleSheet.create({
    mainContainer: {
        zIndex: 10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(22, 22, 22,0.6)',
        opacity: 20,
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
    child: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        padding: 10,
        borderRadius: 15,
    },
    cancel: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        marginTop: 10,
        width: 95,
        height: 45,
        backgroundColor: '#FFCCCB',
    },
});
