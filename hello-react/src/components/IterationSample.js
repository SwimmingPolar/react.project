import React from 'react';

const IterationSample = () => {
    const names = ['물', '불', '바람', '대지'];
    const nameList = names.map((name, index) => <li key={index}>{name}</li>);
    return <ul>{nameList}</ul>;
};

export default IterationSample;