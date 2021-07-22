import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';

const List = ({ items, removeItem, editItem }) => {
  return (
    
    <div className='post-list'>
      
      {items.map((item) => {
        const { id, title} = item;
        return (
          <article className='post-item' key={id}>
            <p className='title'>{title}</p>
            <div className='btn-container'>
              <button
                type='button'
                className='edit-btn'
                onClick={() => editItem(id)}
              >
                Edit{/* <FaEdit /> */}
              </button>
              <button
                type='button'
                className='delete-btn'
                onClick={() => removeItem(id)}
              >
                Delete{/* <FaTrash /> */}
              </button>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default List;