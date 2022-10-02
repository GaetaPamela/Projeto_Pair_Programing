import React from "react";
import * as S from "./stilo"
import vitamina from "../assets/vitamina.png"
import pizza from "../assets/pizaa.png"
import bolo from "../assets/bolo.png"
import colher from "../assets/colher.png"
import pinterest from "../assets/pinterest.png"
import facebook from "../assets/facebook.png"
import instagram from "../assets/instagram.png"
import twitter from "../assets/twitter.png"
export default function Principal() {
    return (
        <>
            <S.GlobalStyle />
            <S.Header>
                <div className="Menu">
                    <h2>RC</h2>
                    <nav>
                        <ul>
                            <li> About</li>
                            <li>Recipes</li>
                            <li>Subscribe</li>
                        </ul>
                    </nav>
                </div>
                <div className="Receita">
                    <h1>RECIPES</h1>
                </div>
            </S.Header>
            <S.Main>
                <div>
                    <h3>LATEST RECIPES</h3>
                    <span></span>
                </div>
                <S.FirstSection>
                    <S.FigureBox>
                        <figure>

                            <S.Images src={bolo} alt="" />
                        </figure>
                        <span></span>
                        <figcaption>Red Velvet Cake</figcaption>
                    </S.FigureBox>
                    <S.FigureBox>
                        <figure>
                            <S.Images src={pizza} alt="" />
                        </figure>
                        <span></span>
                        <figcaption>Margherita Pizza</figcaption>
                    </S.FigureBox>
                    <S.FigureBox>
                        <figure>
                            <S.Images src={vitamina} alt="" />
                        </figure>
                        <span></span>
                        <figcaption>Peanut Smoothie</figcaption>
                    </S.FigureBox>
                </S.FirstSection>
                <S.SecondSection>
                    <figure>
                        <S.ImageSecondSection src={colher} alt="" />
                    </figure>
                    <div>
                        <h3>ABOUT</h3>
                        <span></span>
                        <p>Quisque ut tellus urna. Phasellus ipsum sapien, porttitor ut feugiat quis, faucibus id arcu. Cras ultrices erat ac mi facilisis tristique. In finibus nisi mauris, ornare venenatis augue condimentum lobortis. Nullam nec sapien sit amet odio ultricies accumsan ut vitae eros. Fusce pellentesque sed justo nec sollicitudin. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum eget ipsum eget mi vehicula sollicitudin eu eu ipsum. Duis varius neque purus, gravida viverra nulla porttitor ac. Fusce eleifend eu velit ac mattis. Fusce eget lectus tortor. Ut vel nibh et tortor maximus laoreet.
                            Integer ante sapien, porttitor in aliquet sit amet, congue sed augue. Nunc a tincidunt sapien. In at tempus nisl. Sed ultricies at nibh sed elementum. Integer convallis urna magna, quis eleifend ligula pulvinar vel.</p>
                    </div>
                </S.SecondSection>
                <S.FormBox>

                    <S.Subscribe>SUBSCRIBE</S.Subscribe>
                    <S.Newsletter>Sign up for newsletter</S.Newsletter>
                    <S.Input placeholder="Your Email"></S.Input>
                    <S.Botao>SUBMIT</S.Botao>
                </S.FormBox>
            </S.Main>
            <S.Footer>
                <S.IconsBox>
                    <S.Icones src={instagram} />
                    <S.Icones src={twitter} />
                    <S.Icones src={facebook} />
                    <S.Icones src={pinterest} />
                </S.IconsBox>
                <S.Navigation>
                    <ul>
                        <li>ABOUT</li>
                        <li>RECIPES</li>
                        <li>SUBSCRIBE</li>
                    </ul>
                </S.Navigation>
            </S.Footer>
        </>

    )
}