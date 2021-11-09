import React from 'react'
import GlobalStyle from '../_assets/global/globalstyled'

import Header from '../components/header/navbar'
import Slide from '../components/slide'
import Cards from '../components/content/cards'
import CardBook from '../components/booking/cardBooks'
import Footer from '../components/contact'


export default function index() {
  return (
    <div>
      <Header/>
      <Slide/>
      <Cards/>
      <CardBook/>
      <Footer/>
      <GlobalStyle/>
    </div>
  )
}