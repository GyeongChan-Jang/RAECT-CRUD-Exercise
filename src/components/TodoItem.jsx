import React from 'react'

const TodoItem = ({ todos, todoRemoveHandler, todoDoneHandler, done }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      {todos.done && <p>완료!</p>}
      <p>{todos.date}</p>
      <p>{todos.content}</p>
      <button onClick={() => todoRemoveHandler(todos.id)}>삭제</button>
      <button onClick={() => todoDoneHandler(todos.id)}>완료</button>
    </div>
  )
}

export default TodoItem
