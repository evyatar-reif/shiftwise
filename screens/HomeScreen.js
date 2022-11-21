import { StyleSheet, Text, View, Pressable, Dimensions } from 'react-native';
import { useSelector } from 'react-redux';
import React, { useState } from 'react';
import { Modal } from 'react-native';

import config from '../config.json';

import AddJob from './AddJob';
import AddShift from './AddShift';
import WaveTop from '../assets/WaveTop';

const screenIndex = 0;

const HomeScreen = ({ navigation }) => {
    const [openJobModal, setOpenJobModal] = useState(false);
    const [openShiftModal, setOpenShiftModal] = useState(false);
    const { allJobs } = useSelector((state) => state.jobs);
    const { allShifts } = useSelector((state) => state.shifts);

    console.log(allShifts);

    return (
        <View
            style={{
                height: '100%',
                width: '100%',
            }}>
            <WaveTop color={config.colors[0]} />
            <Pressable
                style={styles.btn}
                onPressIn={() => setOpenJobModal(true)}>
                <Text style={styles.btnTxt}>Add Job</Text>
            </Pressable>

            <Pressable
                style={styles.btn}
                onPressIn={() => setOpenShiftModal(true)}>
                <Text style={styles.btnTxt}>Add Shift</Text>
            </Pressable>

            <Modal
                transparent={true}
                visible={openJobModal || openShiftModal}
                animationType='slide'>
                <View
                    style={{
                        height: '100%',
                    }}>
                    <Pressable
                        style={{
                            height: '30%',
                        }}
                        onPressIn={() => {
                            setOpenJobModal(false);
                            setOpenShiftModal(false);
                        }}></Pressable>
                    <View
                        style={{
                            height: '70%',
                            paddingTop: 10,
                            backgroundColor: '#ffffff',
                        }}>
                        {openJobModal && (
                            <AddJob closeModal={() => setOpenJobModal(false)} />
                        )}
                        {openShiftModal && (
                            <AddShift
                                defaultJob={allJobs[screenIndex]}
                                allJobs={allJobs}
                                closeModal={() => setOpenShiftModal(false)}
                            />
                        )}
                    </View>
                </View>
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
