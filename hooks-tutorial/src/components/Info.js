import React, { useReducer } from 'react';

const reducer = (state, action) => {
    return {
        ...state,
        [action.name]: action.value
    };
}

const Info = () => {
    const [state, dispatch] = useReducer(reducer, {
        name: '',
        nickname: ''
    });
    const {name, nickname} = state;
    return (
        <div>
            <div>
                <input name="name" value={name} onChange={e => dispatch(e.target)} />
                <input name="nickname" value={nickname} onChange={e => dispatch(e.target)} />
            </div>
            <div>
                <div>
                    <b>이름: </b>{name}
                </div>
                <div>
                    <b>닉네임: </b>{nickname}
                </div>
            </div>
        </div>
    );
};

export default Info;