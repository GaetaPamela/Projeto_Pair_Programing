import Recipes from "../assets/recipes.png"
import styled from "styled-components";

export const Header = styled.header`
border:solid;
background-image:url(${Recipes});
height: 145vh;
background-size: 100%;
background-repeat: no-repeat;
nav{
    border: solid yellow;
    display: flex;
    justify-content: flex-end;
    ul{
        display: flex;
        justify-content: space-around;
        list-style: none;
        border: solid purple;
        width: 30vw;
        li{
            font-size: 22px;
            cursor: pointer;
        }
    }
}
`
