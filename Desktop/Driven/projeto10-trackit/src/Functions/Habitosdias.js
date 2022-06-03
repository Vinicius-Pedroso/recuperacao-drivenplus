import React from 'react';
import styled from 'styled-components';

export default function Habitosdias() {
    return (
        <>
            <Boxinfo type="text" placeholder="Nome do hábito">
            </Boxinfo>
            <Dias>
                <Dia>D</Dia>
                <Dia>S</Dia>
                <Dia>T</Dia>
                <Dia>Q</Dia>
                <Dia>Q</Dia>
                <Dia>S</Dia>
                <Dia>S</Dia>
            </Dias>
            <Salvar>
                <p>Cancelar</p>
                <Plus>Salvar</Plus>
            </Salvar>
        </>
    );
}

const Boxinfo = styled.button`
    margin-left: 5%;
    display: block;
    margin-top: 5%;
    height: 45px;
    width: 300px;
    border: 1px solid #d4d4d4;
    border-radius: 5px;

    ::placeholder {
        font-size: 20px;
        color: #dbdbdb;
        font-family: 'Lexend Deca';
    }
`

const Dias = styled.div`
    margin-top: 15px;
    margin-left: 5%;
    display: flex;
`
const Dia = styled.button`
    margin-left: 4px;
    width: 30px;
    height: 30px;
    border: 1px solid #D4D4D4;
    border-radius: 5px;
    color: #DBDBDB;
    font-size: 20px;
    font-family: 'Lexend Deca';
    display: flex;
    justify-content: center;
    align-items: center;
`
const Salvar = styled.div`
    margin-right: 5%;
    margin-left: 40%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    p{
        padding-top: 18px;
        font-size: 18px;
        color: #52B6FF;
        font-family: 'Lexend Deca';
    }
`

const Plus = styled.button`
    background-color: #52B6FF;
    color: white;
    border: 1px none;
    border-radius: 5px;
    margin-top: 20px;
    font-size: 16px;
    height: 35px;
    width: 84px;
`