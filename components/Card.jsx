import React from "react";
import { View, StyleSheet } from "react-native-web";
import CommentsReaders from "./subcomponents/CommentsReaders";
import ContentAuthor from "./subcomponents/ContentAuthor";
import ImageCard from "./subcomponents/ImageCard";
import TagsAuthor from "./subcomponents/TagsAuthor";

function Card(props) {
  return (
    <View style={styles.container}>
      <ImageCard pictureUrl={props.picture}/>
      <View style={styles.content}>
        <ContentAuthor authorName={props.author} aboutInfo={props.about} />
        <TagsAuthor tagsInfo = {props.tags} />
        <CommentsReaders commentsInfo={props.comments} />
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
  content: {
    height: 400,
    width: '70%',
    backgroundColor:"#cccccc",
    marginTop: 10,
    padding: 10,
  },
});

export default Card;
