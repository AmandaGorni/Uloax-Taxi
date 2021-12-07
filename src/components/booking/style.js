import styled from "styled-components";

export const Title =styled.h1`
    text-align: center;
    width: 40%;
    margin:auto;
    padding: 4rem 0 1rem 0;
    font-size: 3.3rem;
    border-bottom: 1px solid grey;
    @media (max-width: 966px) {
        width: 80%;
        font-size: 46px;
    }
`

export const ContainerBook = styled.div`
   display: flex; 
   width: 73%;
   margin: 3rem auto;
   @media (max-width: 966px) {
        width: 90%!important;
        flex-direction: column !important;
        align-items: center !important;
  } 
`
export const Box = styled.div`  
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 0 3rem ;
    p{
        font-weight: lighter;
        font-size: 1.2rem;
    }
   
`
export const BtnBook = styled.button`
    color:#fff;
    background-color: #f8ca11;
    width: 10rem;
    height: 3.3rem;
    font-size: 1.2rem;
    cursor: pointer;
    transition: 500ms ease-in-out;
    
    &:hover {
        color:#f8ca11;
        background-color: #000;
    }
`