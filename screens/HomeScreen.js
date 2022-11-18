import { StyleSheet, Text, View, Pressable } from 'react-native';
import { useSelector } from 'react-redux';
import React, { useState } from 'react';
import { Modal } from 'react-native';

// import Modal from '../components/Modal';
import AddJob from './AddJob';

const screenIndex = 0;

const HomeScreen = ({ navigation }) => {
    const [openJobModal, setOpenJobModal] = useState(false);

    const { jobs } = useSelector((state) => state);
    console.log('jobs');
    console.log(jobs);

    return (
        <View style={{ height: '100%', width: '100%' }}>
            <Pressable
                style={styles.btn}
                onPressIn={() => setOpenJobModal(true)}>
                <Text style={styles.btnTxt}>Add Job</Text>
            </Pressable>

            <Modal
                visible={openJobModal}
                animationType='slide'>
                <AddJob closeModal={() => setOpenJobModal(false)} />
            </Modal>
        </View>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    btn: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#454ADE',
        borderRadius: 15,
        height: 50,
        width: 125,
    },
    btnTxt: {
        color: '#ffffff',
    },
});
