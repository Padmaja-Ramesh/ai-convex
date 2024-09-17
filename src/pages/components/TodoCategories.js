import { useState } from 'react';
import TodoList from './TodoList';
import styles from '../../styles/Todo.module.css';

export default function TodoCategories() {
  const [tasksByCategory, setTasksByCategory] = useState({
    newlyAdded: [],
    ordered: [],
    paymentReceived: [],
    shipmentDone: [],
    orderCompleted: [],
  });

  const addTask = (category, task) => {
    setTasksByCategory((prevTasks) => ({
      ...prevTasks,
      [category]: [...prevTasks[category], task],
    }));
  };

  return (
    <div className={styles.todoContainer}>
      <TodoList title="Newly Added" tasks={tasksByCategory.newlyAdded} addTask={(task) => addTask('newlyAdded', task)} />
      <TodoList title="Ordered" tasks={tasksByCategory.ordered} addTask={(task) => addTask('ordered', task)} />
      <TodoList title="Payment Received" tasks={tasksByCategory.paymentReceived} addTask={(task) => addTask('paymentReceived', task)} />
      <TodoList title="Shipment Done" tasks={tasksByCategory.shipmentDone} addTask={(task) => addTask('shipmentDone', task)} />
      <TodoList title="Order Completed" tasks={tasksByCategory.orderCompleted} addTask={(task) => addTask('orderCompleted', task)} />
    </div>
  );
}
