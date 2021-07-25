import React from 'react';
import { Reactions } from './Reactions';
const List = ({ items, removeItem, editItem }) => {
  return (
    <div className='post-list'>

      {items.map((item) => {
        const { id, title, vlue } = item;
        return (
          <article className='post-item' key={id}>
            <div className='btn-container'>
              <button
                type='button'
                className='edit-btn'
                onClick={() => editItem(id)}
              >
                Edit
              </button>
              <button
                type='button'
                className='delete-btn'
                onClick={() => removeItem(id)}
              >
                Delete
              </button>
            </div>
            <p className='username'>User name:{vlue}</p>
            <p className='title'>Post:{title}</p>
            <Reactions />
          </article>
        );
      })}
    </div>
  );
};
export default List;