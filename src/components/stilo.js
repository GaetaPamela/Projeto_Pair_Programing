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
    width: 45%;
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
            justify-content: center;
            font-size: 22px;
            cursor: pointer;
            height: 8vh;
            width: 11vw;
            &:hover{
                border: solid #373737;
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
height: 300vh;
background-color: #F2F4F1;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
div{
    position: relative;
    top: 8vh;
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
`
export const FirstSection = styled.section`
    position: relative;
    top: 14vh;
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    height: 100vh;
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
figure{
    overflow: hidden;
    width: 100%;
    height: 45vh;
}
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
-webkit-transition: 0.6s ease;
&:hover{
    transform: scale(1.2)
};
`
export const SecondSection = styled.section`
position: relative;
top: 35vh;
display: flex;
align-items: center;
justify-content: center;
background-color: #ffff;
height: 100vh;
div{
    display: flex;
    justify-content:space-around;
    top: 2vh;
    height: 60vh;
}
div span{
    position: relative;
    top: -1vh;
    background-color: #373737;
    width: 55px;
    height: 5px;
}
div h3{
    font-family: "Reem Kufi Ink", sans-serif;
    top: 0vh;
    font-size: 26px;
}
p{
    width: 70%;
}
`
export const ImageSecondSection = styled.img`
position: relative;
top: 2px;
height: 100vh;
`

export const FormBox = styled.form`
position: relative;
top: 35vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 100%;
height: 60vh;
background-color:#DFE4DE ;

gap: 10px;
`

export const Subscribe = styled.p`
font-weight: bold;
font-family: "Reem Kufi Ink", sans-serif;
letter-spacing: 3px;
font-size: 30px;
`
export const Newsletter = styled.p`
font-weight: normal;
font-size: 22px;
letter-spacing: 2px;
font-family: "Reem Kufi Ink", sans-serif;
`
export const Input = styled.input`
font-size: 18px;
padding-left: 20px;
border: none;
height: 11vh;
width: 35vw;
background-color:#EFF1EE;
&:focus{
outline: none;
border: none;
}
&::placeholder{
    font-size: 18px;
}
`
export const Botao = styled.button`
font-family: "Reem Kufi Ink", sans-serif;
font-size: 18px;
font-weight: 900;
letter-spacing: 3px;
position: relative;
top: 14px;
width: 12vw;
height: 8vh;
background-color:transparent;
border: solid;
cursor: pointer;
transition: ease-in-out 0.6s;
&:hover{
    color: #ffff;
    box-shadow: inset black 165px 0px;
    border: solid black;
}
`
export const Footer = styled.footer`
display: flex;
justify-content: space-between;
align-items: center;
position: relative;
top: 29vh;
height: 35vh;
width: 100%;
background-color: #F2F4F1;
`
export const Navigation = styled.nav`
ul{
    display: flex;
    justify-content: space-evenly;
    width: 36vw;
    list-style: none;
}
li{
    cursor: pointer;
    font-weight: 500;
    font-size: 17px;
    letter-spacing: 2px;
    font-family: "Questrial", sans-serif;
}
`
export const IconsBox = styled.div`

display: flex;
justify-content: flex-end;
gap: 10px;
width: 20vw;
`
export const Icones = styled.img`
height: 6vh;
cursor: pointer;
`