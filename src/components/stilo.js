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
flex-direction:column;
background-image:url(${Recipes});
height: 145vh;
background-size: 100%;
background-repeat: no-repeat;
.Menu{
    width:100%;
    height:50%;
    display: flex;
justify-content: space-between;
border:solid red;


}

h2{
    position: relative;
    top: 3.5vh;
    font-weight:600;
    font-size:40px;
}
nav{
    display: flex;
    justify-content:center;
    align-items: center;
    width: 60%;
    height: 15vh;
    ul{
        display: flex;
        justify-content: space-around;
        align-items: center;
        list-style: none;
        width: 100%;
        height: 10vh;
        li{
            display: flex;
            align-items: center;
            justify-content: flex-end;
            font-size: 22px;
            cursor: pointer;
           
            height: 8vh;
            width: 11vw;
            &:hover{
                border: solid black;
            }
        }
    }
}
h1{
    display:flex;
    justify-content: center;
    font-size: 110px;
    letter-spacing: 15px;
    color: #373737;
    font-weight: 500;
}
@media (max-width:800px){
   
    width:100%;


    h2{
        font-size:20px;
        
    }
nav{
    border:solid;  
     width:70%;
     justify-content:center;
    
}
ul{
    border:solid blue; 
    width:100%;
    justify-content: space-between;
    
}

li{
   
    font-size: 1rem;

}
 .Receita{
    h1{
       font-size:80px; 
    }

     }

}
`
export const Main = styled.main`
position: relative;
top: 4vh;
height: 200vh;
background-color: #F2F4F1;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
div{
    position: relative;
    top: -43vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 20vh;
    h3{
        font-size:25px;
        color: #373737;
        letter-spacing: 1px;
        transition: ease-in-out 0.4s;
        &:hover,&:hover + span{
            transform: scale(115%);
        }
    }
    span{
        position: relative;
        top: 2.5vh;
        background-color: #000;
        width: 5.5vw;
        height: 0.5vh;
        transition: ease-in-out 0.4s;
    }
}
section{
    position: relative;
    top: -38vh;
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    height: 100vh;
    border: solid;
}
`
export const FigureBox = styled.figure`
display: flex;
flex-direction: column;
align-items: center;
overflow: hidden;
width: 29.2vw;
height: 90vh;
background-color: #ffff;
box-shadow:  0px  4px  5px   grey;
span{
    position: relative;
    top: 20vh;
    background-color:#000;
    width: 4vw;
    height: 0.8vh;
}
figcaption{
    font-family: "Questrial", sans-serif;
    position: relative;
    top: 25vh;
    font-size: 28px;
    cursor: pointer;
    &:hover{
        transform: scale(105%);
    }
}
`
export const Images = styled.img`
height: 45vh;
transition: ease-in-out 0.5s;
&:hover{
transform: scale(110%);
};
`
