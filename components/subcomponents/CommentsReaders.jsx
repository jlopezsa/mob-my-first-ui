import React from 'react';
import { View, StyleSheet, ImageBackground, Text } from 'react-native-web';

function CommentsReaders(props) {
  const iconComments = 'https://cdn-icons-png.flaticon.com/512/1380/1380338.png';

  const { commentsInfo } = props;
  return (
    <View style={styles.comments}>
      <ImageBackground source={{ uri: iconComments }} style={styles.imageIcon}>
      </ImageBackground>
      <Text>{commentsInfo.length} comments</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  comments:{
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  imageIcon:{
    marginTop: 15,
    height: 30,
    width: 30,
  }
});

export default CommentsReaders;
