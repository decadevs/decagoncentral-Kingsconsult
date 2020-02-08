import Styled from 'styled-components'

const Card1 = Styled.div`
    background: white;
    height: 200px;
    margin: 20px;
    /* margin-left: 250px; */
    width: 800px;
    border-top-right-radius: 30px;
    border-top-left-radius: 30px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;

    .contain{
        width: 50%;
        margin-top: 20px;
    }
    .writeup {
            margin-left: 50px;
            margin-top: 30px;
            width: 380px;
            text-align: left;
    }
    .img {
            margin-left: 90px;
            margin-top: 20px;
            width: 380px;
            text-align: left;
    }
    .presentation {
            height: 150px;

    }
`

/* .contents{
    .left{
        padding:15px;
        width:60%;
             h4{
         margin-bottom:4px;
         font-weight: bold;
     }   
    }
    .right{
        width:40%;
        background:grey;
    }
} */



export default Card1;


