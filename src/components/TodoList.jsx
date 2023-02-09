import TodoItem from './TodoItem';

const TodoList = ({ todos, updateTodo, deleteTodo }) => {
  return (
    <div className="mt-8 rounded-t-md bg-white [&>article]:p-4">
      {todos.map((todo) => (
        <TodoItem
          updateTodo={updateTodo}
          deleteTodo={deleteTodo}
          key={todo.id}
          todo={todo}
        />
      ))}
    </div>
  );
};

export default TodoList;
