import React from 'react';
import { View, Text, StyleSheet } from 'react-native-web';

function TagsAuthor(props) {
  const { tagsInfo } = props;
  return (
    <View>
      <Text style={styles.tags}>
        {tagsInfo.map((item,idx) => {
          return <Text key={idx} style={styles.tag}>{item} </Text>;
        })}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  tags: {
    margin: 10,
    height: 50,
  },
  tag: {
    backgroundColor: "#4c4c4c",
    color: "white",
    width: 100,
    margin: 5,
    height: 30,
    borderRadius: 5,
    padding: 2,
  },
})
export default TagsAuthor;
