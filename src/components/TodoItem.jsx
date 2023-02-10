import IconCheck from './icons/IconCheck';
import IconCross from './icons/IconCross';

const TodoItem = ({ todo, updateTodo, deleteTodo }) => {
  const { id, title, completed } = todo;

  return (
    <article className="flex gap-4 border-b border-b-gray-40">
      <button
        onClick={() => updateTodo(id)}
        className={`h-5 w-5 rounded-full border-2 ${
          completed
            ? 'flex items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'
            : 'inline-block  items-center justify-center'
        }`}
      >
        {completed && <IconCheck />}
      </button>
      <p
        className={`grow text-gray-600 transition-all dark:text-gray-400 duration-1000${
          completed && 'line-through'
        } transition-all duration-1000`}
      >
        {title}
      </p>
      <button onClick={() => deleteTodo(id)}>
        <IconCross />
      </button>
    </article>
  );
};

export default TodoItem;
