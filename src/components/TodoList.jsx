import React, { useRef, useState } from 'react'
import TodoDummy from '../TodoDummy'
import TodoItem from './TodoItem'
import TodoAdd from './TodoAdd'

const TodoList = () => {
  const [todoItems, setTodoItems] = useState(TodoDummy)
  const todoId = useRef(6)

  // todoRemoveHandler를 todoList에서 만든 이유
  // -> TodoItem에서 정의할 경우 item이 렌더링 되면서 함수도 재차 렌더링 되는 것을 피하기 위해서!
  const todoRemoveHandler = (id) => {
    setTodoItems(todoItems.filter((item) => item.id !== id))
  }

  const todoDoneHandler = (id) => {
    console.log(todoItems)
    setTodoItems(todoItems.map((item) => (item.id === id ? { ...item, done: !item.done } : item)))
  }

  return (
    <div>
      <TodoAdd todoItems={todoItems} setTodoItems={setTodoItems} todoId={todoId} />
      {todoItems.map((item) => (
        <div key={item.id}>
          <TodoItem
            todos={item}
            todoRemoveHandler={todoRemoveHandler}
            todoDoneHandler={todoDoneHandler}
          />
        </div>
      ))}
    </div>
  )
}

export default TodoList
