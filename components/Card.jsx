import React from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native-web";

function Card(props) {
  return (
    <View style={styles.container}>
      <View style={styles.image}>
        <ImageBackground source={{ uri: props.picture }}></ImageBackground>
      </View>
      <View style={styles.content}>
        <Text>{props.about}</Text>
        <Text>by {props.author}</Text>
        <Text>
          {props.tags.map((item) => {
            return <Text key={item.name} style={styles.tag}>{item} </Text>;
          })}
        </Text>
        <Text>{props.comments.length} comments</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 250,
    width: '100%',
    flex: 1,
    flexDirection: "row",
  },
  image: {
    height: 270,
    width: '30%',
    backgroundColor: "blue",
    marginTop: 10,
  },
  content: {
    height: 270,
    width: '70%',
    backgroundColor: "red",
    marginTop: 10,
  },
  tag: {
    backgroundColor: "yellow",
    width: 100,
    margin: 5,
  }
});

export default Card;
