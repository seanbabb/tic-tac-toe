import React, { Component } from 'react';

function FormattedDate(props) {
    return (
        <h3>
            {props.date.toLocaleTimeString()}
            {' '}
            {props.date.toLocaleDateString()}
        </h3>
    );
}

export default class Clock extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             date: new Date()
        };
    }

    componentDidMount() {
        this.timerId = setInterval(() =>
            this.tick(), 1000
        );
    }
    componentWillMount() {
        clearInterval(this.timerId);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }
    
    render() {
        return (
            <div>
                <FormattedDate date={this.state.date} />
            </div>
        )
    }
}
