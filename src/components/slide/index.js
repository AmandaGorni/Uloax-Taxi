import React from "react";
import Carousel from 'nuka-carousel';

import { graphql, useStaticQuery } from 'gatsby'
import * as S from "./style";


//EM PRODUÇÃO - TESTE

export default function SimpleSlider() {

  const data = useStaticQuery(graphql`
    query{
        alldata{
            slides {
                imgCar {
                  url
                }
                titlebook
                city
                partner
                btnsearch
              }
        }
    }
`)

  const {
    imgCar,
    titlebook,
    city,
    partner,
    btnsearch
  } = data.alldata.slides[0]


  const configCarousel = {
    prevButtonStyle: {
      display: "none"
    },
    nextButtonStyle:
    {
      display: "none"
      
    },
    
  }
  return (
    <>
      <S.Display id="Home">
        <S.DisplayContainer>
          <S.DisplayBox>
            <S.BookBox>
            <S.Book>
              <h2>{titlebook[0]}</h2>
              <h2 style={{color: "#1a1a1a"}}>{titlebook[1]}</h2>
            </S.Book>
            </S.BookBox>
            <Carousel
              wrapAround
              autoplay
              autoplayInterval={4000}
              defaultControlsConfig={configCarousel}
            >
              <S.ImgCar src={imgCar[0].url} alt="Taxi" />
              <S.ImgCar src={imgCar[1].url} alt="Taxi" />
            </Carousel>
          </S.DisplayBox>
          <S.Ride>
            <h2>{city}</h2>
            <S.Ridebox>
              <h2>{partner}</h2>
              <input type="text" Placeholder="PICKUP" />
              <input type="text" Placeholder="DROP" />
              <input type="text" Placeholder="WHEN" />
              <button>{btnsearch}</button>
            </S.Ridebox>
          </S.Ride>
        </S.DisplayContainer>
      </S.Display>
    </>
  )
}

