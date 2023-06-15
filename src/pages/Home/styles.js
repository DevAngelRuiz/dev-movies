import styled from 'styled-components';

export const Background = styled.div`
    height: 100vh;
    background-image: url(${props => props.img});
    background-size: cover;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`;

export const Overlay = styled.div`
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5); /* Ajuste o valor do último parâmetro para controlar o nível de escurecimento */
`;
export const ContainerDescription = styled.div`
    z-index: 2;
    width: 40%;
    h1{
        color: #fff;
        font-size: 5rem;
        font-weight: 700;
    }
    p{
        color: #fff;
        font-size: 1.5rem;
        font-weight: 400;
        margin: 2% 0
    }
`;

export const ContainerPoster = styled.div`
z-index: 2;
img{
    width: 300px;
    height: auto;
    border-radius: 10%;

}


`;
