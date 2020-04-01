import React, { Component } from 'react';

class ScrollBox extends Component {
    scrollToBottom = () => {
        const { scrollHeight, clientHeight } = this.box;
        this.box.scrollTop = scrollHeight - clientHeight;  
    };
    render() {
        const outerStyle = {
            border: '1px solid black',
            height: '300px',
            width: '300px',
            overflow: 'auto',
            position: 'relative',
            scrollBehavior: 'smooth'
        };
        const innerStyle = {
            width: '100%',
            height: '750px',
            background: 'linear-gradient(white, black)'
        };

        return (
            <div>
                <div
                    style={outerStyle}
                    ref={ref => this.box = ref}
                >
                    <div style={innerStyle}></div>
                </div>
                <a href=""></a><button onClick={this.scrollToBottom}>아래로</button>
            </div>
        );
    }
}

export default ScrollBox;