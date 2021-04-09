import styled, {createGlobalStyle, css } from 'styled-components';
import {Link} from 'react-router-dom'

const GlobalStyle = createGlobalStyle`
    *{
        padding:0;
        margin:0;
        box-sizing: border-box;
    }
`;
export default GlobalStyle;

export const RoundButton = styled.button`
    margin-left: 14px;
    display: block;
    height:  30px;
    width: 80px;
    border-radius: 40px;
    border: none;
    background: white;
    text-decoration: none !important;
    color: black;
    font-weight: bold;
    font-size: 0.9rem;

    ${props => props.purple && css`
        background: #755588
        color: white
    `}
`