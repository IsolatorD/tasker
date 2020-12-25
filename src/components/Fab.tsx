import React from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Text,
  Dimensions
} from 'react-native';

const {height} = Dimensions.get('screen')

const Fab = (props) => {
  const toggleMenu = () => {

  }

  return (
    <TouchableOpacity
      style={styles.fab}
    >
      <Text
        style={styles.cross}
      >
        +
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  fab: {
    borderWidth:1,
    borderColor:'rgba(0,0,0,0.2)',
    alignItems:'center',
    justifyContent:'center',
    width:70,
    position: 'absolute',                                          
    bottom: 10,                                                    
    right: 10,
    height:70,
    backgroundColor:'#fff',
    borderRadius:100,
  },
  cross: {
    fontSize: 32
  }
})

export default Fab