import React, { Component } from 'react';
import '../Square/Square.css';

export class Square extends Component {
    render() {
        return (
            <button className="square">
                {this.props.value}
            </button>
        );
    }
}

export default Square