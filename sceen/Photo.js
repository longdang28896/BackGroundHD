import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image, Dimensions } from 'react-native';
import ViewPager from '@react-native-community/viewpager';

import { Entypo } from '@expo/vector-icons';
import * as MediaLibrary from 'expo-media-library';
import * as FileSystem from 'expo-file-system';
import * as Permissions from 'expo-permissions';
import ActionButton from 'react-native-action-button';



export default function Photo({ route, navigation }) {
  const { duongdan_l } = route.params;
  const { duongdan_c } = route.params;
  const { duongdan_z } = route.params;
  const { title } = route.params;

  const { width_l } = route.params;
  const { height_l } = route.params;

  const { width_c } = route.params;
  const { height_c } = route.params;

  const { width_z } = route.params;
  const { height_z } = route.params;

  return (

    <View style={{ flex: 1 }}>


      <Image style={{ width: width, height: height, borderRadius: 5 }}
        source={{ uri: duongdan_l }}
      />
      <Text style={styles.footer}>{title}</Text>
      {/* <FloatButton mydata={duongdan_l} style={styles.btn}/> */}




      {/* Rest of the app comes ABOVE the action button component !*/}
      <ActionButton buttonColor="rgba(231,76,60,1)" style={{ bottom: 30, right: -10 }}  >
        <ActionButton.Item buttonColor='#9b59b6' title={[width_l + ' x ' + height_l]} onPress={() => {
          FileSystem.downloadAsync(
            duongdan_l,
            FileSystem.documentDirectory + 'b.jpg'
          )
            .then(({ uri }) => {
              console.log('Finished downloading to ', uri);
              MediaLibrary.saveToLibraryAsync(uri);
              alert("Download thành công");
            })
            .catch(error => {
              console.error(error);
            });
        }}>
          <Entypo name="download" size={20} color="#fff" />
        </ActionButton.Item>
        <ActionButton.Item buttonColor='#3498db' title={[width_c + ' x ' + height_c]} onPress={() => {
          FileSystem.downloadAsync(
            duongdan_c,
            FileSystem.documentDirectory + 'b.jpg'
          )
            .then(({ uri }) => {
              console.log('Finished downloading to ', uri);
              MediaLibrary.saveToLibraryAsync(uri);
              alert("Download thành công");
            })
            .catch(error => {
              console.error(error);
            });
        }}>
          <Entypo name="download" size={20} color="#fff" />
        </ActionButton.Item>
        <ActionButton.Item buttonColor='#1abc9c' title={[width_z + ' x ' + height_z]} onPress={() => {
          FileSystem.downloadAsync(
            duongdan_z,
            FileSystem.documentDirectory + 'b.jpg'
          )
            .then(({ uri }) => {
              console.log('Finished downloading to ', uri);
              MediaLibrary.saveToLibraryAsync(uri);
              alert("Download thành công");
            })
            .catch(error => {
              console.error(error);
            });
        }}>
          <Entypo name="download" size={20} color="#fff" />
        </ActionButton.Item>
      </ActionButton>




    </View>


  );
}
const { height, width } = Dimensions.get('window');
const size = width;
const styles = StyleSheet.create({

  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  footer: {
    color: 'white',
    position: 'absolute',
    bottom: 20,
    right: 0,
    left: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 'bold',
  },

  btn: {
    flex: 1,

  }

});





