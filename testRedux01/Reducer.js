var initalState = []

function reducer(state = initalState, action) {
  switch (action.type) {
    case 'INIT':
      return state === action.payload
    case 'ADD':
      return [
        ...state,
        {
          id: state.length + 1,
          password: action.payload.password,
          todo: [action.payload.todo],
        },
      ]
    case 'REMOVE':
      return state.filter((item) => item.id !== action.payload)
    case 'UPDATE':
      return state.map((item) => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            password: action.payload.password,
            todo: [action.payload.todo],
          }
        }
        return item
      })
    default:
      return state
  }
}

export default reducer
