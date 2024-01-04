import React from 'react';
import { useState } from 'react';
import { toast } from 'react-toastify';

export const Buttons = ({ todos, setTodos }) => {
  const [confirm, setConfirm] = useState('');
  return (
    <div className='container  '>
      <div className='d-flex justify-content-center gap-5 pb-5 '>
        {todos.length ? (
          <button
            className='btn btn-danger'
            onClick={() => {
              const isConfirm = prompt(
                'siz barcha todolarni ochirmoqchimisiz agar ha bolsa "OK" deb yozing'
              );
              if (isConfirm == 'OK') {
                return (
                  localStorage.clear() &
                  setTodos([]) &
                  toast.success('Todolar barchasi ochirildi')
                );
              }
              return toast.error('Todolar ochirilmadi');
            }}
          >
            Delete All
          </button>
        ) : (
          ''
        )}
      </div>
    </div>
  );
};
