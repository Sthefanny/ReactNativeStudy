import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Line = ({ label = "", content = "-" }) => {
    return (
        <View style={styles.line}>
            <Text style={[
                styles.cell,
                styles.label,
                label.length > 8 ? styles.longLabel : null
            ]}>{label}</Text>
            <Text style={[
                styles.cell,
                styles.content,
                content.length > 15 ? styles.longLabel : null
            ]}>{content}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    line: {
        flexDirection: 'row',
        paddingTop: 3,
        paddingBottom: 3,
        borderWidth: 1,
        borderColor: '#c5c5c5'
    },
    cell: {
        fontSize: 15,
        paddingLeft: 5
    },
    label: {
        fontWeight: 'bold',
        flex: 2
    },
    content: {
        flex: 4
    },
    longLabel: {
        fontSize: 12
    }
});

export default Line;