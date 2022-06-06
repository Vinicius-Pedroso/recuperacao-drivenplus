import styled from "styled-components";

export default function Confirmation({setConfirm, setScreen}) {
    return (
        <PromptConfirma>
            <h1>Tem certeza que deseja assinar o plano Driven Plus (R$ xx,xx)?</h1>
            <ButtonEndLayout>
                <ButtonEnd onClick={() => setConfirm(false)}>Não</ButtonEnd>
                <ButtonEnd2 onClick={() => {setConfirm(false); setScreen(1)}} >SIM</ButtonEnd2>
            </ButtonEndLayout>
        </PromptConfirma>

    );
}
const PromptConfirma = styled.div` 
    position: fixed;
    height: 210px;
    width: 248px;
    left: 64px;
    top: 229px;
    border-radius: 12px;
    background-color: white;
    h1 {
    margin-top: 30px;
    font-family: Roboto;
    font-size: 18px;
    text-align: center;
    font-weight: 700;
    }
`
const ButtonEndLayout = styled.div`
    margin-top: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
`
const ButtonEnd = styled.button`
    width: 95px;
    height: 52px;
    background-color: #CECECE;
    color: white;
    font-family: Roboto;
    font-size: 14px;
    font-weight: 400;
    border: none;
    border-radius: 8px;
`
const ButtonEnd2 = styled.button`
    width: 95px;
    height: 52px;
    background-color: #FF4791;
    color: white;
    font-family: Roboto;
    font-size: 14px;
    font-weight: 400;
    border: none;
    border-radius: 8px;
    margin-left: 14px;
`