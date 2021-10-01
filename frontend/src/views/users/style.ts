import styled from 'styled-components'

export const Container = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    span {
        display: flex;
        flex-direction: row;
    }

    span > * {
        margin: 3px;
    }

    section {
        width: 50%;
        border-radius: 5px;
        box-shadow: 1px 1px 4px #707070;
        margin: 30px;
        display: flex;
        flex-direction: row;
    }

    h1 {
        margin-top: 10px;
    }

    figure > img {
        border-radius: 15px;
    }

    section > article {
        margin-left: 30px;
        font-size: 16pt;
    }

    button {
        background-color: #F02424;
        padding: 15px;
        margin: 30px;
        cursor: pointer;
        border: none;
        border-radius: 15px;
        color: #fff;
        width: 50%;
    }

    @media screen and (max-width: 980px) {
        section {
            width: 80%;
            flex-direction: column;
        }

        section > article {
            margin-left: 0px;
        }

        button {
            width: 80%;
        }
    }

`
