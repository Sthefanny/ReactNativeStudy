import React from 'react';
import { FlatList, Text, StyleSheet } from 'react-native';

import PeopleListItem from './PeopleListItem';

const PeopleList = props => {
    const { people, onPressItem } = props;

    return (
        <FlatList
            style={styles.container}
            data={people}
            renderItem={({ item }) => (
                <PeopleListItem
                    person={item}
                    navigateToPeopleDetail={onPressItem}
                />
            )}
            keyExtractor={item => `${item.name.first}${item.name.last}`}
        />
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#e2f9ff'
    }
});

export default PeopleList;