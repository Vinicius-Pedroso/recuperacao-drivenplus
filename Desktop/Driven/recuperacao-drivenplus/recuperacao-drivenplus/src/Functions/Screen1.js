import styled from 'styled-components';

export default function Screen1 (){
    return (
        <>
        <DrivenLogo>
            <img src="/img/DrivenLogo" />
        </DrivenLogo>
        <ButtonRegister type='text' placeholder='E-mail'>
        </ButtonRegister>
        <ButtonRegister type='text' placeholder='Senha'>
        </ButtonRegister>
        <ButtonEnter>
            <p>ENTRAR</p>
        </ButtonEnter>
        <LoginRegisterSwitch>
            <p>Não possuí uma conta? Cadastre-se</p>
        </LoginRegisterSwitch>
        </>
    );
}

const DrivenLogo = styled.div`
    background-color: #0E0E13;
    margin-top: 100px;
    display:flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 50px;
`
const ButtonRegister = styled.button`
    width: 299px;
    height: 52px;
    border: none;
    border-radius: 8px;
    display: flex;
    align-items: center;
    margin-top: 15px;

    ::placeholder {
        padding-left: 15px;
        color: #7E7E7E;
        font-size: 14px;
        font-family: 'Roboto';
        font-weight: 400;
    }
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