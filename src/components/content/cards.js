import React from 'react'
import * as S from './style'
import Carousel from 'nuka-carousel';

import {graphql, useStaticQuery } from 'gatsby'

export default function Cards() {

const data = useStaticQuery(graphql`
    query{
        alldata{
            contents {
                titleCard
                titlecar
                textcar
                carCard {
                  url
                }
              }
        }
    }
`)

const {titleCard, titlecar, textcar, carCard } = data.alldata.contents[0]


    return (
        <>
        <S.Container id="Taxi">
            <h2>{titleCard.slice(0,4)}<span style={{color:"#f8ca11"}}>{titleCard.slice(4,8)}</span></h2>
            
        <S.Wrapper>           
            <S.BoxCard>
                <S.Carbtn>01</S.Carbtn>
                <h3>{titlecar[0]}</h3>
                <p>{textcar}</p>
                <S.CarImg src={carCard.url} alt='Taxi'/>
            </S.BoxCard>
            <S.BoxCard>
            <S.Carbtn>02</S.Carbtn>
                <h3>{titlecar[1]}</h3>
                <p>{textcar}</p>
                <S.CarImg src={carCard.url} alt='Taxi'/>
            </S.BoxCard>
            <S.BoxCard>
            <S.Carbtn>03</S.Carbtn>
                <h3>{titlecar[2]}</h3>
                <p>{textcar}</p>
                <S.CarImg src={carCard.url} alt='Taxi'/>
            </S.BoxCard>
           
        </S.Wrapper>
        </S.Container>
        </>
    )
}
