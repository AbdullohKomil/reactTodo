import { useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './assets/styles/index.css';
import { List } from './component/List';
import { Item } from './component/Item/';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Buttons } from './component/Buttons/Buttons';

function App() {
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem('todos')) || []
  );

  const inputValue = useRef();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    setTodos([
      ...todos,
      {
        id: todos.at(-1)?.id + 1 || 1,
        isCompleted: false,
        text: inputValue.current.value,
      },
    ]);
    inputValue.current.value = '';
    toast('todo qoshildi!');
  };

  return (
    <div>
      <h1 className='display-2 fw-bold text-center my-3'>TODO APP</h1>
      <form onSubmit={handleSubmit} className='w-50 mx-auto p-5 shadow todo__form'>
        <div className='input-group'>
          <input
            required
            ref={inputValue}
            type='text'
            className='form-control'
            placeholder='Todo...'
          />
          <button className='btn btn-primary' type='submit'>
            SEND
          </button>
        </div>
      </form>
      {todos.length ? (
        <List>
          {todos.map((el) => (
            <Item
              key={el.id}
              todos={todos}
              setTodos={setTodos}
              id={el.id}
              isCompleted={el.isCompleted}
              text={el.text}
            />
          ))}
        </List>
      ) : (
        <h2 className='text-center h2 mt-5 pb-4 '>Todolar mavjus emas</h2>
      )}
      <Buttons todos={todos} setTodos={setTodos} />
      <ToastContainer
        position='top-right'
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='light'
      />
    </div>
  );
}

export default App;
