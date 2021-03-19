import React, { Component } from 'react';
import Board from './components/Board/Board';
import AppHeader from'./components/AppHeader/AppHeader';
import styled from 'styled-components';
import calculateWinner from './components/Helpers/Helpers';

const GameApp = styled.div`
    text-align: center;
`;
const GameInfo = styled.div`
    background-color: #b3d9ff;
    margin-left: 20px;
`;
const GameStatus = styled.div`
    color: #bc2e1e;
    font-size: 2.5rem;
    margin: 10px;
    text-shadow: 
    0 1px 0px #378ab4, 1px 0 0px #5dabcd,
    1px 2px 1px #378ab4, 2px 1px 1px #5dabcd,
    2px 3px 2px #378ab4, 3px 2px 2px #5dabcd,
    3px 4px 2px #378ab4, 4px 3px 3px #5dabcd,
    4px 5px 3px #378ab4, 5px 4px 2px #5dabcd,
    5px 6px 2px #378ab4, 6px 5px 2px #5dabcd,
    6px 7px 1px #378ab4, 7px 6px 1px #5dabcd,
    7px 8px 0px #378ab4, 8px 7px 0px #5dabcd,
    2px 5px 5px #ce5937;
`;
const GameHistory = styled.ol`
    padding: 50px;
`;

export class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            history: [{
                squares: Array(9).fill(null),
            }],
            stepNumber: 0,
            xIsNext: true,
        };
    }
    
    handleClick(i) {
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const current = history[history.length -1];
        const squares = current.squares.slice();
        if (calculateWinner(squares) || squares[i]) {
            return;
        }
        squares[i] = this.state.xIsNext ? 'X' : 'O';
        this.setState({
            history: history.concat([{
                squares: squares,
            }]),
            stepNumber: history.length,
            xIsNext: !this.state.xIsNext,
        });
    }

    jumpTo(step) {
        this.setState({
            stepNumber: step,
            xIsNext: (step % 2) === 0,
        });
    }

    render() {
        const history = this.state.history;
        const current = history[this.state.stepNumber];
        const winner = calculateWinner(current.squares);

        const moves = history.map((step,move) => {
            const desc = move ?
                'Go to move #' + move:
                'Go to game start';
            return (
                <li key={move}>
                    <button onClick={() => this.jumpTo(move)}>{desc}</button>
                </li>
            );
        });

        let status;
        if (winner) {
            status = 'Winner: ' + winner;
        } else {
            status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
        }

        return (
            <GameApp>
                <AppHeader />
                <div className="game-board">
                   <Board 
                        squares={current.squares}
                        onClick={(i) => this.handleClick(i)}
                   />
                </div>
                <GameInfo>
                    <GameStatus>{status }</GameStatus>
                    <GameHistory>{moves}</GameHistory>
                </GameInfo>
            </GameApp>
        )
    }
}

export default App;
