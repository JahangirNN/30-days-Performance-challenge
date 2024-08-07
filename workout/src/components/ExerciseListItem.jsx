import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function ExerciseListItem({item}) {
  return( 
  <View style={styles.exerciseContainer}>
    <Text style={styles.exerciseName}>{item.name}</Text>
    <Text style={styles.exerciseSubtitle}>
      {item.muscle.toLocaleUpperCase()} | {item.equipment.toLocaleUpperCase()}
      </Text>
    <StatusBar style="auto" />
  </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'gainsboro',
      justifyContent: 'center',
      padding:10,
    },
    exerciseContainer:{
      backgroundColor:'#fff',
      padding:10,
      gap:5,
      borderRadius:10,
    },
    exerciseName: {
      fontSize: 20,
      fontWeight: '500'
    },
    exerciseSubtitle: {
      color:'dimgray'
    }
  });
  