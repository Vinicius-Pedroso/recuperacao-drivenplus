import styled from "styled-components";
import vector1 from './img/vector1.png'
import vector2 from './img/vector2.png'
import vector3 from './img/vector3.png'

export default function Screen3({setScreen}) {
    return (
        <Container>
            <h1>Escolha seu Plano</h1>
            <Offer onClick={() => setScreen(4)}>
                <img src={vector1} />
                <h2>R$ 39,99</h2>
            </Offer>
            <Offer onClick={() => setScreen(4)}>
                <img src={vector2} />
                <h2>R$ 69,99</h2>
            </Offer>
            <Offer onClick={() => setScreen(4)}>
                <img src={vector3} />
                <h2>R$ 99,99</h2>
            </Offer>
        </Container>
    );
}

const Container = styled.div`
    background-color: #0E0E13;
    width: 100%;
    height: 100%;
    display: grid;
    justify-content: center;
    align-items: center;
    padding-bottom: 10px;
    div {
    display: flex;
    justify-content: center;
    align-items: center;
    }
    h1 {
    padding-top: 30px;
    font-family: Roboto;
    font-size: 32px;
    font-weight: 700;
    color: white;
    margin-bottom: 14px;
    margin-left: 10px;
    }
    h2 {
    padding-top: 30px;
    font-family: Roboto;
    font-size: 24px;
    font-weight: 700;
    color: white;
    margin-bottom: 14px;
    margin-left: 10px;
    }
`
const Offer = styled.div`
    width: 290px;
    height: 180px;
    border: 3px solid #7E7E7E;
    border-radius: 12px;
    margin-top: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
`


