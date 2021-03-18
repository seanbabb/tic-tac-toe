import React from 'react';
import styled from 'styled-components';

const SquareButton = styled.button`
    background: #fff;
    color: red;
    float: left;
    height: 50px;
    width: 50px;
    margin: -1px -1px 0 0;
    padding: 0;
    border: 2px solid #db7093;
    font-size: 4rem;
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
