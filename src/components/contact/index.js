import React from "react";
import * as S from './style'

import { graphql, useStaticQuery } from "gatsby";

export default function Footer(){


const data = useStaticQuery(graphql`
query{
    alldata{
        contacts {
            contactTitle
            address
            links
            midias
            midiasImg {
              url
            }
            subscribe
          }
    }
}

`)
console.log(data)
const {
    contactTitle,
    address,
    links,
    midias,
    midiasImg,
    subscribe
} = data.alldata.contacts[0]

    return(
        <S.Footer>
        <S.Container>
        <S.AddressBox>
            <h3>{contactTitle[0]}</h3>
            <p>{address}</p>            
        </S.AddressBox>
        <S.LinkBox>
            <h3>{contactTitle[1]}</h3>
            <S.LinkList>
                <li>{links[0]}</li>
                <li>{links[1]}</li>
                <li>{links[2]}</li>
                <li>{links[3]}</li>
                <li>{links[4]}</li>
            </S.LinkList>
        </S.LinkBox>
        <S.FollowBox>
            <h3>{contactTitle[2]}</h3>
            <ul>
                <S.MidiaImg logo={midiasImg[0].url}>{midias[0]}</S.MidiaImg>
                <S.MidiaImg logo={midiasImg[1].url}>{midias[1]}</S.MidiaImg>
                <S.MidiaImg logo={midiasImg[2].url}>{midias[2]}</S.MidiaImg>
                <S.MidiaImg logo={midiasImg[3].url}>{midias[3]}</S.MidiaImg>
                <S.MidiaImg logo={midiasImg[4].url}>{midias[4]}</S.MidiaImg>
            </ul>
        </S.FollowBox>
        
        <S.Newsletter>
            <h3>{contactTitle[3]}</h3>
            <input></input>
            <button>{subscribe}</button>
            
        </S.Newsletter>
        </S.Container>
        </S.Footer>

    )
}