import React, { useEffect, useState } from 'react';
import Todo from './Todo';
import TodoInsert from './TodoInsert';
const TodoContainer = () => {
  const [todos, setTodos] = useState([]);
  const [isTodoUpdate, setIsTodoUpdate] = useState(false);
  const handleIsTodoUpdate = ()=>{
    setIsTodoUpdate(!isTodoUpdate)
  } 
  useEffect(() => {
    const getTodos = async () => {
      try {
        const response = await fetch("http://localhost:5000/todo");
        const datas = await response.json();
        return datas;
      } catch (error) {
        console.error(error)
      }
    }
    getTodos().then(setTodos).catch(console.error)
  }, [isTodoUpdate])
  console.log(todos)
  return (
    <div>
        <TodoInsert isTodoUpdate={isTodoUpdate} handleIsTodoUpdate={handleIsTodoUpdate}/>
      <p className='subTitle'>남은 할일 : <span>{todos&&todos.filter(({isChecked})=>!isChecked).length}개</span></p>
      {todos && todos.map((todo,i)=>(
        <Todo todo={todo} key={i} handleIsTodoUpdate={handleIsTodoUpdate} isTodoUpdate={isTodoUpdate} />
      ))}
    </div>
  );
};
export default TodoContainer;