import { Pressable, StyleSheet, Text, View, Switch } from 'react-native';
import RNDateTimePicker from '@react-native-community/datetimepicker';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addShift } from '../redux/shiftReducer';

import Slider from '@react-native-community/slider';
import Modal from '../components/Modal';

import JobSelector from '../components/JobSelector';

import ClockIcon from '../assets/Icons/ClockIcon';
import CalenderIcon from '../assets/Icons/CalenderIcon';
import SelectionIcon from '../assets/Icons/SelectionIcon';

const AddShift = ({ navigation, route }) => {
    const dispatch = useDispatch();
    const { starterJob } = route.params;
    const [openModal, setOpenModal] = useState(false);
    const currentTimeDate = getCurrent();
    const [dtPicker, setDtPicker] = useState({
        startTime: false,
        startDate: false,
        endTime: false,
        endDate: false,
    });
    const [entry, setEntry] = useState({
        startTime: currentTimeDate.time,
        startDate: currentTimeDate.date,
        endTime: '',
        endDate: '',
        multiplier: 100,
        isMultiplier: false,
        job: starterJob,
    });

    function onAddShift() {
        const newShift = { ...entry };
        dispatch(addShift(newShift));
        navigation.navigate('Home', { result: true });
    }

    function onChangeDT(e, selectedDT, type) {
        switch (type) {
            case 'startTime': {
                const hh = String(selectedDT.getHours());
                const mm = String(selectedDT.getMinutes());
                const time = hh + ':' + (mm.length == 1 ? '0' + mm : mm);
                setEntry((prev) => {
                    return { ...prev, startTime: time };
                });
                setDtPicker({ startTime: false });
            }
            case 'startDate': {
                const dd = String(selectedDT.getDate()).padStart(2, '0');
                const MM = String(selectedDT.getMonth() + 1).padStart(2, '0'); //January is 0!
                const yyyy = selectedDT.getFullYear();
                const date = MM + '/' + dd + '/' + yyyy;
                setEntry((prev) => {
                    return { ...prev, startDate: date };
                });
                setDtPicker({ startDate: false });
            }
            case 'endTime': {
                const hh = String(selectedDT.getHours());
                const mm = String(selectedDT.getMinutes());
                const time = hh + ':' + (mm.length == 1 ? '0' + mm : mm);
                setEntry((prev) => {
                    return { ...prev, endTime: time };
                });
                setDtPicker({ endTime: false });
            }
            case 'endDate': {
                const dd = String(selectedDT.getDate()).padStart(2, '0');
                const MM = String(selectedDT.getMonth() + 1).padStart(2, '0'); //January is 0!
                const yyyy = selectedDT.getFullYear();
                const date = MM + '/' + dd + '/' + yyyy;
                setEntry((prev) => {
                    return { ...prev, endDate: date };
                });
                setDtPicker({ endDate: false });
            }
        }
    }

    return (
        <View style={styles.mainContainer}>
            <View style={styles.rowContainer}>
                <Text style={styles.rowTxt}>
                    Start Time: {entry.startTime} on {entry.startDate}
                </Text>
                <View style={styles.pickerContainer}>
                    <Pressable
                        style={styles.picker}
                        onPressIn={() =>
                            setDtPicker((prev) => {
                                return { startTime: true };
                            })
                        }>
                        <ClockIcon />
                    </Pressable>
                    <Pressable
                        style={styles.picker}
                        onPressIn={() =>
                            setDtPicker((prev) => {
                                return { startDate: true };
                            })
                        }>
                        <CalenderIcon />
                    </Pressable>
                </View>
            </View>
            <View style={styles.rowContainer}>
                <Text style={styles.rowTxt}>
                    End Time: {entry.endTime} on {entry.endDate}
                </Text>
                <View style={styles.pickerContainer}>
                    <Pressable
                        style={styles.picker}
                        onPressIn={() =>
                            setDtPicker((prev) => {
                                return { endTime: true };
                            })
                        }>
                        <ClockIcon />
                    </Pressable>
                    <Pressable
                        style={styles.picker}
                        onPressIn={() =>
                            setDtPicker((prev) => {
                                return { endDate: true };
                            })
                        }>
                        <CalenderIcon />
                    </Pressable>
                </View>
            </View>
            <View style={styles.rowContainer}>
                <Text style={styles.rowTxt}>Job: {entry.job.name}</Text>
                <View style={styles.pickerContainer}>
                    <View
                        style={{
                            backgroundColor: entry.job.color,
                            height: 35,
                            width: 35,
                            borderWidth: 1,
                            borderRadius: 25,
                            marginRight: 15,
                        }}></View>
                    <Pressable
                        onPressIn={() => setOpenModal(true)}
                        style={styles.picker}>
                        <SelectionIcon />
                    </Pressable>
                </View>
            </View>
            <View style={styles.rowContainer}>
                <Pressable>
                    <Text style={styles.rowTxt}>
                        Pay: {entry.job.pay} {entry.job.currency}
                    </Text>
                </Pressable>
            </View>
            <View style={styles.rowContainer}>
                <Text style={styles.rowTxt}>
                    Pay Multiplier: {entry.multiplier}%
                </Text>
                <Switch
                    thumbColor={entry.job.color}
                    value={entry.isMultiplier}
                    onChange={() =>
                        setEntry((prev) => {
                            return {
                                ...prev,
                                isMultiplier: !prev.isMultiplier,
                                multiplier: prev.isMultiplier
                                    ? 100
                                    : prev.multiplier,
                            };
                        })
                    }
                />
                <Slider
                    disabled={!entry.isMultiplier}
                    style={styles.slider}
                    minimumValue={100}
                    maximumValue={200}
                    step={5}
                    minimumTrackTintColor='black'
                    thumbTintColor={entry.job.color}
                    onValueChange={(e) =>
                        setEntry((prev) => {
                            return {
                                ...prev,
                                multiplier: e,
                            };
                        })
                    }
                    value={entry.multiplier}
                />
            </View>

            <View style={styles.btnContainer}>
                <Pressable
                    style={styles.btn}
                    onPressIn={() =>
                        navigation.navigate('Home', { result: false })
                    }>
                    <Text style={styles.btnTxt}>Cancel</Text>
                </Pressable>
                <Pressable
                    style={styles.btn}
                    onPressIn={onAddShift}>
                    <Text style={styles.btnTxt}>Add Shift</Text>
                </Pressable>

                {dtPicker.startTime && (
                    <RNDateTimePicker
                        value={new Date()}
                        mode='time'
                        onChange={(e, d) => onChangeDT(e, d, 'startTime')}
                    />
                )}
                {dtPicker.startDate && (
                    <RNDateTimePicker
                        value={new Date()}
                        onChange={(e, d) => onChangeDT(e, d, 'startDate')}
                    />
                )}
                {dtPicker.endTime && (
                    <RNDateTimePicker
                        value={new Date()}
                        mode='time'
                        onChange={(e, d) => onChangeDT(e, d, 'endTime')}
                    />
                )}
                {dtPicker.endDate && (
                    <RNDateTimePicker
                        value={new Date()}
                        onChange={(e, d) => onChangeDT(e, d, 'endDate')}
                    />
                )}
            </View>
            <Modal
                open={openModal}
                onClose={() => setOpenModal(false)}>
                <JobSelector
                    currentJob={entry.job}
                    onSelected={(newJob) => {
                        setEntry((prev) => {
                            return {
                                ...prev,
                                job: newJob,
                            };
                        });
                        setOpenModal(false);
                    }}
                />
            </Modal>
        </View>
    );
};

export default AddShift;

const styles = StyleSheet.create({
    mainContainer: {
        display: 'flex',
        flex: 1,
        borderWidth: 1,
    },
    rowContainer: {
        width: '100%',
        height: 75,
        borderBottomColor: '#161616',
        borderBottomWidth: 1,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 10,
    },
    rowTxt: {
        fontSize: 18,
    },
    mainContainer: {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    pickerContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    picker: {
        margin: 10,
    },
    slider: { width: 150 },

    btnContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    btn: {
        margin: 15,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#454ADE',
        borderRadius: 15,
        height: 50,
        width: 150,
    },
    btnTxt: {
        color: '#ffffff',
    },
});

function getCurrent() {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const MM = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    const yyyy = today.getFullYear();

    const hh = String(today.getHours());
    const mm = String(today.getMinutes());

    const date = MM + '/' + dd + '/' + yyyy;
    const time = hh + ':' + (mm.length == 1 ? '0' + mm : mm);
    return {
        date: date,
        time: time,
    };
}
