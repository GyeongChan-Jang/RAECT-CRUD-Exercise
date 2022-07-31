import React, { useState } from 'react'

const TodoAdd = ({ todoId, todoItems, setTodoItems }) => {
  const [userInput, setUserInput] = useState({})

  const inputHandler = (event) => {
    const { value, name } = event.target
    setUserInput({ ...userInput, [name]: value })
  }

  const todoAddHandler = (userInput, e) => {
    e.preventDefault()
    setTodoItems([
      ...todoItems,
      { id: todoId.current, date: userInput.date, content: userInput.content, done: false }
    ])
    todoId.current += 1
  }

  return (
    <div>
      <form>
        <input name="date" type="date" onChange={inputHandler} />
        <input name="content" type="text" onChange={inputHandler} />
        <button onClick={(e) => todoAddHandler(userInput, e)}>추가</button>
      </form>
    </div>
  )
}

export default TodoAdd
