import React, { useState } from 'react';
import Header from './components/Header';
import TodoComputed from './components/TodoComputed';
import TodoCreate from './components/TodoCreate';
import TodoFilter from './components/TodoFilter';
import TodoList from './components/TodoList';

const initialState = [
  {id:1,title:'Go to the gym', completed:true},
  {id:2,title:'Meditation', completed:false},
  {id:3,title:'Study english', completed:false},
  {id:4,title:'Pick up groceries', completed:false},
  {id:5,title:'Do Homework', completed:false},
]


const App = () => {

  const [todos,setTodos] = useState(initialState);

  return (
    <div className="bg-gray-300 bg-[url('./assets/images/bg-mobile-light.jpg')] bg-contain bg-no-repeat">
      <Header />
      <main className="container mx-auto mt-8 px-4">
        <TodoCreate />
        <TodoList todos={todos}/>
        <TodoComputed />
        <TodoFilter />
      </main>
      <footer className="mt-8 text-center">
        Drag and drop to reorder list
      </footer>
    </div>
  );
};

export default App;
