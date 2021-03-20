import React from 'react';
import styled from 'styled-components';

const SquareButton = styled.button`
    background: #fff;
    color: red;
    float: left;
    min-height: 20vh;
    min-width: 125px;
    margin: -1px -1px 0 0;
    padding: 2px;
    border: 2px solid #db7093;
    border-radius: 10px;
    font-size: 8rem;
    font-weight: bold;
    line-height: .5;
    text-align: center;

    &:focus {
        outline: none;
    };
    &:hover {
        background-color: #99ddff;
    }
`;

function Square (props) {
    return (
        <SquareButton onClick={props.onClick}>
            {props.value}
        </SquareButton>
    );
}

export default Square
