import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { Stack, useLocalSearchParams } from "expo-router";
import exercises from '../../assets/data/exercises.json'; 
import { useState } from "react";
export default function ExerciseDetailScreen(){
    const params = useLocalSearchParams();

    const [IsInstructionExpanded, setIsInstructionExpanded] = useState(false);

    const exercise = exercises.find((item) => item.name === params.name)
    
    if(!exercise){
        return <Text> Exercise Not Found</Text>
    }
    return(
    <ScrollView contentContainerStyle={styles.container}>
        <Stack.Screen options={{ title: exercise.name, headerTitleAlign: 'center' }} />

        <View style={styles.detailsContainer}>
            <Text style={styles.exerciseName}>Exercise Detail: {exercise.name}</Text>
            <Text style={styles.exerciseSubtitle}>
            {exercise.muscle.toLocaleUpperCase()} | {exercise.equipment.toLocaleUpperCase()}
            </Text>
        </View>

        <View style={styles.detailsContainer}>
            <Text style={styles.instructions} numberOfLines={IsInstructionExpanded? 0:3}>
                {exercise.instructions}</Text>
            <TouchableOpacity>
                <Text onPress={() => setIsInstructionExpanded(!IsInstructionExpanded)}
                 style={styles.seeMore}>{IsInstructionExpanded ? 'Collapse':'Read More'}</Text>
            </TouchableOpacity>
        </View>

    </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
      flexGrow: 1,
      padding: 16,
      backgroundColor: '#f0f0f0',
    },
    detailsContainer: {
      backgroundColor: 'white',
      padding: 16,
      borderRadius: 8,
      marginBottom: 16,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.3,
      shadowRadius: 4,
      elevation: 5, // For Android shadow
    },
    exerciseName: {
      fontSize: 18,
      fontWeight: 'bold',
    },
    exerciseSubtitle: {
      fontSize: 16,
      color: '#666',
      marginTop: 8,
    },
    instructions: {
      fontSize: 14,
      color: '#333',
    },
    seeMore:{
        textAlign:'center',
        textDecorationLine:'underline',
        color:'#007BFF',
        fontSize:12,
        fontWeight:'bold',
        marginTop:10,
    }
  });
