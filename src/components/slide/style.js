import Carousel from "nuka-carousel";
import styled from "styled-components";


export const Display = styled.section`
    padding-top: 20vh;
    background-color: black;
`
export const DisplayContainer = styled.div`
    max-width:1440px;
    margin:auto;
    display: flex;
    justify-content:space-around;
    @media (max-width: 1024px) {
        flex-direction: column;
        align-items: center;
    }
`
export const DisplayBox =styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    @media (max-width: 1024px) {
        width: 80%;
    }
`
export const Book =styled.div`
    width: 70%;
    background-color: #f8ca11;
    height: 15vh;
    padding: 10px;
    
    h2{
    width: 100%;
    font-size: 30px;
    color: #fbfaf6;
    text-align: center;
    }
    @media (max-width: 1024px) {
        width: 100%;    
    }
`
export const BookBox = styled.div`
    width: 100%;
    display: flex;
    justify-content: right;  
`
export const ImgCar = styled.img`
    max-width: 90%;
    height: auto;   
    float: right;
`
export const Ride = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    width: 40%;
    color:#fff;
    @media (max-width: 1024px) {
        width: 80%;
        height: 80%;
    }
    input{
    display:flex;
    background: #e1e1e1;
    width:90%;
    border-radius: 5px;
    height: 40px;
    font-size: 20px;
    margin: 10px 0;
    padding-left: 10px;
    border: none;
    outline: none;
    }
    button{
    align-self:flex-end;
    margin:1rem;
    color:#eee;
    background: #353433;
    border:none;
    border-radius:5px;
    width:7rem;
    height:3rem;
    filter: brightness(160%);
    font-size:1rem;
    &:hover{
    color: #000;
    background-color: #f8ca11;
    font-weight: bolder;
    
  }
    }
    
`
export const Ridebox = styled.div`
    background-color: #fff;
    color:#000;
    height: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    margin-top:10px;
    
    
`




