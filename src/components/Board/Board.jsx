import React, { Component } from 'react';
import Square from '../Square/Square';
import styled from 'styled-components';

const BoardRow = styled.div`
    &::after {
        clear: both;
        content: "";
        display: table;
    }
`;

export class Board extends Component {
    renderSquare(i) {
        return (
           <Square 
            value={this.props.squares[i]} 
            onClick={() => this.props.onClick(i)}
            /> 
        ); 
    }

    render() {
        
        return (
            <div>
                <BoardRow>
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </BoardRow>
                <BoardRow>
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </BoardRow>
                <BoardRow>
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </BoardRow>
            </div>
        )
    }
}

export default Board
