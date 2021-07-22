import React, { useState, useEffect } from 'react';
import List from './List';
import Alert from './Alert';
import './Dashboard.css'
// import hcbgImage from "./login-page.png";
function App() {
  const [name, setName] = useState('');
  // const [userName, setUserName] = useState('');
  const [list, setList] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditID] = useState(null);
  const [alert, setAlert] = useState({ show: false, msg: '', type: '' });
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) { 
      showAlert(true, 'danger', 'There is nothing to be post');
    }
    // if (!userName ) {
    //   showAlert(true, 'danger', 'There is misssing user name in the post ');
    // }
    else if (name && isEditing) {
      setList(
        list.map((item) => {
          if (item.id === editID) {
            return { ...item, title: name };
          }
          return item;
        })
      );
      setName('');
      // setUserName('');
      setEditID(null);
      setIsEditing(false);
      showAlert(true, 'success', 'Post Edited');
    } else {
      showAlert(true, 'success', 'Post is saved');
      const newItem = { id: new Date().getTime().toString(), title:name };
      setList([...list, newItem]);
      setName('');
    }
  };

  const showAlert = (show = false, type = '', msg = '') => {
    setAlert({ show, type, msg });
  };
  const clearList = () => {
    showAlert(true, 'danger', 'Cleared all of your post till now');
    setList([]);
  };

  const removeItem = (id) => {
    showAlert(true, 'danger', 'Post removed');
    setList(list.filter((item) => item.id !== id));
  };
  const editItem = (id) => {
    const specificItem = list.find((item) => item.id === id);
    setIsEditing(true);
    setEditID(id);
    setName(specificItem.title);
    // setUserName(specificItem.vlue);
  };

  return (
    <section className='section-center'>
      <form className='post-form bgimage' onSubmit={handleSubmit}>
        {alert.show && <Alert {...alert} removeAlert={showAlert} list={list} />}

        <h3>Write your post here</h3>
        <div className='post-control'  >
          <input
            type='text'
            className='post'
            placeholder='Write what is on your mind today. :'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {/* <br />
          <input
            type='text'
            className='post'
            placeholder='User Name:'
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          /> */}
          <button type='submit' className='submit-btn'>
            {isEditing ? 'edit' : 'submit'}
          </button>
        </div>
      </form>
      {list.length > 0 && (
        <div className='post-container'>
          <h2>Now, here you will see the post uploaded till now:-</h2>
          <List items={list} removeItem={removeItem} editItem={editItem} />
          <button className='clear-btn' onClick={clearList}>
            Clear all the post
          </button>
        </div>
      )}
    </section>
  );
}

export default App;