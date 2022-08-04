import React, { useRef, useState, useReducer, useEffect } from 'react'
import TodoDummy from '../TodoDummy'
import TodoItem from './TodoItem'
import TodoAdd from './TodoAdd'
import { todoReducer } from './reducer/todoReducer'

const TodoList = () => {
  const todoId = useRef(6)

  const [todoData, dispatch] = useReducer(todoReducer, TodoDummy)

  useEffect(() => {
    console.log('todoData', todoData)
  }, [todoData])

  // todoRemoveHandler를 todoList에서 만든 이유
  // -> TodoItem에서 정의할 경우 item이 렌더링 되면서 함수도 재차 렌더링 되는 것을 피하기 위해서!
  const todoRemoveHandler = (id) => {
    dispatch({ type: 'REMOVE', payload: { id } })
  }

  // 액션 페이로드는 객체로 보내야함!
  const todoDoneHandler = (id) => {
    dispatch({ type: 'DONE', payload: { id } })
  }

  const todoAddHandler = (userInput, e) => {
    e.preventDefault()
    dispatch({ type: 'ADD', payload: { ...userInput, id: todoId.current } })
    todoId.current++
  }

  return (
    <div>
      <TodoAdd todoAddHandler={todoAddHandler} />
      {todoData.map((item) => (
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
