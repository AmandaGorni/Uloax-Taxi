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
        <S.Footer id="Contact">
        <S.Container>
        <S.AddressBox>
            <h3>{contactTitle[0]}</h3>
            <p>{address}</p>            
        </S.AddressBox>
        <S.LinkBox>
            <h3>{contactTitle[1]}</h3>
            <S.LinkList>
                <S.MidiaImg logo={midiasImg[5].url}><a href="#Home">{links[0]}</a></S.MidiaImg>
                <S.MidiaImg logo={midiasImg[5].url}><a href="#Booking">{links[1]}</a></S.MidiaImg>
                <S.MidiaImg logo={midiasImg[5].url}><a href="#Taxi">{links[2]}</a></S.MidiaImg>
                <S.MidiaImg logo={midiasImg[5].url}><a href="#App">{links[3]}</a></S.MidiaImg>
                <S.MidiaImg logo={midiasImg[5].url}><a href="#Contact">{links[4]}</a></S.MidiaImg>
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
            <input placeholder="Email" />
            <button>{subscribe}</button>          
        </S.Newsletter>
        </S.Container>
        </S.Footer>

    )
}