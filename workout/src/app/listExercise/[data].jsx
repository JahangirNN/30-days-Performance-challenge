import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import exercises from '../../../assets/data/exercises.json';
import ExerciseListItem from '../../components/ExerciseListItem';
import { useNavigation, useRoute } from "@react-navigation/native";
import { useEffect } from 'react';
import { useLocalSearchParams, useRouter } from 'expo-router';
import base from '../../../assets/data/base.json';

export default function App() {
  const params = useLocalSearchParams();
  const listOfExercise = base.find((item) => item.name === params.name)
  return (
    <View style={styles.container}>
      <FlatList
        data={listOfExercise.excersises}
        renderItem={({ item }) => <ExerciseListItem item={item} />}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ gap: 5 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding:10,

}});
