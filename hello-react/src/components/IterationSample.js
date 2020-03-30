import React, { useState, Fragment } from "react";

const IterationSample = () => {
  // Component Life Cycle Methods
  /*
  constructor() {}
  getDerivedStateFromProps() {}
  shouldComponentUpdate() {}
  render() {}
  componentDidMount() {}
  getSnapshotBeforeUpdate() {}
  componentDidUpdate() {}
  componentWillUmount() {}
  componentDidCatch() {}
  */
  const [names, setNames] = useState([
    { id: 1, text: "눈사람" },
    { id: 2, text: "얼음" },
    { id: 3, text: "눈" },
    { id: 4, text: "바람" }
  ]);
  const [inputText, setInputText] = useState("");
  const [nextId, setNextId] = useState(5);

  const onChange = e => setInputText(e.target.value);
  const addListing = e => {
    const nextNames = names.concat({
      id: nextId,
      text: inputText
    });
    setNextId(nextId + 1);
    setNames(nextNames);
    setInputText("");
  };
  const deleteListing = id => {
    const nextNames = names.filter(name => name.id !== id);
    setNames(nextNames);
  };
  const nameList = names.map(name => (
    <li key={name.id} onDoubleClick={() => deleteListing(name.id)}>
      {name.text}
    </li>
  ));
  return (
    <Fragment>
      <input value={inputText} onChange={onChange} />
      <button onClick={addListing}>추가</button>
      <ul>{nameList}</ul>
    </Fragment>
  );
};

export default IterationSample;
