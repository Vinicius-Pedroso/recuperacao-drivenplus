import styled from "styled-components";
import Footer from "./Footer";
import HeaderHome from "./HeaderHome";
import HomeOptions from "./HomeOptions";

export default function ScreenPlus() {
    return (
        <Container>
            <HeaderHome/>
            <HomeOptions text="Solicitar brindes"/>
            <HomeOptions text="Materiais bônus de web"/>
            <HomeOptions text="Aulas bônus de tech"/>
            <HomeOptions text="Mentorias personalizadas"/>
            <Footer/>
        </Container>
    );
}
const Container = styled.div`
    background-color: #0E0E13;
    width: 90%;
    height: 100%;
    padding-left: 5%;
    padding-top: 5%;
    padding-right: 5%;
    padding-bottom: 5%;
`