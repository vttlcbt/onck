import React from "react"
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native"
import { connect } from "react-redux"

const TestNavi = ({ navigation, state, setname }) => {
  console.log(state)
  const [text, setText] = React.useState("")
  const checkLogin = (email) => {
    fetch("https://653f22a09e8bd3be29dffb3c.mockapi.io/Todos?email=" + email)
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        if (data.length > 0) {
          if (data[0].email === email) {
            setname(data[0].email)
            navigation.navigate("Test")
          }
        } else {
          alert("Sai email")
        }
      })
  }
  return (
    <View style={styles.container}>
      <Text>TestNavi</Text>
      <TextInput
        value={text}
        onChangeText={setText}
        style={styles.input}
      ></TextInput>
      <Pressable
        onPress={() => {
          checkLogin(text)
        }}
        style={styles.btn}
      >
        Click
      </Pressable>
    </View>
  )
}

var mapStateToProps = (state) => {
  return { state: state.name }
}
var mapDispatchToProps = (dispatch) => ({
  setname: (text) => dispatch({ type: "SETNAME", payload: text }),
})
export default connect(mapStateToProps, mapDispatchToProps)(TestNavi)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFADAD",
    alignItems: "center",
    justifyContent: "center",
  },

  btn: {
    backgroundColor: "#ffffff",
    width: 80,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    height: 40,
    width: "90%",
    borderWidth: 1,
  },
})
