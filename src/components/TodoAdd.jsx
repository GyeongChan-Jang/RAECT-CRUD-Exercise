import React, { useState } from 'react'

const TodoAdd = ({ todoAddHandler }) => {
  const [userInput, setUserInput] = useState({ date: '', content: '' })

  const inputHandler = (event) => {
    const { value, name } = event.target
    setUserInput({ ...userInput, [name]: value, done: false })
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
