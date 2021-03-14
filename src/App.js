import React, { Component } from 'react';
import Board from './components/Board/Board';
import './App.css';

export class App extends Component {
    render() {
        return (
            <div className="app">
                <div className="game-board">
                   <Board />
                </div>
                <div className="game-info">
                    <div>{/* status */}</div>
                    <ol>{/* TODO */}</ol>
                </div>
            </div>
        )
    }
}

export default App;
