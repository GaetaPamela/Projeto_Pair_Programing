import React from "react";
import * as S from "./stilo"
import vitamina from "../assets/vitamina.png"
import pizza from "../assets/pizaa.png"
import bolo from "../assets/bolo.png"
export default function Principal() {
    return (
        <>
            <S.GlobalStyle />
            <S.Header>
                <h2>RC</h2>
                <nav>
                    <ul>
                        <li> About</li>
                        <li>Recipes</li>
                        <li>Subscribe</li>
                    </ul>
                </nav>
                <div>
                    <h1>RECIPES</h1>
                </div>
            </S.Header>
            <S.Main>
                <div>
                    <h3>LATEST RECIPES</h3>
                    <span></span>
                </div>
                <section>
                    <S.FigureBox>
                        <S.Images src={bolo} alt="" />
                        <span></span>
                        <figcaption>Red Velvet Cake</figcaption>
                    </S.FigureBox>
                    <S.FigureBox>
                        <S.Images src={pizza} alt="" />
                        <span></span>
                    <figcaption>Margherita Pizza</figcaption>
                    </S.FigureBox>
                    <S.FigureBox>
                        <S.Images src={vitamina} alt="" />
                        <span></span>
                    <figcaption>Peanut Smoothie</figcaption>
                    </S.FigureBox>
                </section>
                    <div>
                        <figure></figure>
                        <div>
                            <h3>About</h3>
                            <span></span>
                            <p>Quisque ut tellus urna. Phasellus ipsum sapien, porttitor ut feugiat quis, faucibus id arcu. Cras ultrices erat ac mi facilisis tristique. In finibus nisi mauris, ornare venenatis augue condimentum lobortis. Nullam nec sapien sit amet odio ultricies accumsan ut vitae eros. Fusce pellentesque sed justo nec sollicitudin. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum eget ipsum eget mi vehicula sollicitudin eu eu ipsum. Duis varius neque purus, gravida viverra nulla porttitor ac. Fusce eleifend eu velit ac mattis. Fusce eget lectus tortor. Ut vel nibh et tortor maximus laoreet.
Integer ante sapien, porttitor in aliquet sit amet, congue sed augue. Nunc a tincidunt sapien. In at tempus nisl. Sed ultricies at nibh sed elementum. Integer convallis urna magna, quis eleifend ligula pulvinar vel.</p>
                        </div>
                    </div>
            </S.Main>
        </>

    )
}