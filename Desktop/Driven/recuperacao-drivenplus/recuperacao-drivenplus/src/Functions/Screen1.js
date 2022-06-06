import styled from 'styled-components';
import ButtonRegister from './ButtonRegister';
import drivenlogo from './img/drivenlogo.png';
//import axios from 'axios';

export default function Screen1({setScreen}) {

    /*const URL = "https://mock-api.driven.com.br/api/v4/driven-plus/auth/login"
    const LoginPromisse = axios.post(URL);
    */
    return (
        <Container>
            <Driven>
                <img src={drivenlogo} />
            </Driven>
            <ButtonRegister text="E-mail"/>
            <ButtonRegister text="Senha"/>
            <Center>
                <ButtonEnter onClick={() => {
                    setScreen(5)

                }}>
                    <p>ENTRAR</p>
                </ButtonEnter>
            </Center>

            <LoginRegisterSwitch onClick={() => setScreen(2)}>
                <p>Não possuí uma conta? Cadastre-se</p>
            </LoginRegisterSwitch>
        </Container>
    );
}
/*
function SendLogin (){
    const URL = "https://mock-api.driven.com.br/api/v4/driven-plus/auth/login";
    const LoginPromisse = axios.post(URL);
    LoginPromisse.then(response => {
        const {user} = response;
        setId(user.id);
    })
    LoginPromisse.catch(error => {
        const ErrorMessage = error.response.statusText;
        console.log(ErrorMessage);
    })
};
*/

const Container = styled.div`
    background-color: #0E0E13;
    width: 100%;
    height: 100vh;
    div {
    display: flex;
    justify-content: center;
    }
`
const Center = styled.div`
    display: flex;
    justify-content: center;
`
const Driven = styled.div`
    background-color: #0E0E13;
    padding-top: 100px;
    display:flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 50px;
`
const ButtonEnter = styled.div`
    width: 299px;
    height: 52px;
    background-color: #FF4791;
    border: none;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 40px;

    p {
        color: white;
        font-family: 'Roboto';
        font-size: 14px;
        font-weight: 700;
    }
`
const LoginRegisterSwitch = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 25px;
    p{
        color: white;
        font-family: 'Roboto';
        font-size: 14px;
        font-weight: 400;
        text-decoration: underline;
    }
`
