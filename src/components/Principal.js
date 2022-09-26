import React from "react";
import * as S from "./stilo"
export default function Principal(){
    return( 
        <>
        <S.GlobalStyle/>
        <section>
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
        </section>
        </>

    )
}