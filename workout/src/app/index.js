import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import exercises from '../../assets/data/exercises.json';
import ExerciseListItem from '../../src/components/ExerciseListItem';

export default function App() {
  return (
    <View style={styles.container}>
      <FlatList 
      data={exercises}
      contentContainerStyle={{gap:5}}
      keyExtractor={(item) => item.name}
      renderItem={({item}) => <ExerciseListItem item={item}/>}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'ghostwhite',
    justifyContent: 'center',
    padding:10,

}});
