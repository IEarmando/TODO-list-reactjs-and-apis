import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
import ListTask from './components/list.jsx';
import Title from './components/title.jsx';
import ItemList from './components/item_list.jsx';
import { Link } from 'react-router';
import { useEffect } from 'react';
import { getPosts } from './services/api.js';
import { getUsers} from './services/api.js';





function App() {
  const [tasks, setTasks] = useState([]);
  const [inputTask, setInputTask] = useState('');

  const removeTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };


  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  useEffect(() => {
    getPosts().then(post => console.log(post));
  }, []);

  useEffect(() => {
    getUsers().then(users => console.log(users));
  }, []);

  return (
    <>
      <Title>TO DO List</Title>
      <Link to="/about">About</Link>
      
      <br />
      <input type="text" placeholder='Add a new task' value={inputTask} onChange={(e) => setInputTask(e.target.value)} />
      <button onClick={() => addTask({inputTask})}>Add task</button>
      <ListTask>
        {tasks.map((task, index) => (
          <ItemList key={index}>{task.inputTask} <button onClick={() => removeTask(index)}>Remove</button></ItemList>
        ))}
      </ListTask>
    </>
  )
}

export default App
