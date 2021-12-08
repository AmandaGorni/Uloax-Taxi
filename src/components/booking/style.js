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
export const AppBox = styled.section`
    width: 100%;
    height: auto;
    background: url(${props=> props.backImg}) no-repeat;
    background-size:cover;
    display: flex;  
`
export const AppContainer = styled.div`
max-width: 1560px;
width: 100%;
height: 100%;
margin:auto;
`
export const AppWrapper = styled.div`
display: flex;
justify-content: right;
width: 100%;

`
export const AppText = styled.span`
width: 60%;
text-align: center;
font-size: 30px;
margin-top:52px;
transition: 500ms ease-in-out;
@media (max-width: 1064px){
    margin-top: 20px;
}
h2{
    &:nth-child(2){
    color:#fff;
    margin-top:22px;

    }
    @media (max-width: 1064px) {
        font-size: 4vw;
        width: 90%;
        margin:auto;
        border-radius: 5px;
        color:#f8ca11;
    }
} 
    
`
export const AppImg = styled.figure`
width: 300px;
img{
    width: 100%;
    height: 100%;
}

`
