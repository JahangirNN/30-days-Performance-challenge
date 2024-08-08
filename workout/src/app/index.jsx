import DayItem from '../components/DayListItem';
import base from '../../assets/data/base.json';
import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

const exerciseData = base
const ExerciseList = () => {
    return (
        <FlatList
            data={exerciseData}
            renderItem={({ item }) => (
                <DayItem
                    day={item.day}
                    date={item.date}
                    name={item.name}
                    description={item.description}
                    exercises={item.excersises}
                    image={item.image}
                    id={item.id}
                />
            )}
            keyExtractor={(item) => item.id}
            contentContainerStyle={styles.listContainer}
        />
    );
};

const styles = StyleSheet.create({
    listContainer: {
        padding: 10,
    },
});

export default ExerciseList;