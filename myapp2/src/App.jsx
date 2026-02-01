import { useState } from 'react'
import './App.css'

function App() {
  const [todos, setTodos] = useState([])
  const [input, setInput] = useState('')
  const [editingId, setEditingId] = useState(null)
  const [editingText, setEditingText] = useState('')

  const handleAddTodo = (e) => {
    e.preventDefault()
    const text = input.trim()
    if (!text) return

    setTodos((prev) => [
      ...prev,
      { id: Date.now(), text },
    ])
    setInput('')
  }

  const handleDeleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
    if (editingId === id) {
      setEditingId(null)
      setEditingText('')
    }
  }

  const startEditTodo = (id, text) => {
    setEditingId(id)
    setEditingText(text)
  }

  const handleUpdateTodo = (e) => {
    e.preventDefault()
    const text = editingText.trim()
    if (!text) return

    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === editingId ? { ...todo, text } : todo,
      ),
    )
    setEditingId(null)
    setEditingText('')
  }

  return (
    <div className="app">
      <h1 className="app-title">Todo List</h1>

      <form className="todo-form" onSubmit={handleAddTodo}>
        <input
          className="todo-input"
          type="text"
          placeholder="할 일을 입력하세요..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="todo-add-button" type="submit">
          추가
        </button>
      </form>

      <div className="todo-list-container">
        {todos.length === 0 ? (
          <p className="todo-empty-text">할 일이 없습니다. 새 할 일을 추가해 보세요.</p>
        ) : (
          <ul className="todo-list">
            {todos.map((todo) => (
              <li key={todo.id} className="todo-item">
                {editingId === todo.id ? (
                  <form className="todo-edit-form" onSubmit={handleUpdateTodo}>
                    <input
                      className="todo-input todo-input-edit"
                      type="text"
                      value={editingText}
                      onChange={(e) => setEditingText(e.target.value)}
                      autoFocus
                    />
                    <div className="todo-actions">
                      <button className="todo-save-button" type="submit">
                        저장
                      </button>
                      <button
                        className="todo-cancel-button"
                        type="button"
                        onClick={() => {
                          setEditingId(null)
                          setEditingText('')
                        }}
                      >
                        취소
                      </button>
                    </div>
                  </form>
                ) : (
                  <>
                    <span className="todo-text">{todo.text}</span>
                    <div className="todo-actions">
                      <button
                        className="todo-edit-button"
                        type="button"
                        onClick={() => startEditTodo(todo.id, todo.text)}
                      >
                        수정
                      </button>
                      <button
                        className="todo-delete-button"
                        type="button"
                        onClick={() => handleDeleteTodo(todo.id)}
                      >
                        삭제
                      </button>
                    </div>
                  </>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

export default App
