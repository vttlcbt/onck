import { Pressable, StyleSheet, Text, TextInput, View } from "react-native"
import React, { useEffect } from "react"
import { connect } from "react-redux"

function Test({ add, remove, update, state, init }) {
  const [password, setPassword] = React.useState("")
  const [todo, setTodo] = React.useState("")

  return (
    <View style={styles.container}>
      <TextInput
        value={password}
        onChangeText={setPassword}
        style={styles.input}
        placeholder="Enter your password"
      ></TextInput>
      <TextInput
        value={todo}
        onChangeText={setTodo}
        style={styles.input}
        placeholder="Enter your todo"
      ></TextInput>
      <Pressable
        style={styles.btn}
        onPress={() => {
          add({
            password: password,
            todo: todo,
          })
          console.log({ password: password, todo: todo })
        }}
      >
        Add
      </Pressable>
      {state.map((item) => (
        <View
          key={item.id}
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            width: "50%",
          }}
        >
          <Text>
            {item.id}-{item.password} {item.todo.map((todo) => todo)}
          </Text>

          <Pressable
            onPress={() => {
              remove(item.id)
            }}
          >
            <Text>X</Text>
          </Pressable>
          <Pressable
            onPress={() => {
              update({
                id: item.id,
                password: password,
                todo: todo,
              })
            }}
          >
            <Text>Update</Text>
          </Pressable>
        </View>
      ))}
    </View>
  )
}
var mapStateToProps = (state) => {
  return { state }
}
var mapDispatchToProps = (dispatch) => ({
  add: (obj) =>
    dispatch({
      type: "ADD",
      payload: {
        password: obj.password,
        todo: obj.todo,
      },
    }),
  remove: (id) => dispatch({ type: "REMOVE", payload: id }),
  init: (obj) => dispatch({ type: "INIT", payload: obj }),
  update: (obj) =>
    dispatch({
      type: "UPDATE",
      payload: { id: obj.id, password: obj.password, todo: obj.todo },
    }),
})
export default connect(mapStateToProps, mapDispatchToProps)(Test)

const styles = StyleSheet.create({
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
  container: {
    flex: 1,
    backgroundColor: "#C2FFD4",
    alignItems: "center",
    justifyContent: "center",
  },
})
