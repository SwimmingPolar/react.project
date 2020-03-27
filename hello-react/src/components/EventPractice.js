import React, { useState } from 'react';

const EventPractice = () => {
  const [form, setForm] = useState({
    username: '',
    message: ''
  });
  const { username, message } = form;

  const handleChange = (e) => {
    const nextForm = {
      ...form,
      [e.target.name]: e.target.value
    };
    setForm(nextForm);
  };
  const handleClick = (e) => {
    alert(`${username}: ${message}`);
    const nextForm = {};
    for (const state in form)
      if (Object.prototype.hasOwnProperty.call(form, state))
        nextForm[state] = '';
    setForm(nextForm);
  }
  return (
    <div>
      <input
        type="text"
        name="username"
        value={username}
        placeholder="username"
        onChange={handleChange}
      />
      <input
        type="text"
        name="message"
        value={message}
        placeholder="input message here"
        onChange={handleChange}
      />
      <button onClick={handleClick}>확인</button>
    </div>
  );
};

export default EventPractice;