import { Link, useRouter } from 'expo-router';
import React from 'react';
import { FlatList, View, Text, StyleSheet, Pressable } from 'react-native';



export default function DayItem ({ day, date }) {

    return(
        <Link href="/(exercises)" asChild>
        <Pressable   style={styles.itemContainer}>
            <Text style={styles.dayText}>{day}</Text>
            <Text style={styles.dateText}>{date}</Text>
        </Pressable>
        </Link>
);
}


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
  