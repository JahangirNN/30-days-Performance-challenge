import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from "react-native";
import { Stack, useLocalSearchParams } from "expo-router";
import exercises from '../../../assets/data/exercises.json'; 
import { useState } from "react";
import Icon from 'react-native-vector-icons/MaterialIcons';
export default function ExerciseDetailScreen(){
    const params = useLocalSearchParams();

    const [isInstructionExpanded, setIsInstructionExpanded] = useState(false);

    const [currentIndex, setCurretIndex] = useState(0);

    // const [exercise, setExercise] = useState(exercises.find((item) => item.name === params.name))

    
    // if(!exercise){
    //     return <Text> Exercise Not Found</Text>
    // }

    const handlePrevious = () => {
      if(currentIndex > 0){
        setCurretIndex(currentIndex - 1);
        setIsInstructionExpanded(false);
        // setExercise(exercises[currentIndex])
      }
    }

    const handleNext = () => {
      if(currentIndex < exercises.length - 1){
        setCurretIndex(currentIndex + 1);
        setIsInstructionExpanded(false);
        // setExercise(exercises[currentIndex])
      }
    }

    return(    <View style={styles.container}>
      <Stack.Screen options={{ title: params.name }} />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.header}>
          <TouchableOpacity onPress={handlePrevious} disabled={currentIndex === 0}>
            <Icon name="chevron-left" size={30} color={currentIndex === 0 ? '#ccc' : '#007BFF'} />
          </TouchableOpacity>
          {/* <Text style={styles.title}>{currentExercise.name}</Text> */}
          <TouchableOpacity onPress={handleNext} disabled={currentIndex === exercises.length - 1}>
            <Icon name="chevron-right" size={30} color={currentIndex === exercises.length - 1 ? '#ccc' : '#007BFF'} />
          </TouchableOpacity>
        </View>

        <View style={styles.detailsContainer}>
          <Image source={{ uri: params.image }} style={styles.exerciseImage} />
          <Text style={styles.exerciseName}>{params.name}</Text>
          <Text style={styles.exerciseSets}>Sets: {params.sets}</Text>
        </View>

        <View style={styles.instructionsContainer}>
          <Text style={styles.instructions} numberOfLines={isInstructionExpanded ? 0 : 3}>
            {params.instructions || 'No instructions available'}
          </Text>
          <TouchableOpacity onPress={() => setIsInstructionExpanded(!isInstructionExpanded)}>
            <Text style={styles.seeMore}>{isInstructionExpanded ? 'Collapse' : 'Read More'}</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
  
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
    backgroundColor: '#f0f0f0',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    flex: 1,
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
  seeMore: {
    fontSize: 14,
    color: '#007BFF', // Button-like color
    textDecorationLine: 'underline', // Underline text
    fontWeight: 'bold', // Bold text
    marginTop: 10,
    textAlign: 'center', // Center text
  },
});