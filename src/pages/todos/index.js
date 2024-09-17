import { useState } from 'react';
import TodoList from '../components/TodoList';

export default function TodoPage() {
  // State to manage task categories with user input
  const [todoData, setTodoData] = useState([
    { id: 1, title: "Newly Arrived", tasks: [] },
    { id: 2, title: "Ordered", tasks: [] },
    { id: 3, title: "Payment Received", tasks: [] },
    { id: 4, title: "Shipment Done", tasks: [] },
    { id: 5, title: "Order Completed", tasks: [] },
  ]);

  // Function to add tasks to the correct category based on user input
  const addTask = (categoryTitle, task) => {
    setTodoData((prevData) =>
      prevData.map((category) =>
        category.title === categoryTitle
          ? { ...category, tasks: [...category.tasks, task] }
          : category
      )
    );
  };

  return (
    <div>
      <h1>To-Do Lists</h1>
      {todoData.map((todo) => (
        <TodoList
          key={todo.id}
          title={todo.title}
          tasks={todo.tasks}
          addTask={addTask}
        />
      ))}
    </div>
  );
}
