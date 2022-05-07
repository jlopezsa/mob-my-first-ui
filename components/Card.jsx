import React from 'react'
import { View, Text } from 'react-native-web'

const data = [
    {
        name: "Julian",
        age: 38,
    },
    {
        name: "Jair",
        age: 30,
    }
]

function Card() {
  return (
      <View>
          <Text>Hello component</Text>
          <Text>{data[1].name}</Text>
      </View>
  )
}

export default Card