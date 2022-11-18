import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Pressable,
    ToastAndroid,
} from 'react-native';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { isJobValid } from '../utils/jobUtils';
import { addJobToState } from '../redux/jobReducer';

import ColorIcon from '../components/ColorIcon';
import DropDownMenu from '../components/DropDownMenu';

const colorArray = [
    // '#090A0A',
    '#979C9E',
    '#DB9119',
    '#D3180C',
    '#1F3F39',
    '#6E4369',
    '#DBB42C',
    '#84B6AE',
    '#8D4947',
    '#183B5D',
    '#0065D0',
];

const currencyArray = [
    // should be in settings
    { label: '$ USD', value: '$ USD' },
    { label: '₪ NIS', value: '₪ NIS' },
];

const DEFAULT_ENTRY = {
    name: '',
    color: 0,
    pay: '',
    currency: null,
};

const AddJob = ({ closeModal }) => {
    const [entry, setEntry] = useState(DEFAULT_ENTRY);
    const dispatch = useDispatch();

    const colorIconArray = colorArray.map((c, i) => (
        <Pressable
            onPressIn={() =>
                setEntry((prev) => {
                    return { ...entry, color: i };
                })
            }>
            <ColorIcon
                key={i}
                color={c}
                size={50}
                borderWidth={c == colorArray[entry.color] ? 3 : 1}
            />
        </Pressable>
    ));

    function handleAdd() {
        const isValid = isJobValid(entry);
        if (isValid) {
            dispatch(addJobToState(entry));
            closeModal();
            ToastAndroid.show('Job added successfully!', ToastAndroid.SHORT);
        } else {
            ToastAndroid.show(
                'Please enter complete information.',
                ToastAndroid.SHORT
            );
        }
    }

    return (
        <View style={styles.mainContainer}>
            <View style={styles.rowContainer}>
                <Text style={styles.label}>Choose Color</Text>
                <View style={styles.colorContainer}>
                    <View style={styles.colorRow}>
                        {colorIconArray.slice(0, 5)}
                    </View>
                    <View style={styles.colorRow}>
                        {colorIconArray.slice(5, 10)}
                    </View>
                </View>
            </View>
            <View style={styles.rowContainer}>
                <Text style={styles.label}>Company Name</Text>
                <TextInput
                    style={styles.nameInput}
                    placeholder='Company Name'
                    autoCapitalize='true'
                    cursorColor='black'
                    onChangeText={(t) =>
                        setEntry((prev) => {
                            return {
                                ...prev,
                                name: t,
                            };
                        })
                    }
                />
            </View>

            <View style={styles.rowContainer}>
                <Text style={styles.label}>Hourly Pay</Text>
                <View style={styles.payContainer}>
                    <TextInput
                        style={styles.payInput}
                        placeholder='Hourly Pay'
                        keyboardType='decimal-pad'
                        cursorColor='black'
                        onChangeText={(t) =>
                            setEntry((prev) => {
                                return {
                                    ...prev,
                                    pay: t,
                                };
                            })
                        }
                    />
                    <DropDownMenu
                        value={entry.currency}
                        onValueChange={(v) =>
                            setEntry((prev) => {
                                return { ...prev, currency: v };
                            })
                        }
                        items={currencyArray}
                        selectedStyle={styles.dropdown}
                        itemStyle={styles.dropdownItem}
                        placeholder='Currency'
                        itemSelectedStyle={styles.itemSelectedStyle}
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
        </View>
    );
};

export default AddJob;

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: '#ffffff',
        display: 'flex',
        flex: 1,
    },
    rowContainer: {
        width: '100%',
        paddingLeft: 10,
        marginTop: 10,
    },
    nameInput: {
        backgroundColor: '#F2F4F5',
        width: '90%',
        height: 60,
        fontSize: 18,
        paddingLeft: 10,
        borderRadius: 15,
    },
    payInput: {
        backgroundColor: '#F2F4F5',
        width: '30%',
        height: 60,
        fontSize: 18,
        paddingLeft: 10,
        borderRadius: 15,
    },
    label: {
        fontWeight: 'bold',
        marginBottom: 10,
        marginLeft: 10,
    },
    colorContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    colorRow: {
        marginTop: 5,
        display: 'flex',
        flexDirection: 'row',
    },
    payContainer: {
        width: '100%',
        marginTop: 5,
        display: 'flex',
        flexDirection: 'row',
    },
    dropdown: {
        marginLeft: 10,
        height: 60,
        backgroundColor: '#F2F4F5',
        borderRadius: 15,
        width: 120,
        justifyContent: 'center',
        textAlign: 'center',
    },
    dropdownItem: {
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    itemSelectedStyle: {
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
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
