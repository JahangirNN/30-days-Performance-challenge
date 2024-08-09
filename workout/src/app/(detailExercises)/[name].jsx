import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, Dimensions } from "react-native";
import { Stack, useLocalSearchParams } from "expo-router";
import exercises from '../../../assets/data/exercises.json'; 
import { useState } from "react";
import Icon from 'react-native-vector-icons/MaterialIcons';
import { LinearGradient } from 'expo-linear-gradient'; 
export default function ExerciseDetailScreen(){
    const params = useLocalSearchParams();
    console.log(params)

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

    return(    
    <View style={styles.container}>
      <Stack.Screen options={{ title: params.name }} />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.header}>
          <TouchableOpacity onPress={handlePrevious} disabled={currentIndex === 0}>
            <Icon name="chevron-left" size={30} color={currentIndex === 0 ? '#ccc' : '#007BFF'} />
          </TouchableOpacity>
          <Text style={styles.title}>{}</Text>
          <TouchableOpacity onPress={handleNext} disabled={currentIndex === exercises.length - 1}>
            <Icon name="chevron-right" size={30} color={currentIndex === exercises.length - 1 ? '#ccc' : '#007BFF'} />
          </TouchableOpacity>
        </View>
        <LinearGradient 
          colors={['#141E30', '#243B55']} 
          style={styles.gradientBackground}
        >
          <View style={styles.card}>
            <Image source={{ uri: params.image }} style={styles.exerciseImage} />
            <View style={styles.textContainer}>
              <Text style={styles.exerciseName}>{params.name}</Text>
              <Text style={styles.exerciseSets}>Sets: {params.sets}</Text>
            </View>
          </View>
        </LinearGradient>
      </ScrollView>

      {/* <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.header}>
          <TouchableOpacity onPress={handlePrevious} disabled={currentIndex === 0}>
            <Icon name="chevron-left" size={30} color={currentIndex === 0 ? '#ccc' : '#007BFF'} />
          </TouchableOpacity>
          <Text style={styles.title}>{}</Text>
          <TouchableOpacity onPress={handleNext} disabled={currentIndex === exercises.length - 1}>
            <Icon name="chevron-right" size={30} color={currentIndex === exercises.length - 1 ? '#ccc' : '#007BFF'} />
          </TouchableOpacity>
        </View>
        <LinearGradient 
          colors={['#141E30', '#243B55']} 
          style={styles.gradientBackground}
          >
          <View style={styles.card}>
            <Image source={{ uri: params.image }} style={styles.exerciseImage} />
            <View style={styles.textContainer}>
              <Text style={styles.exerciseName}>{params.name}</Text>
              <Text style={styles.exerciseSets}>Sets: {params.sets}</Text>
            </View>
          </View>
        </LinearGradient>

        <View style={styles.instructionsContainer}>
          <Text style={styles.instructions} numberOfLines={isInstructionExpanded ? 0 : 3}>
            {params.instructions || 'No instructions available'}
          </Text>
          <TouchableOpacity onPress={() => setIsInstructionExpanded(!isInstructionExpanded)}>
            <Text style={styles.seeMore}>{isInstructionExpanded ? 'Collapse' : 'Read More'}</Text>
          </TouchableOpacity>
        </View>
      </ScrollView> */}
    </View>
  );
  
}
const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0', // Light grey background
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  card: {
    width: width * 0.9,
    backgroundColor: '#fff', // White background for the card
    borderRadius: 15,
    overflow: 'hidden',
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.15,
    shadowRadius: 10,
    elevation: 5, // Shadow for Android
    alignItems: 'center',
  },
  exerciseImage: {
    width: '100%',
    height: width * 0.75, // 3:4 aspect ratio for the image
    borderRadius: 10,
    marginBottom: 15,
  },
  textContainer: {
    alignItems: 'center',
  },
  exerciseName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  exerciseSets: {
    fontSize: 18,
    color: '#555',
  },
});