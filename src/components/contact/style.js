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
`

export const FollowBox = styled.div`
   
`
export const LinkList = styled.div`
    list-style-image: url(${props => props.logo});
    list-style-position: inside;
`

export const MidiaImg = styled.li`
    list-style-image: url(${props => props.logo});
    list-style-position: inside;
    cursor: pointer;
    padding: 3px;
    
&:hover{
    color: #F8CA11;
    transition: all 0.3s ease 0s;
  }
`
export const Newsletter = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
export const LinkBox = styled.div`
    
`
