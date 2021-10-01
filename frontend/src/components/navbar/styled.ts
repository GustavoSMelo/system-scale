import styled from 'styled-components'

export const Container = styled.header`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 15px;
    background-color: #EAE8E6;
    width: 100vw;

    figure > img {
        width: 120px;
        height: 85px;
    }

    nav {
        display: flex;
        flex-direction: row;
        color: #000;
        font-size: 16pt;
        font-weight: bold;
    }

    nav > * {
        margin: 20px;
        cursor: pointer;
    }

    @media screen and (max-width: 980px) {
        .navbar-text {
            display: none;
        }
    }
`
