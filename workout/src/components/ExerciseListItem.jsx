import { StatusBar } from 'expo-status-bar';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { Link } from 'expo-router';

export default function ExerciseListItem({item}) {
  return( 
   <Link   href={`/exerciseDetail?name=${encodeURIComponent(item.name)}&image=${encodeURIComponent(item.image)}&sets=${encodeURIComponent(item.sets)}`}
   asChild> 
      <Pressable style={styles.exerciseContainer}>
      <Image source={{ uri: item.image }} style={styles.exerciseImage} />
      <View style={styles.textContent}>
        <Text style={styles.exerciseName}>{item.name}</Text>
        <Text style={styles.exerciseSets}>{item.sets} sets</Text>
      </View>
      <StatusBar style="auto" />
    </Pressable>
  </Link>
  )
}

const styles = StyleSheet.create({
  exerciseContainer: {
    marginBottom: 15,
    padding: 10,
    borderRadius: 8,
    backgroundColor: '#f8f8f8',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  exerciseImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 10,
  },
  textContent: {
    flex: 1,
  },
  exerciseName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  exerciseSubtitle: {
    fontSize: 14,
    color: '#666',
  },
});
