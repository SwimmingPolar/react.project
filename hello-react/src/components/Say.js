import React, { useState } from 'react';

const Say = () => {
    const [message, setMessage] = useState('Default Message');
    const onClickEnter = () => setMessage('하이루~');
    const onClickLeave = () => setMessage('바이루~');
    const [color, setColor] = useState('black');
    return (
        <div>
            <button onClick={onClickEnter}>입장</button>
            <button onClick={onClickLeave}>퇴장</button>
            <h1 style={{ color }}>{message}</h1>
            <button style={{ color: 'red' }} onClick={() => setColor('red')}>빨간색</button>
            <button style={{ color: 'green' }} onClick={() => setColor('green')}>초록색</button>
            <button style={{ color: 'blue' }} onClick={() => setColor('blue')}>파란색</button>
        </div>
    );
};

export default Say;