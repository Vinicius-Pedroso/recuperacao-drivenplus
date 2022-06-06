import styled from "styled-components";

export default function HomeOptions ({text}){
    return (
        <Center>
            <ButtonOptions><p>{text}</p></ButtonOptions>
        </Center>
    );
}
const Center = styled.div`
    display: flex;
    justify-content: center;
`
const ButtonOptions = styled.div`
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