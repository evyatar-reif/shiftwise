import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';

import ChevronDown from '../assets/Icons/ChevronDown';
import ChevronUp from '../assets/Icons/ChevronUp';

const DropDownMenu = ({
    placeholder,
    value,
    onValueChange,
    items,
    selectedStyle,
    itemStyle,
    itemSelectedStyle,
}) => {
    const [isOpen, setIsOpen] = useState(false);

    const itemElements = items.map((item, i) => (
        <Pressable
            key={i}
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                borderBottomWidth: 1,
                borderColor: '#CDCFD0',
                height: 35,
            }}
            onPressIn={() => {
                onValueChange(item.value);
                setIsOpen(false);
            }}>
            <Text style={itemStyle}>{item.label}</Text>
        </Pressable>
    ));

    return (
        <View style={{ position: 'relative' }}>
            {/* // selected value */}
            <Pressable
                style={{
                    ...selectedStyle,
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
                onPressIn={() => setIsOpen((prev) => !prev)}>
                <Text style={value ? itemSelectedStyle : styles.placeholder}>
                    {value ? value : placeholder}
                </Text>
                {isOpen ? (
                    <ChevronUp style={{ marginLeft: 10 }} />
                ) : (
                    <ChevronDown style={{ marginLeft: 10 }} />
                )}
            </Pressable>
            {/* // items */}
            {isOpen && (
                <View
                    style={{
                        ...selectedStyle,
                        height: 'auto',
                        paddingBottom: 10,
                        position: 'absolute',
                        top: selectedStyle.height + 3,
                        marginLeft: selectedStyle.marginLeft,
                        zIndex: 100,
                    }}>
                    {itemElements}
                </View>
            )}
        </View>
    );
};

export default DropDownMenu;

const styles = StyleSheet.create({
    placeholder: {
        fontSize: 12,
        fontWeight: 'bold',
        textAlign: 'center',
        justifyContent: 'center',
    },
});
