import ToDoItem from './ToDoItem';

function ToDoList({ tasks, onDelete, onToggle, onEdit }) {
  return (
    <ul className="todo-list">
      {tasks.map(task => (
        <ToDoItem
          key={task.id}
          task={task}
          onDelete={onDelete}
          onToggle={onToggle}
          onEdit={onEdit}
        />
      ))}
    </ul>
  );
}

export default ToDoList;
