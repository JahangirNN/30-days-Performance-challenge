import React from 'react';
import { View, Text, StyleSheet, Pressable, Image } from 'react-native';
// import { useNavigation } from 'expo-router';
import { useNavigation } from "@react-navigation/native";
import { Link, useRouter } from 'expo-router';

export default function DayItem({ day, date, name, description, excersises, image, id }) {
    // const navigation = useNavigation();
    const router = useRouter();
    // const navigation = useNavigation();
    // const params = useLocalSearchParams();
    // const { id = id, image = image } = params;


    // const item = {
    //     image: image,
    //     excersises: excersises,
    //     id: id
    // };
    // console.log(item)
    const handlePress = () => {
        // Navigate to `[data].jsx` and pass parameters
        router.push(`/(listExercise)/[data]?image=${encodeURIComponent(image)}&name=${encodeURIComponent(name)}&description=${encodeURIComponent(description)}&excersises=${encodeURIComponent(JSON.stringify(excersises))}`);
    };

    const serializedExcersises = encodeURIComponent(JSON.stringify(excersises));
    return (
        
        <Link href={`/listExercise/${id}?image=${encodeURIComponent(image)}&excersises=${encodeURIComponent(serializedExcersises)}&name=${encodeURIComponent(name)}&description=${encodeURIComponent(description)}`} asChild>
            <Pressable 
                // onPress={handlePress}
                style={styles.itemContainer}>
                {/* Day and Date Text */}
                <Text style={styles.dayText}>{day}</Text>
                <Text style={styles.dateText}>{date}</Text>

                {/* Rectangular Block */}
                <View style={styles.exerciseBlock}>
                    {/* Image */}
                    <Image
                        source={{ uri: image }} // Fix: pass image URI directly
                        style={styles.exerciseImage}
                    />

                    {/* Text Content */}
                    <View style={styles.textContent}>
                        <Text style={styles.exerciseName}>{name}</Text>
                        <Text style={styles.exerciseDescription}>{description}</Text>
                        <Text style={styles.exerciseDetails}>{excersises}</Text>
                    </View>
                </View>
            </Pressable>
          </Link>
    );
}

const styles = StyleSheet.create({
    itemContainer: {
        marginBottom: 15,
        padding: 10,
        borderRadius: 8,
        backgroundColor: '#f8f8f8',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 5,
    },
    dayText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
    dateText: {
        fontSize: 16,
        color: '#666',
    },
    exerciseBlock: {
        flexDirection: 'row',
        marginTop: 10,
        padding: 10,
        borderRadius: 8,
        backgroundColor: '#ffffff',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 3,
    },
    exerciseImage: {
        width: 80,
        height: 80,
        borderRadius: 8,
        marginRight: 10,
    },
    textContent: {
        flex: 1,
        justifyContent: 'center',
    },
    exerciseName: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
    exerciseDescription: {
        fontSize: 14,
        color: '#666',
        marginVertical: 5,
    },
    exerciseDetails: {
        fontSize: 12,
        color: '#888',
    },
});
