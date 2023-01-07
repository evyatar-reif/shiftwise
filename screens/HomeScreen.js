import { StyleSheet, Text, View, Pressable, Dimensions } from 'react-native';
import { useSelector } from 'react-redux';
import React, { useState } from 'react';
import { Modal } from 'react-native';

import config from '../config.json';

import Header from '../components/Header';
import AddJob from './AddJob';
import AddShift from './AddShift';
import WaveTop from '../assets/WaveTop';
import ShiftsDisplay from '../components/ShiftsDisplay';

const HomeScreen = ({ navigation }) => {
    const [jobIndex, setJobIndex] = useState(2);
    const [openJobModal, setOpenJobModal] = useState(false);
    const [openShiftModal, setOpenShiftModal] = useState(false);
    const { allJobs } = useSelector((state) => state.jobs);

    return (
        <View
            style={{
                height: '100%',
                width: '100%',
            }}>
            <Header
                job={allJobs[jobIndex]}
                jobIndex={jobIndex}
                maxValue={allJobs.length - 1}
                setJobIndex={setJobIndex}
            />
            <View style={styles.bodyContainer}>
                <View style={styles.btnContainer}>
                    <Pressable
                        style={styles.btnAddShift}
                        onPressIn={() => setOpenShiftModal(true)}>
                        <Text style={styles.btnAddTxt}>Add Shift</Text>
                    </Pressable>
                </View>

                <ShiftsDisplay job={allJobs[jobIndex]} />
            </View>

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
                            backgroundColor: '#161616',
                            opacity: 0.5,
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
                                defaultJob={allJobs[jobIndex]}
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
    bodyContainer: {
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        justifyContent: 'center',
    },
    btnAddShift: {
        width: 150,
        height: 100,
        backgroundColor: '#9BDCFD',
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnAddTxt: {
        fontSize: 20,
        color: '#183B5D',
    },
});
