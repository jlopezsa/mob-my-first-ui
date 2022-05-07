import React from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native-web";

function Card(props) {
  return (
    <View style={styles.container}>
      <View style={styles.image}>
        <ImageBackground source={{ uri: props.picture }}></ImageBackground>
      </View>
      <View style={styles.content}>
        <Text style={styles.about}>{props.about}</Text>
        <Text>by {props.author}</Text>
        <Text style={styles.tags}>
          {props.tags.map((item) => {
            return <Text key={item.id} style={styles.tag}>{item} </Text>;
          })}
        </Text>
        <Text>{props.comments.length} comments</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 300,
    width: '100%',
    flex: 1,
    flexDirection: "row",
  },
  image: {
    height: 370,
    width: '30%',
    backgroundColor: "#878999",
    marginTop: 10,
  },
  content: {
    height: 370,
    width: '70%',
    backgroundColor:"#cccccc",
    marginTop: 10,
    padding: 10,
  },
  about: {
    fontWeight: 'bold',
    marginBottom: 10,
  },
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
  }
});

export default Card;
