import React, { useState, Fragment, useLayoutEffect } from 'react';

const IterationSample = () => {
  const [names, setNames] = useState([
    { id:1, text: 'Broodwar' },
    { id:2, text: 'Diablo3' },
    { id:3, text: 'LeagueOfLegends' },
    { id:4, text: 'Sigong' },
    { id:5, text: 'Joa' },
  ]);
  const [inputText, setInputText] = useState('');
  const [nextID, setNextID] = useState(6);
  
  const nameList = names.map(name => <li onClick={() => onDelete(name.id)} style={{cursor: 'pointer', marginBottom: '5px' }} key={name.id}>{name.text}</li>);

  const onChange = e => {
    setInputText(e.target.value);
  }
  const onClick = () => {
    const nextNames = names.concat({
      id: nextID,
      text: inputText
    });
    setNames(nextNames);
    setNextID(nextID + 1);
    setInputText('');
  }
  const onDelete = id => {
    const nextNames = names.filter(name => name.id !== id);
    setNames(nextNames);
    setInputText('');
  }
  return (
    <Fragment>
      <input
        value={inputText}
        onChange={onChange}
      />
      <button onClick={onClick}>추가</button>
      <ul>{nameList}</ul>
    </Fragment>
  );
}

export default IterationSample;