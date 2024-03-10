// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { useState } from "react";
import "./App.css";
import axios from "axios";
import { Todo } from "./todo";
import { TodoType } from "./types/todo";
import { Text } from "./Text";
import { UserProfile } from "./UserProfile";
import { User } from "./types/user";
import { TodoTableData, TodoTableHeader } from "./todoTable";

const user: User = { name: "太郎", hobbies: ["映画", "ゲーム"] };

function App() {
  const [todos, setTodos] = useState<Array<TodoType>>([]);

  const onClickFetchData = () => {
    axios.get<Array<TodoType>>("http://localhost:4000/json").then((res) => {
      console.log(res.data);
      if (Array.isArray(res.data)) {
        console.log("todos is an array", res.data);
      } else {
        console.error("todos is not an array", res.data);
      }
      setTodos(res.data);
    });
  };

  return (
    <div className="App">
      {/*
      <UserProfile user={user} />
      */}
      <Text color="red" fontSize="18" />
      <table>
        <tr>
          <td>
            <button onClick={onClickFetchData} className="border_btn01">
              データ取得
            </button>
          </td>
          <td>
            <button onClick={onClickFetchData} className="border_btn01">
              データ取得
            </button>
          </td>
          <td>
            <button onClick={onClickFetchData} className="border_btn01">
              データ取得
            </button>
          </td>
          <td>
            <button onClick={onClickFetchData} className="border_btn01">
              データ取得
            </button>
          </td>
          <td>
            <button onClick={onClickFetchData} className="border_btn01">
              データ取得
            </button>
          </td>
        </tr>
      </table>
      {/* {todos.map((todo) => (
        <Todo
          key={todo.id}
          title={todo.title}
          userId={todo.userId}
          completed={todo.completed}
        />
      ))} */}
      <table>
        <TodoTableHeader />
        {todos.map((todo) => (
          <TodoTableData
            key={todo.id}
            title={todo.title}
            userId={todo.userId}
            completed={todo.completed}
          />
        ))}
      </table>
    </div>
  );
}

export default App;
