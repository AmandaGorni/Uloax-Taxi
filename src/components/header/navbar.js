import React from 'react'
import * as S from './style'

import { graphql, useStaticQuery } from 'gatsby'

export default function Header() {

    const data = useStaticQuery(graphql`
        query{
            alldata{
                contents {
                    navbar
                    logo {
                        url
                      }
                  }
            }
        }
    `)
        const { navbar, logo } = data.alldata.contents[0]


    return (
        <S.Menu>
            <S.MenuContainer>
            <figure>
                <img src={logo.url} alt='Logotipo'/>
            </figure>
            <S.NavBox>
                <S.NavList>
                    <S.NavItem>{navbar[0]}</S.NavItem>
                    <S.NavItem>{navbar[1]}</S.NavItem>
                    <S.NavItem>{navbar[2]}</S.NavItem>
                    <S.NavItem>{navbar[3]}</S.NavItem>
                </S.NavList>
            </S.NavBox>
            </S.MenuContainer>
        </S.Menu>
    )
}
