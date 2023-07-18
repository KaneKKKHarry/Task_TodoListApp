import React, {useState} from 'react';
import { ReactDOM } from 'react-dom';
import './App.css';

function App() {

  // 表示データの格納
  const [todoLists, setTodoLists] = useState([]);
  const [content, setContent] = useState('')
  const [todoId, setTodoId] = useState(todoLists.length + 1)
  const [status, setStatus] = useState(['未着手','進行中','完了'])
  
  // 入力内容のIDを取得する処理
  const handleChange = (e) => {
    setContent(e.target.value)
  }

  // 新しいTODOを配列に代入
  const handleAddTodo = () => {
    setTodoLists([...todoLists, {id: todoId, title: content}])
    setTodoId(todoId + 1)
    setContent('')
  }

  // Listを削除する処理
  const deleteList = (targetTodo) => {
    setTodoLists(todoLists.filter((todo) => todo !== targetTodo))
  }

  return (
    <>
      <h1 style={{textAlign: 'center'}}>TodoList</h1>
      <div style={{textAlign: 'center'}}>
        <input 
          type='text'
          label='タイトル'
          onChange={handleChange}
          value={content}
          style={{width: '250px'}}
          />
          <button onClick={handleAddTodo} style={{marginLeft: '10px'}}>追加</button>
      </div>
      <div style={{margin: '50px'}}>
        <ol>
          {todoLists.map((todo) => (
          <li key={todo.id} style={{marginBottom: '10px', width: '300px', padding: '5px'}}>
            <span>{todo.title}</span>
            <button style={{marginLeft: '20px'}} onClick={() => deleteList(todo)}>削除</button>
          </li>
          ))}
        </ol>
      </div>
    </>
  );
}

export default App;
