import Styled from 'styled-components'

const Card1 = Styled.div`
    background: white;
    height: 200px;
    margin: 20px;
    /* margin-left: 250px; */
    width: 380px;
    border-radius: 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;

    .contain{
        width: 50%;
        margin-top: 20px;
    }
    .writeup {
            margin-left: 50px;
            margin-top: 10px;
            width: 200px;
            text-align: left;
        }

    .img {
            margin-left: 70px;
            margin-top: 30px;
            width: 400px;
            text-align: left;
            height: 80px;
    }
    .pre {
            height: 90px;

    }
    .writeuphead {
        font-size: 0.8rem;
    }
`

export default Card1;


