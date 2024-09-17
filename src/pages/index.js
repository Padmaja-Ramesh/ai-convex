// src/pages/index.js
import TodoCategories from './components/TodoCategories';  // Ensure this path is correct

export default function Home() {
  return (
    <div>
      <h1>Task Management</h1>
      <TodoCategories />
    </div>
  );
}
