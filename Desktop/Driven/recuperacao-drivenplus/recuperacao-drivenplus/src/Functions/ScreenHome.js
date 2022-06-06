import styled from "styled-components";
import Footer from "./Footer";
import HeaderHome from "./HeaderHome";
import HomeOptions from "./HomeOptions";
import { useState } from "react";

export default function ScreenPlus() {
    const [Service, setService]= useState(1);
    return (
        <Container>
            <HeaderHome service ={Service}/>
            <HomeOptions text="Solicitar brindes" service ={Service}/>
            <HomeOptions text="Materiais bônus de web" service ={Service}/>
            {(Service == 2 || Service == 3) && <HomeOptions text="Aulas bônus de tech" service ={Service}/>}
            {Service == 3 && <HomeOptions text="Mentorias personalizadas" service ={Service}/>}
            <Footer/>
        </Container>
    );
}
const Container = styled.div`
    background-color: #0E0E13;
    width: 90%;
    height: 100%;
    min-height: 100vh;
    padding-left: 5%;
    padding-top: 5%;
    padding-right: 5%;
    padding-bottom: 5%;
`









































