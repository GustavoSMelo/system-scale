import styled from 'styled-components'

export const Container = styled.main`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: 100vh;

    figure {
        width: 60%;
    }
    figure > img {
        width: 100%;
    }
    aside {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin: 100px;
    }

    aside > h1 {
        color: #F02424;
        font-size: 32pt;
        margin: 10px;
    }

    aside > p {
        text-align: justify;
        font-size: 16pt;
        line-height: 26px;
    }

    aside > button {
        background-color: #F02424;
        margin: 30px;
        padding: 20px;
        width: 45%;
        font-size: 16pt;
        font-weight: bold;
        color: #fff;
        border: none;
        border-radius: 15px;
        cursor: pointer;
    }

    @media screen and (max-width: 980px) {
        display: flex;
        flex-direction: column;
        height: auto;

        figure > img {
            width: 90%;
        }

        aside {
            margin: 40px;
        }
    }
`
