import Recipes from "../assets/recipes.png"
import styled, {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
`
export const Header = styled.header`
display: flex;
justify-content: flex-end;
background-image:url(${Recipes});
height: 145vh;
background-size: 100%;
background-repeat: no-repeat;
border: solid yellow;
h2{
    position: relative;
    top: 3.5vh;
    font-weight:600;
    font-size:40px;
}
nav{
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 91vw;
    border: solid red;
    height: 15vh;
    ul{
        display: flex;
        justify-content: space-around;
        align-items: center;
        list-style: none;
        width: 35vw;
        height: 10vh;
        border: solid green;
        li{
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 22px;
            cursor: pointer;
            border: solid  transparent;
            height: 8vh;
            width: 11vw;
            &:hover{
                border: solid black;
            }
        }
    }
}
h1{
    position: absolute;
    top: 460px;
    right:415px;
    font-size: 110px;
    letter-spacing: 15px;
    color: #373737;
    font-weight: 500;
}
`
