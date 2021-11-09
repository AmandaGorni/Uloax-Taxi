import React from "react";
import * as S from './style';

import { graphql, useStaticQuery } from 'gatsby'

export default function CardBook () {

const data = useStaticQuery(graphql`
query{
    alldata{
        cardBooks {
            title
            subTitle
            paragraph
            btnBook
            imgBook {
              url
            }
          }
    }
}

`)

const {title, subTitle, paragraph, btnBook, imgBook} = data.alldata.cardBooks[0]

    return(
        <>
        <S.Title>{title}</S.Title>
        <S.ContainerBook>
            <figure>
            <img src={imgBook[2].url} alt='wallet'/>
            </figure>
            <S.Box>
            <h2>{subTitle[1]}</h2>
            <p>{paragraph}</p>
            <S.BtnBook>{btnBook}</S.BtnBook>
            </S.Box>
        </S.ContainerBook>
        <S.ContainerBook style={{ flexDirection: 'row-reverse' }}>
            <figure>
            <img  src={imgBook[0].url} alt='rides' />
            </figure>
            <S.Box 
            style={{
            alignItems: "end",
            textAlign: "right"
            }}
            >
            <h2>{subTitle[0]}</h2>
            <p >{paragraph}</p>
            <S.BtnBook >{btnBook}</S.BtnBook>
            </S.Box>
        </S.ContainerBook>
        <S.ContainerBook>
            <figure>
            <img src={imgBook[1].url} alt='price'/>
            </figure>
            <S.Box>
            <h2>{subTitle[1]}</h2>
            <p>{paragraph}</p>
            <S.BtnBook>{btnBook}</S.BtnBook>
            </S.Box>
        </S.ContainerBook>
        <S.ContainerBook style={{ flexDirection: 'row-reverse' }}>
            <figure>
            <img src={imgBook[1].url} alt='secure'/>
            </figure>
            <S.Box
            style={{
            alignItems: "end",
            textAlign: "right"
            }}
            >
            <h2>{subTitle[0]}</h2>
            <p>{paragraph}</p>
            <S.BtnBook>{btnBook}</S.BtnBook>
            </S.Box>
        </S.ContainerBook>
        </>
    )
}