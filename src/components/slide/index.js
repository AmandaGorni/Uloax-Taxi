import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { graphql, useStaticQuery } from 'gatsby'
import * as S from "./style";


//EM PRODUÇÃO - TESTE

export default function Slide() {

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
    titleBook,
    city,
    partner,
    btnsearch
} = data.alldata.slides[0]

const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };

    return (
        <div>
        <h2>Auto Play</h2>
        <Slider {...settings}>
        <section>
        <div>
          <h2>posicionamento</h2>
          <p>posicionamento</p>
        </div>
        <img src={imgCar[0].url} alt="taxi" />
      </section>
      <section>
        <h2>posicionamento</h2>
        <div>
          <p>posicionamento</p>
          <input placeholder="PICKUP" />
          <input placeholder="DROP" />
          <input placeholder="WHEN" />
          <button>{btnsearch}</button>
        </div>
      </section>

      <section>
        <div>
          <h2>posicionamento</h2>
          <p>posicionamento</p>
        </div>
        <img src={imgCar[1].url} alt="taxi" />
      </section>
      <section>
        <h2>posicionamento</h2>
        <div>
          <p>posicionamento</p>
          <input placeholder="PICKUP" />
          <input placeholder="DROP" />
          <input placeholder="WHEN" />
          <button>{btnsearch}</button>
        </div>
      </section>

      <section>
        <div>
          <h2>posicionamento</h2>
          <p>posicionamento</p>
        </div>
        <img src={imgCar[0].url} alt="taxi" />
      </section>
      <section>
        <h2>posicionamento</h2>
        <div>
          <p>{partner}</p>
          <input placeholder="PICKUP" />
          <input placeholder="DROP" />
          <input placeholder="WHEN" />
          <button>{btnsearch}</button>
        </div>
      </section>
        </Slider>
      </div>
    )
}
