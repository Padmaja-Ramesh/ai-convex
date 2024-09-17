import { useState } from 'react';
import styles from '../../styles/Todo.module.css';

export default function TodoList({ title, tasks, addTask }) {
  const [task, setTask] = useState('');

  const handleAddTask = (e) => {
    e.preventDefault();
    if (task.trim()) {
      addTask(task);
      setTask('');
    }
  };

  return (
    <div className={styles.todoCategory}>
      <h3>{title}</h3>
      <ul>
        {tasks && Array.isArray(tasks) && tasks.length > 0 ? (
          tasks.map((task, index) => <li key={index}>{task}</li>)
        ) : (
          <p>No tasks available</p>
        )}
      </ul>

      <form onSubmit={handleAddTask}>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Add a task"
        />
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
}
