import { DragDropContext } from '@hello-pangea/dnd';
import { v4 as uuid } from 'uuid';
import { useEffect, useState } from 'react';
import Header from './components/Header';
import TodoComputed from './components/TodoComputed';
import TodoCreate from './components/TodoCreate';
import TodoFilter from './components/TodoFilter';
import TodoList from './components/TodoList';

const initialState = JSON.parse(localStorage.getItem('todos')) || [];

const App = () => {
  const [todos, setTodos] = useState(initialState);
  const [filter, setFilter] = useState('all');

  const computedItemsLeft = todos?.filter((t) => !t.completed).length;

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const createTodo = (title) => {
    const newTodo = {
      id: uuid(),
      title: title.trim(),
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const updateTodo = (id) => {
    const newTodos = todos.map((t) => {
      if (t.id === id) {
        t.completed = !t.completed;
      }
      return t;
    });
    setTodos(newTodos);
  };

  const deleteTodo = (id) => {
    const newTodos = todos?.filter((t) => {
      if (t.id !== id) return t;
    });
    setTodos(newTodos);
  };

  const clearCompleted = () => {
    const newTodos = todos?.filter((t) => !t.completed);
    setTodos(newTodos);
  };

  const filteredTodos = () => {
    switch (filter) {
      case 'all':
        return todos;
      case 'active':
        return todos?.filter((t) => !t.completed);
      case 'completed':
        return todos?.filter((t) => t.completed);
      default:
        return todos;
    }
  };

  const changeFilter = (filter) => {
    setFilter(filter);
  };

  const handleDragEnd = (result) => {
    if (!result.destination) {
      return;
    }
    const startIndex = result.source.index;
    const endIndex = result.destination.index;
    const copyArray = [...todos];
    const [reorderedItem] = copyArray.splice(startIndex, 1);
    copyArray.splice(endIndex, 0, reorderedItem);
    setTodos(copyArray);
  };

  return (
    <div
      className="min-h-screen bg-gray-300 bg-[url('./assets/images/bg-mobile-light.jpg')] 
    bg-contain bg-no-repeat transition-all duration-1000 
    dark:bg-gray-900 dark:bg-[url('./assets/images/bg-mobile-dark.jpg')] 
    md:bg-[url('./assets/images/bg-desktop-light.jpg')] md:dark:bg-[url('./assets/images/bg-desktop-dark.jpg')]"
    >
      <Header />
      <main className="container mx-auto mt-8 px-4 md:max-w-xl">
        <TodoCreate createTodo={createTodo} />
        <DragDropContext onDragEnd={handleDragEnd}>
          <TodoList
            todos={filteredTodos()}
            updateTodo={updateTodo}
            deleteTodo={deleteTodo}
            handleDragEnd={handleDragEnd}
          />
        </DragDropContext>
        <TodoComputed
          computedItemsLeft={computedItemsLeft}
          clearCompleted={clearCompleted}
        />
        <TodoFilter filter={filter} changeFilter={changeFilter} />
      </main>
      <footer className="mt-8 text-center dark:text-gray-400">
        Drag and drop to reorder list
      </footer>
    </div>
  );
};

export default App;
