import React, { Fragment, useEffect, useState } from 'react'

const Listodos = () => {
  const [todos, setTodos] = useState([])

  const getTodos = async () => {
    try {
      const response = await fetch("http://localhost:5000/todos")
      const jsonData = await response.json()

      setTodos(jsonData)
    } catch (error) {
      console.error(error.message)
    }
  }

  // Load the todos value
  useEffect(() => {
    getTodos()
  },[])

  console.log(todos)
  return (
    <Fragment>
        <table class="table mt-5 text-center">
          <thead>
            <tr>
              <th>Description</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {todos.map(todo => (
              <tr>
                <td>{todo.description}</td>
                <td>Edit</td>
                <td>Delete</td>
              </tr>
            ))

            /*
              <tr>
                <td>John</td>
                <td>Doe</td>
                <td>john@example.com</td>
              </tr>
            */}
          </tbody>
        </table>
    </Fragment>
  )
}

export default Listodos
