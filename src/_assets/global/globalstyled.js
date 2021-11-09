import { createGlobalStyle } from "styled-components";


const GlobalStyle = createGlobalStyle`
*{
    margin:0;
    padding: 0;
    box-sizing: border-box;
    
    border: 0;
    
}
body{
    min-height: 100vh;
    font-family: 'Roboto', sans-serif;
    margin:auto;
    
}
div{
    /* border: 2px #fff solid; */
}
h3{
    font-size: 1.5rem;
    padding: 25px 0;
}
`;

export default GlobalStyle;