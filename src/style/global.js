//reset css 속성

import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
//reset css. css를 기본으로 만드는 것
*{
    box-sizing: border-box;
}
body{
    //body에서 쓰는 색상
}
button{
    border:none;
    //css적용되고 있음
    /* padding-bottom:30px; */
}
ul>li{
    list-style: none;
}
button{
    border:none;
    outline:none;
}

`;
export default GlobalStyles;
