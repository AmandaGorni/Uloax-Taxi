import styled from "styled-components";

export const Menu = styled.section`
    background-color: #000;
    position: fixed;
    top:0;
    width: 100%;
    padding: 1rem 0;
    z-index: 3;
`
export const MenuContainer = styled.div`
    max-width: 1440px;
    margin: auto;
    background-color: #000;
    display: flex;
    justify-content: space-between;
    
`
export const NavBox = styled.div`
    width: 50%;
`
export const NavList = styled.ul`
    display: flex;
    justify-content: space-between;
    list-style: none;
    width: 100%;
    
    
    @media (max-width: 966px) {
    display: none;
  }    
`

export const NavItem = styled.li`
    color: #fff;
    height: 50px;
    width: 7vw;
    line-height: 50px;
    text-align: center;
    margin-right: 8px;
    font-size: 20px;
    
    cursor:pointer;
    
    &:nth-child(4) {
        width: 10vw; 
    }
    &:hover{
        color:#f8ca11;
        
    }
`