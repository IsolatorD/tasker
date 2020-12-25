import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions
} from 'react-native';

const { width, height } = Dimensions.get('screen')

const BoxText = (props) => {
  return (
    <TouchableOpacity
      style={styles.card}
      onPress={props.onPress}
    >
      <View
        style={styles.cardContainer}
      >
        <Text
          style={styles.cardTitle}
        >
          {
            props.title.length > 40 ?
              `${props.title.substring(0, 40)}...`
            :
              props.title
          }
        </Text>
        <Text
          style={styles.cardText}
        >
          {props.created_at}
        </Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  card: {
    width: width / 2.6,
    height: height / 5,
    marginVertical: 10,
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderWidth: .3,
    borderRadius: 5
  },
  cardContainer: {
    flex: 1,
    justifyContent: 'space-between',
    paddingVertical: 10
  },
  cardTitle: {
    fontSize: 22,
    fontWeight: '700'
  },
  cardText: {
    fontSize: 14
  }
})

export default BoxText