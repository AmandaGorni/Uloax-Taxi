import styled from "styled-components";


export const Container = styled.section`
background-color:#161c1e;
padding:30px;
    h2{
        color:#fff;
        font-size: 60px;
        font-weight: 700;
        line-height: 200px;
        text-align: center;
    }
`
export const Wrapper = styled.div`
    display:flex;
    justify-content: space-around;
    max-width: 1060px;
    margin:auto;
    
`
export const BoxCard = styled.div`
    width: 27rem;
    height: 25rem;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    position: relative;
    transition: .4s;

    &:nth-child(-n+2){
    margin-right: 15px;
    }
    &:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 20px #bbb;
  }

  h3{
      font-size:27px;
  }
  p{
      font-size: 20px;
      width: 50%;
  }
`
export const CarImg = styled.img`
    width: 88%;
    object-fit: cover;
`
export const Carbtn = styled.button`
    background-color: #f8ca11;
    width: 90px;
    height: 90px;
    border-radius: 50%;
    position: relative;
    bottom:40px;
    font-size: 30px;
    color: #fff;
`