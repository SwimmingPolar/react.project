import React, { Component, Fragment } from 'react';

class Counter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            number: 0,
            fixedNumber: 0
        };
    }
    render() {
        const { number, fixedNumber } = this.state;
        return (
            <div>
                <h2>바뀌지 않는 값: {fixedNumber}</h2>
                <h1>카운터: {number}</h1>
                <button onClick={() => {
                    this.setState({
                        number: number + 1
                    }, () => {
                        console.log('just called setState');
                        console.log(this.state);
                    });
                }}>
                    +1
                </button>
            </div>
        );
    }
}

export default Counter;