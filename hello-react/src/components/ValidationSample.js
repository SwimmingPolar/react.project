import React, { Component } from 'react';
import '../styles/ValidationSample.css';

class ValidationSample extends Component {
    state = {
        password: '',
        clicked: false,
        validated: false
    };
    input = React.createRef();
    handleFocus = () => {
        this.setState({
            password: ''
        });
        this.input.current.focus();
    }
    handleChange = e => {
        this.setState({
            password: e.target.value
        });
    };
    handleButtonClick = () => {
        this.setState({
            clicked: true,
            validated: this.state.password === '0000',
        });
        this.input.focus();
    };
    render() {
        return (
            <div>
                <input
                    type="password"
                    onChange={this.handleChange}
                    value={this.state.password}
                    className={ this.state.clicked ? (this.state.validated ? 'success' : 'failed') : '' }
                    ref={ref => this.input = ref}
                />
                <button onClick={this.handleButtonClick}>Validate</button>
            </div>
        );
    }
}

export default ValidationSample;
