import styled from 'styled-components';
import ButtonRegister from './ButtonRegister';

export default function Screen2 (){
    return (
        <Container>
            <ButtonRegister text="Nome"/>
            <ButtonRegister text="CPF"/>
            <ButtonRegister text="E-mail"/>
            <ButtonRegister text="Senha"/>
            <div>
                <ButtonInput>
                    <p>CADASTRAR</p>
                </ButtonInput>
            </div>
            <div>
                <h1>Já possuí uma conta? Entre</h1>
            </div>
        </Container>
    );
}
const Container = styled.div`
    padding-top: 120px;
    background-color: #0E0E13;
    width: 100%;
    height: 100vh;
    div {
        display: flex;
        justify-content: center;
    }
    h1 {
        margin-top: 25px;
        color: white;
        font-family: 'Roboto';
        font-size: 14px;
        font-weight: 400;
        text-decoration: underline;
    }   
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






































