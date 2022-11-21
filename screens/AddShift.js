import {
    Pressable,
    StyleSheet,
    Text,
    View,
    Switch,
    ScrollView,
    ToastAndroid,
} from 'react-native';
import RNDateTimePicker from '@react-native-community/datetimepicker';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addShiftToState } from '../redux/shiftReducer';
import { getCurrent, parseTime, parseDate } from '../utils/timeUtils';
import { isShiftValid } from '../utils/shiftUtils';

import Slider from '@react-native-community/slider';
import JobSelector from '../components/JobSelector';
import JobLine from '../components/JobLine';

import config from '../config.json';

const AddShift = ({ closeModal, defaultJob, allJobs }) => {
    const dispatch = useDispatch();
    const DEFAULT_ENTRY = {
        startTime: getCurrent().time,
        endTime: null,
        date: getCurrent().date,
        job: defaultJob,
        multiplier: 100,
        multiManual: true,
    };
    const [entry, setEntry] = useState(DEFAULT_ENTRY);
    const [showModals, setShowModals] = useState({
        startTime: false,
        endTime: false,
        date: false,
    });
    const color = defaultJob ? defaultJob.color : config.colors[0];

    function handleAdd() {
        const isValid = isShiftValid(entry);
        if (isValid) {
            closeModal();
            dispatch(addShiftToState(entry));
            ToastAndroid.show('Shift added successfully!', ToastAndroid.SHORT);
        } else {
            ToastAndroid.show(
                'Please enter complete information.',
                ToastAndroid.SHORT
            );
        }
    }

    return (
        <View style={styles.mainContainer}>
            <View
                style={{
                    ...styles.rowContainer,
                    justifyContent: 'space-around',
                }}>
                <View style={styles.timeSelector}>
                    <Text style={styles.label}>Start Time</Text>
                    <View style={styles.rowContainer}>
                        <Pressable
                            onPressIn={() =>
                                setShowModals({
                                    startTime: true,
                                    endTime: false,
                                    date: false,
                                })
                            }>
                            <Text style={styles.time}>{entry.startTime}</Text>
                        </Pressable>
                    </View>
                </View>

                <View style={styles.timeSelector}>
                    <Text style={styles.label}>End Time</Text>
                    <View style={styles.rowContainer}>
                        <Pressable
                            onPressIn={() =>
                                setShowModals({
                                    startTime: false,
                                    endTime: true,
                                    date: false,
                                })
                            }>
                            <Text style={styles.time}>{entry.endTime}</Text>
                        </Pressable>
                    </View>
                </View>
                <View>
                    <Text style={styles.label}>Date</Text>
                    <Pressable
                        onPressIn={() =>
                            setShowModals({
                                startTime: false,
                                endTime: false,
                                date: true,
                            })
                        }>
                        <Text style={styles.date}>{entry.date}</Text>
                    </Pressable>
                </View>
            </View>

            <View style={styles.rowContainer}>
                <View style={{ width: '100%' }}>
                    <Text style={styles.label}>Select Job</Text>
                    <ScrollView style={styles.jobSelector}>
                        {allJobs.map((job, i) => (
                            <Pressable
                                key={i}
                                onPressIn={() =>
                                    setEntry((prev) => {
                                        return { ...entry, job: job };
                                    })
                                }>
                                <JobLine
                                    job={job}
                                    isSelected={job.id == entry.job.id}
                                />
                            </Pressable>
                        ))}
                    </ScrollView>
                </View>
            </View>

            <View>
                <Text style={styles.label}>Pay Multilier:</Text>
                <View style={styles.rowContainer}>
                    <Text style={styles.time}>{entry.multiplier}%</Text>
                    <Slider
                        value={entry.multiplier}
                        minimumValue={100}
                        maximumValue={200}
                        step={5}
                        style={{ width: '70%', height: 25 }}
                        onSlidingComplete={(v) =>
                            setEntry((prev) => {
                                return { ...prev, multiplier: v };
                            })
                        }
                        minimumTrackTintColor={config.colors[entry.job.color]}
                        thumbTintColor='#F2F4F5'
                    />
                </View>
            </View>
            <View style={styles.actionContainer}>
                <Pressable
                    style={styles.btnCancel}
                    onPressIn={() => closeModal()}>
                    <Text style={styles.txtCancel}>Cancel</Text>
                </Pressable>
                <Pressable
                    style={styles.btnAdd}
                    onPressIn={handleAdd}>
                    <Text style={styles.txtAdd}>Add</Text>
                </Pressable>
            </View>

            {showModals.startTime && (
                <RNDateTimePicker
                    value={new Date()}
                    mode='time'
                    onChange={(event, date) => {
                        setShowModals({
                            startTime: false,
                            endTime: false,
                            date: false,
                        });
                        setEntry((prev) => {
                            return { ...prev, startTime: parseTime(date) };
                        });
                    }}
                />
            )}
            {showModals.endTime && (
                <RNDateTimePicker
                    value={new Date()}
                    mode='time'
                    onChange={(event, date) => {
                        setShowModals({
                            startTime: false,
                            endTime: false,
                            date: false,
                        });
                        setEntry((prev) => {
                            return { ...prev, endTime: parseTime(date) };
                        });
                    }}
                />
            )}
            {showModals.date && (
                <RNDateTimePicker
                    value={new Date()}
                    mode='date'
                    onChange={(event, date) => {
                        setShowModals({
                            startTime: false,
                            endTime: false,
                            date: false,
                        });
                        setEntry((prev) => {
                            return { ...prev, date: parseDate(date) };
                        });
                    }}
                />
            )}
        </View>
    );
};

export default AddShift;

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: '#ffffff',
        height: '100%',
    },
    rowContainer: {
        // borderWidth: 1,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    label: {
        fontWeight: 'bold',
        marginBottom: 10,
        marginLeft: 10,
    },
    time: {
        display: 'flex',
        backgroundColor: '#F2F4F5',
        width: 90,
        paddingTop: 10,
        paddingBottom: 15,
        textAlign: 'center',
        justifyContent: 'center',
        fontSize: 25,
        borderRadius: 15,
    },
    date: {
        display: 'flex',
        backgroundColor: '#F2F4F5',
        width: 170,
        paddingTop: 10,
        paddingBottom: 15,
        textAlign: 'center',
        justifyContent: 'center',
        fontSize: 25,
        borderRadius: 15,
        marginRight: 15,
    },
    jobSelector: {
        borderRadius: 15,
        backgroundColor: '#F2F4F5',
        maxHeight: 200,
        padding: 10,
        marginRight: 10,
        marginLeft: 10,
    },
    actionContainer: {
        marginTop: 20,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    btnAdd: {
        backgroundColor: '#183B5D',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        height: 50,
        width: 140,
    },
    txtAdd: {
        fontSize: 20,
        color: '#ffffff',
    },
    btnCancel: {
        backgroundColor: '#FF9898',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        height: 50,
        width: 140,
    },
    txtCancel: {
        fontSize: 20,
        color: '#D3180C',
    },
});
