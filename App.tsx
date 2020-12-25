import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Modal,
} from 'react-native';

import BoxText from './src/components/BoxText'
import ModalForm from './src/components/ModalForm'
import Button from './src/components/Button'

const App = () => {
  const [tasks, setTasks] = useState([])
  const [modalVisible, setModalVisible] = useState(false)
  const [editData, setEditData] = useState(null)

  const addTask = (data) => {
    let tasksL = tasks
    if (data.position !== null) {
      tasksL[data.position].value = data.value
      tasksL[data.position].created_at = new Date().toDateString()
      setTasks(tasksL)
      setEditData(null)
    } else {
      setTasks([...tasksL, {
        value: data.value,
        created_at: new Date().toDateString()
      }])
    }
    setModalVisible(false)
  }
  
  const closeModal = () => {
    setEditData(null)
    setModalVisible(false)
  }

  const openModal = (data = null, position = null) => {
    if (data) {
      setEditData({value: data, position})
    }
    setModalVisible(true)
  }

  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView
        style={styles.safe}
      >
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <View style={styles.body}>
            <View
              style={styles.header}
            >
              <Text
                style={styles.titleText}
              >
                Tasker
              </Text>
              <Button
                onPress={() => openModal()}
                buttonText={'Add'}
              >
              </Button>
            </View>
            <View style={styles.sectionSubTitle}>
              <Text
                style={styles.subtitleText}
              >
                List
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              {
                tasks.length > 0 ?
                  tasks.map((el, i) => (
                    <BoxText
                      key={i}
                      title={el.value}
                      created_at={el.created_at}
                      onPress={() => openModal(el.value, i)}
                    />
                  ))
                :
                <Text
                  style={styles.empty}
                >
                  Empty notes.
                </Text>
              }
            </View>
          </View>
          {modalVisible &&
            <ModalForm
              modalVisible={modalVisible}
              close={closeModal}
              editData={editData}
              onSave={addTask}
            />
          }
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  safe: {
    flex: 1,
  },
  scrollView: {
    backgroundColor: '#FFFFFF'
  },
  header: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    // borderWidth: 1,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30,
  },
  titleText: {
    fontSize: 38,
    fontWeight: 'bold'
  },
  body: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
    paddingVertical: 10
  },
  empty: {
    fontSize: 20,
    paddingTop: 30,
    color: '#a5a5a5'
  },
  sectionSubTitle: {
    paddingHorizontal: 10,
    paddingVertical: 15,
  },
  subtitleText: {
    fontSize: 30,
    fontWeight: 'bold'
  },
  sectionContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 15
  }
});

export default App;
