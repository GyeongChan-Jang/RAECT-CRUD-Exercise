export function todoReducer(state, action) {
  switch (action.type) {
    case 'ADD':
      return [...state, action.payload]
    case 'REMOVE':
      return state.filter((item) => item.id !== action.payload.id)
    case 'DONE':
      return
      state.map((item) =>
        item.id === action.payload.id
          ? {
              ...item,
              done: !item.done
            }
          : item
      )

    default:
      throw new Error(`Unexpected action ${action.type}`)
  }
}
