import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions
} from 'react-native';

const {width} = Dimensions.get('screen')

const Button = (props) => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={[
        styles.button,
        props.block ?
          styles.buttonBlock
          : props.round ?
            styles.buttonIcon
          :
            styles.buttonNormal
      ]}
    >
      <Text
        style={styles.buttonText}
      >
        {props.buttonText}
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonNormal: {
    width: 80,
    height: 40,
    borderRadius: 5,
  },
  buttonBlock: {
    width,
    height: 40
  },
  buttonIcon: {
    width: 35,
    height: 35,
    borderRadius: 20
  },
  buttonText: {
    fontSize: 14,
    fontWeight: 'bold'
  }
})

export default Button