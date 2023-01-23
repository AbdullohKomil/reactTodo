import 'react-toastify/dist/ReactToastify.css';
import {  toast } from 'react-toastify';

export const Item = ({ text, id, isCompleted, todos, setTodos }) => {
  const handleDelete = (todoId) => {
    const filteredTodos = todos.filter((todo) => {
      if (todo.id !== todoId) {
        return todo
      } 
      else if (todos.length <= 1) {
        localStorage.removeItem('todos')
      }
    });
    setTodos([...filteredTodos]);
    toast.error('todo ochirildi!');
    console.log(todos);
  };

  const handleEdit = (id, text) => {
    const newText = prompt('Yangi todoni kiriting', text);
    const findedTodo = todos.find((todo) => todo.id === id);
    findedTodo.text = newText;
    setTodos([...todos]);
    toast.warning('text almashtirildi!');
  };

  const handleChange = (todoId) => {
    const findedTodo = todos.find((todo) => todo.id === todoId);
    findedTodo.isCompleted = !findedTodo.isCompleted;
    setTodos([...todos]);
    if (findedTodo.isCompleted) {
      toast.success('todo bajarildi!');
    }
  };

  localStorage.setItem('todos', JSON.stringify(todos));

  return (
    <li className='list-group-item d-flex align-items-center'>
      <span>{id}</span>
      <input
        onChange={() => handleChange(id)}
        checked={isCompleted}
        type='checkbox'
        className='form-check-input mx-3'
      />
      <strong
        className={
          isCompleted ? 'text-decoration-line-through text-success' : ''
        }
      >
        {text}
      </strong>
      <button
        onClick={() => handleEdit(id, text)}
        className='btn btn-warning mx-3 ms-auto'
      >
        EDIT
      </button>
      <button
        onClick={() => handleDelete(id)}
        className='btn btn-danger'
      >
        DELETE
      </button>
    </li>
  );
};
