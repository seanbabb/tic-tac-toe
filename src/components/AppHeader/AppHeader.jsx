import React, { Component } from 'react';
import styled from 'styled-components';

const Header = styled.header`
    background: #3057a4;
    background: -moz-linear-gradient(left, #3057a4 0%, #2388cb 49%, #451375 100%);
    background: -webkit-linear-gradient(left, #3057a4 0%, #2388cb 49%, #451375 100%);
    background: linear-gradient(to right, #3057a4 0%, #2388cb 49%, #451375 100%);
    min-height:10vh;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
`;

const AppTitle = styled.h1`
    text-shadow: 1px 2px 2px #ffffff;
    color: #19004d;
    font-size: 2.75rem;
    line-height: 4rem;
    fold-weight: bold;
    min-width: 300px;
`;

export default class AppHeader extends Component {
    render() {
        return (
            <Header>
                <AppTitle>Tic-Tac-Toe</AppTitle>
            </Header>
        )
    }
}
