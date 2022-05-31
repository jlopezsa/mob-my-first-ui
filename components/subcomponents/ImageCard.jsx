import { View, StyleSheet, ImageBackground } from "react-native-web";

function ImageCard(props) {
  const { pictureUrl } = props;
  return (
    <View style={styles.image}>
      <ImageBackground source={{ uri: pictureUrl }}></ImageBackground>
    </View>

  );
}

const styles = StyleSheet.create({
  image: {
    height: 400,
    width: '30%',
    backgroundColor: "#878999",
    marginTop: 10,
  },
})
export default ImageCard;
