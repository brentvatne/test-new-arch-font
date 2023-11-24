import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Image } from 'expo-image';
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts } from 'expo-font';
import { Ionicons } from '@expo/vector-icons'

export default function App() {
  const [fontsLoaded] = useFonts({
    'Inter-Black': require('./assets/fonts/Inter-Black.otf'),
    'Ephesis-Regular': require('./assets/fonts/Ephesis-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#232526', '#66686a']}
        style={{ position: 'absolute', left: 0, right: 0, top: 0, bottom: 0 }}
      />

      <Ionicons name="ios-checkmark-circle-outline" size={100} color="white" />

      <Text style={{ fontSize: 22, marginTop: 15, color: '#fff', fontFamily: 'Inter-Black' }}>
        New Architecture (Inter-Black)
      </Text>

      <Text style={{ fontSize: 22, marginTop: 15, color: '#fff', fontFamily: 'Ephesis-Regular' }}>
        New Architecture (Ephesis-Regular)
      </Text>

      <Text style={{ fontSize: 22, marginTop: 15, color: '#fff' }}>
        New Architecture (System font)
      </Text>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
