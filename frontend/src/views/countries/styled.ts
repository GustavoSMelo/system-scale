import styled from 'styled-components'

export const Container = styled.main`
    display: flex;
    flex-direction: column;
    padding: 30px;

    th {
        background-color: #dfdfdf;
    }

    th, td {
        padding: 30px;
        box-shadow: 3px 3px 10px #dfdfdf;
    }

    @media screen and (max-width: 980px) {

        .borders {
            display: flex;
            flex-direction: column;
        }
    }

    @media screen and (max-width: 480px) {
        th {
            padding: 12px;
        }

        td {
            padding: 5px;
        }
    }
`
