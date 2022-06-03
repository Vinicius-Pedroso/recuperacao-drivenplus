import styled from 'styled-components';

export default function Screen1 (){
    return (
        <>
        <DrivenLogo>
            <img src="/img/DrivenLogo" />
        </DrivenLogo>
        </>
    );
}

const DrivenLogo = styled.div`
    background-color: #E5E5E5;
    margin-top: 100px;
    display:flex;
    justify-content: center;
    align-items: center;
`