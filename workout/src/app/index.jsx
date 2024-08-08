import React from 'react';
import { FlatList, View, Text, StyleSheet } from 'react-native';
import DayItem from '../components/DayListItem';



// Utility to generate the 30-day list
const generateDaysList = () => {
    const days = [];
    const today = new Date();
  
    for (let i = 0; i < 30; i++) {
      const currentDate = new Date(today);
      currentDate.setDate(today.getDate() + i);
      
      days.push({
        id: i + 1,
        day: `Day ${i + 1}`,
        date: currentDate.toDateString(), // Format the date as desired
      });
    }
  
    return days;
  };
  
const days = generateDaysList();

const DaysListScreen = () => {
  return (
    <FlatList
      data={days}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <DayItem day={item.day} date={item.date} />
      )}
      contentContainerStyle={styles.listContainer}
    />
  );
};

export default DaysListScreen;

const styles = StyleSheet.create({
  listContainer: {
    padding: 10,
  },
  itemContainer: {
    padding: 15,
    backgroundColor: '#f9f9f9',
    marginBottom: 10,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  dayText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  dateText: {
    fontSize: 14,
    color: '#888',
  },
});
