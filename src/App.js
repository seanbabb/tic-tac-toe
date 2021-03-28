import React, { Component } from 'react';
import Board from './components/Board/Board';
import AppHeader from'./components/AppHeader/AppHeader';
import styled from 'styled-components';
import calculateWinner from './components/Helpers/Helpers';
import Clock from './components/Clock/Clock';

const GameApp = styled.div`
    text-align: center;
    background: #3057a4;
`;
const GameBoard = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 0;
    min-height: 30vh;
    width: 100%;
`;
const GameInfo = styled.div`
    margin: 2px;
`;
const GameStatus = styled.div`
    color: #19004d;
    font-size: 2.5rem;
    font-weight: bold;
    margin: 1px;
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
const GameHistory = styled.div`
    margin: 20px;
    padding: 0 80px 75px;
    color: #e3e3e3;
    font-size: 1rem;
`;
const HistoryButton = styled.button`
    font-size: 16px;
    line-height: 16px;
    padding: 6px;
    border-radius: 10px;
    font-family: Georgia, serif;
    font-weight: normal;
    box-shadow: #378ab4 2px 5px 15px 5px;
    border: 2px solid #1c6ea4;

    &:hover {
        background: #99ddff;
    }
    &:active {
        background: #ce5937;
    }
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
                <div key={move}>
                    <HistoryButton onClick={() => this.jumpTo(move)}>{desc}</HistoryButton>
                </div>
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
                <Clock />
                <GameBoard>
                   <Board 
                        squares={current.squares}
                        onClick={(i) => this.handleClick(i)}
                   />
                </GameBoard>
                <GameInfo>
                    <GameStatus>{status }</GameStatus>
                    <GameHistory>
                        Press to jump in time: {moves}
                    </GameHistory>
                </GameInfo>
            </GameApp>
        )
    }
}

export default App;
