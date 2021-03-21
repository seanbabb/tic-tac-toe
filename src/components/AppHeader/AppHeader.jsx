import React, { Component } from 'react';
import styled from 'styled-components';
import logo from './logo.svg';

const Header = styled.header`
    background: #3057a4;
    background: -moz-linear-gradient(left, #3057a4 0%, #2388cb 49%, #3057a4 100%);
    background: -webkit-linear-gradient(left, #3057a4 0%, #2388cb 49%, #3057a4 100%);
    background: linear-gradient(to right, #3057a4 0%, #2388cb 49%, #3057a4 100%);
    min-height: 10vh;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
`;

const Logo = styled.img`
    height: 4rem;
    pointer-events: none;
    margin: 10px;
    background: #fff;
    border-radius: 10px;
    box-shadow: 5px 5px 15px 5px #ffffff;
`;

const AppTitle = styled.h1`
    text-shadow: 1px 2px 2px #ffffff;
    color: #19004d;
    font-size: 3rem;
    line-height: 8rem;
    fold-weight: bold;
    min-width: 300px;
`;

export default class AppHeader extends Component {
    render() {
        return (
            <Header>
                <Logo src={logo} alt="Logo" />
                <AppTitle>Tic-Tac-Toe</AppTitle>
            </Header>
        )
    }
}
