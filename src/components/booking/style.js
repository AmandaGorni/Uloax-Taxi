import styled from "styled-components";

export const Title =styled.h1`
    text-align: center;
    padding: 3rem;
    font-size: 3.3rem;
    :after{
        content: "";
        width: 1px;
        height: 1px;
    }
`

export const ContainerBook = styled.div`
   display: flex; 
   width: 73%;
   margin: 3rem auto;
   @media (max-width: 966px) {
    width: 90%;

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
`