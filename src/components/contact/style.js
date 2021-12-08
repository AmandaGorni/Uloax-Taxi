import styled from "styled-components";

export const Container = styled.section`
    display: flex;
    justify-content: space-between;
    max-width: 1440px;
    margin:auto;
    padding: 50px;
    color: #fff;
`
export const Footer = styled.footer`
    background-color: #292828;    
`

export const AddressBox = styled.address`
    float: left;
    width: 30%;
    p{
        font-style: normal;
        font-size: 1rem;
        line-height: 24px;

    }
    @media (max-width: 966px) {
        display:none;
        
    }
`
export const FollowBox = styled.div``

export const LinkBox = styled.div`
     @media (max-width: 966px) {
        display:none;     
    }
`
export const LinkList = styled.nav`
    list-style-image: url(${props => props.logo});
    list-style-position: inside;
`
export const MidiaImg = styled.li`
    list-style-image: url(${props => props.logo});
    list-style-position: inside;
    cursor: pointer;
    padding: 3px;
    a{
        text-decoration: none;
        color: inherit;
    }
    
    
&:hover{
    color: #F8CA11;
    transition: all 0.3s ease 0s;
  }
`
export const Newsletter = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media (max-width: 500px) {
        align-items: flex-end;
    }
    input{
    width: 80%;
    font-size: 12pt;  
    padding: 10px;
    border-radius: 5px;
    }
    button{
    width: 70%;
    height: 50px;
    font-size: 16pt;
    color: #eceaea;
    background-color: #fecf3d;
    padding: 5px 0px;
    text-align: center;
    font-weight: 600;
    border-radius: 5px;
    &:hover{
    color: #000;
    transition: all 0.3s ease 0s;
    }
    @media (max-width: 500px) {
        
    }
`