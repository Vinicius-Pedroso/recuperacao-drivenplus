import styled from "styled-components";

export default function Footer(){
    return (
        <Foot>
            <ChangeService><p>Mudar plano</p></ChangeService>
            <CancelService><p>Cancelar Plano</p></CancelService>
        </Foot>
    );
}

const Foot = styled.div`
    margin-top: 50px;
    bottom: 10px;
    padding-left: 6%;
`
const ChangeService = styled.div`
    width: 299px;
    height: 52px;
    background-color: #FF4791;
    border: none;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 5px;

    p {
        color: white;
        font-family: 'Roboto';
        font-size: 14px;
        font-weight: 400;
    }
`
const CancelService = styled.div`
    width: 299px;
    height: 52px;
    background-color: #FF4747;
    border: none;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 5px;

    p {
        color: white;
        font-family: 'Roboto';
        font-size: 14px;
        font-weight: 400;
    }
`