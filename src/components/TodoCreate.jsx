

const TodoCreate = () => {
  return (
    <form className="mt-8 flex items-center gap-4 overflow-hidden rounded-md bg-white py-4 pl-4">
      <span className="inline-block h-5 w-5 rounded-full border-2"></span>
      <input
        className="w-full text-gray-400 outline-none"
        type="text"
        placeholder="create a new todo..."
      />
    </form>
  );
};

export default TodoCreate;
