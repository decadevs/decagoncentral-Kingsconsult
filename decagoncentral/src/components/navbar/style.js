import Styled from "styled-components";

const NavStyle = Styled.div`
body {
  margin: 0;
  padding: 0;
}
.decagonlogo {
  top: 141px;
  position: absolute;
  left: 35px;
  width:130px;
}
.wrapper{
  display: flex;
  position: relative;
}
.wrapper{
  width: 220px;
  height: 100%;
  background: transparent linear-gradient(180deg, #2D2F48 0%, #09090E 100%) 0% 0% no-repeat padding-box;
  opacity: 1;  
  position: fixed;
  color: white;
  left: 0px;
}
.sidebar{
  width: 245px;
  padding: 30px 0px;
  position: fixed;
  left: -25px;
  top: 30vh;
}

.wrapper .sidebar ul li{
  padding: 15px;
  list-style-type: none;
  text-align: left;
  top: 10vh;
}    

.wrapper .sidebar ul li:hover{
  background-color: #fff;
  color: #000
}
`

export default NavStyle;
