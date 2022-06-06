import styled from "styled-components";
import vector1 from './img/vector1.png'
import user from './img/user.png'

export default function HeaderHome (){
    return (
        <Header>
            <div>
                <div>
                    <img src={vector1} />
                </div>
                <VectorUser>
                    <img src={user} />
                </VectorUser>
            </div>
            <h1>Olá, fulano</h1>

        </Header>
    );
}

const Header = styled.div`
    margin-bottom: 30px;
    div {
    display: flex;
    justify-content: space-between;
    }
    h1 {
        margin-top: 15px;
        text-align: center;
        font-family: Roboto;
        font-size: 24px;
        font-weight: 700;
        color: white;
    }
`
const VectorUser = styled.div`
    img {
        max-height: 33px;
        max-width: 33px;
    }
`