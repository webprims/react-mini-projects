import { useState } from 'react';

export default function App() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const addTask = (event) => {
    event.preventDefault();
    const cleanTask = task.trim();
    if (!cleanTask) return;
    setTasks([...tasks, { id: Date.now(), text: cleanTask }]);
    setTask('');
  };

  const removeTask = (id) => {
    setTasks(tasks.filter((item) => item.id !== id));
  };

  return (
    <main>
      <h1>Todo List</h1>
      <form onSubmit={addTask}>
        <input
          value={task}
          onChange={(event) => setTask(event.target.value)}
          placeholder="Add a task"
        />
        <button type="submit">Add</button>
      </form>

      <ul>
        {tasks.map((item) => (
          <li key={item.id}>
            {item.text}{' '}
            <button onClick={() => removeTask(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </main>
  );
}
