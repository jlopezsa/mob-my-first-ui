import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { FlatList, ScrollView } from 'react-native-web';
import Card from './components/Card';
import { mokData } from './data/data';

function App() {
  return (
    <ScrollView>
      <Text style={styles.title}>Construyendo mi primer UI con React Native</Text>
      <Text style={styles.title}>Julián Jair López Salamanca sadsad</Text>
      <FlatList
        data={mokData}
        renderItem={({ item }) => <Card {...item} />}
        keyExtractor={item => item.id}
        numColumns={1}
        ListFooterComponent={() => (
          <Text style={styles.text}>End of file</Text>
        )}
        onEndReachedThreshold={0.5}
      />
      <StatusBar style="auto" />
    </ScrollView>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title:{
    fontWeight: 'bold',
    textAlign: 'center',
  },
  text: {
    color: "red",
    textAlign: 'center',
  }
});
