import { View, Text, StyleSheet } from "react-native-web";

function ContentAuthor(props) {
  const { authorName, aboutInfo} = props;
  return (
    <View>
      <Text style={styles.about}>{aboutInfo}</Text>
      <Text>by {authorName}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  about: {
    fontWeight: 'bold',
    marginBottom: 10,
  }
})

export default ContentAuthor;
