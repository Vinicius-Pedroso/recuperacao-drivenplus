import styled from 'styled-components';
import vector1 from './img/vector1.png'
import list from './img/list.svg'
import dollar from './img/dollar.svg'

export default function Screen2() {
    return (
        <Container>
            <ion-icon name="arrow-back-outline"></ion-icon>
            <MiniLogoDriven>
                <img src={vector1} />
            </MiniLogoDriven>
            <Center>
                <h1>Driven Plus</h1>
            </Center>
            <div>
                <SpanFlex>
                    <img src={list}/>
                    <h2>Benefícios:</h2>
                </SpanFlex>
                <p>1. Brindes exclusivos</p>
                <p>2. Materiais bônus de web</p>
                <SpanFlex>
                    <img src={dollar}/>
                    <h2>Preço:</h2>
                </SpanFlex>
                <p>R$ 39,99 cobrados mensalmente</p>
            </div>
            <Center>
                <BoxInput type="text" placeholder="Nome impresso no cartão"></BoxInput>
            </Center>
            <Center>
                <BoxInput type="text" placeholder="Digitos do cartão"></BoxInput>
            </Center>
            <Center>
                <BoxInput2 type="text" placeholder="Código de segurança"></BoxInput2>
                <Correctionbox></Correctionbox>
                <BoxInput2 type="text" placeholder="Validade"></BoxInput2>
            </Center>
            <Center>
                <ButtonInput><p>ASSINAR</p></ButtonInput>
            </Center>
        </Container>

    );
}

const Container = styled.div`
    background-color: #0E0E13;
    width: 100%;
    height: 100%;
    p {
        padding-left: 5%;
        font-family: Roboto;
        font-size: 14px;
        font-weight: 400;
        color: white;
    }
    h2{
        padding-left: 1%;
        font-family: Roboto;
        font-size: 16px;
        font-weight: 400;
        color: white;
        margin-bottom: 25px;
    }
`
const MiniLogoDriven = styled.div`
    padding-top: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
`
const Center = styled.div`
    display: flex;
    justify-content: center;
    padding-bottom: 5px;
    h1 {
    font-family: Roboto;
    font-size: 32px;
    font-weight: 700;
    color: white;
    margin-bottom: 14px;
    }
`
const BoxInput = styled.input`
    width: 299px;
    height: 52px;
    border: none;
    border-radius: 8px;
    display: flex;
    align-items: center;
    margin-top: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: black;
    font-family: 'Roboto';
    font-size: 16px;
    font-weight: 400;
`
const SpanFlex = styled.span`
    align-items: center;
    display: flex;
    padding-left: 5%;
`
const BoxInput2 = styled.input`
    width: 145px;
    height: 52px;
    border: none;
    border-radius: 8px;
    display: flex;
    align-items: center;
    margin-top: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: black;
    font-family: 'Roboto';
    font-size: 16px;
    font-weight: 400;
`
const ButtonInput = styled.button`
    width: 299px;
    height: 52px;
    border: none;
    border-radius: 8px;
    background-color: #FF4791;
    display: flex;
    align-items: center;
    margin-top: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-family: 'Roboto';
    font-size: 16px;
    font-weight: 700;
`
const Correctionbox = styled.div `
    width: 7px;
`