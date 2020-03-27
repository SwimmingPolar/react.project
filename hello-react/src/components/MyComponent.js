import React from 'react';
import PropTypes from 'prop-types';

const MyComponent = ({ name, children, favouriteNumber }) => {
    return (
        <div>
            리액트 프롭 name: {name}<br />
            리액트 프롭 children: {children}<br />
            리액트 requiredProp: {favouriteNumber}
        </div>
    );
};

MyComponent.defaultProps = {
    name: 'default name',
    favouriteNumber: 10
};

MyComponent.propTypes = {
    favouriteNumber: PropTypes.number.isRequired
};

export default MyComponent;