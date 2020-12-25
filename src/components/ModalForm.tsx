import React, { useEffect, useState } from "react";
import {
  Modal,
  StyleSheet,
  Text,
  View,
  TextInput
} from "react-native";

import Button from './Button'

const ModalForm = (props) => {
  const [note, setNote] = useState('')
  useEffect(() => {
    if (props.editData) {
      setNote(props.editData.value)
    } else {
      setNote('')
    }
  }, [props.editData])

  return (
    <Modal
      animationType="slide"
      visible={props.modalVisible}
      style={styles.modal}
    >
      <View style={styles.modalHeader}>
        <Text
          style={styles.modalTitle}
        >
          { !props.editData ?
              'New task'
              :
              'Edit task'
          }
        </Text>
        <View
          style={styles.modalExitButtonContainer}
        >
          <Button
            onPress={() => props.close()}
            buttonText={'X'}
            round
          ></Button>
        </View>
      </View>
      <View style={styles.modalBody}>
        <TextInput
          value={note}
          onChangeText={(e) => setNote(e)}
          style={styles.input}
          multiline={true}
          numberOfLines={100}
          placeholder={'What are you planning?'}
        />
      </View>
      <View
        style={styles.modalFooter}
      >
        <Button
          onPress={() => props.onSave({
            value: note,
            position: props.editData ? props.editData.position : null
          })}
          block
          buttonText={
            !props.editData ?
             'Create'
             :
             'Save'
          }
        >
        </Button>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    flex: 1,
  },
  modalHeader: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    // borderWidth: 1,
    height: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
  modalTitle: {
    flex: 1,
    fontSize: 18,
    fontWeight: 'bold'
  },
  modalExitButtonContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 5
  },
  modalBody: {
    flex: 3,
    // borderWidth: 1
  },
  input: {
    flex: 1,
    paddingHorizontal: 20,
    fontSize: 18,
    borderBottomWidth: 1,
    marginHorizontal: 30
  },
  modalFooter: {
    flex: 1,
    justifyContent: 'flex-end'
  },
});

export default ModalForm;