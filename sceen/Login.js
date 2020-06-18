import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function Login({ navigation }) {
  const [text, setText] = useState();
  const [name, setName] = useState();
  const [pass, setPass] = useState();


  return (
    <View style={styles.container}>
      <TextInput
        style={{ height: 40, marginBottom: 10, paddingLeft: 10, borderColor: 'red', borderWidth: 1, borderRadius: 10, width: 250 }}
        placeholder='Email Address'

        onChangeText={text => setName(text)}
        value={name}
      />

      <TextInput
        style={{ height: 40, marginBottom: 10, paddingLeft: 10, borderColor: 'red', borderWidth: 1, borderRadius: 10, width: 250 }}
        placeholder='PassWord'
        secureTextEntry={true}
        onChangeText={text => setPass(text)}
        value={pass}
      />
      <Button
        title="Login"
        color="red"
        onPress={() => {
          fetch('https://jsonplaceholder.typicode.com/posts/1', {
            method: 'POST',
            body: JSON.stringify({
              title: name,
              body: pass,
              userId: 1
            }),
            headers: {
              "Content-type": "application/json; charset=UTF-8"
            }
          })

            .then(response => response.json())
            .then(json => {

              if (name == null || pass == null) {
                alert("Bạn chưa nhập tài khoản mật khẩu");
              } else {
                if (name == 'Admin' && pass == "admin") {
                  alert("Đăng nhập thành công");
                  navigation.navigate('Picture');
               
                } else {
                  alert("Tài khoảng hoặc mật khẩu không đúng !!!");
                }
              }
            })
        }}

      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
