import styled from 'styled-components';
import Prod1 from '../../Imagens/prod01.png';
import Prod2 from '../../Imagens/prod02.png';

export const Recommented = styled.h3`
    color: var(--color-primary);
    text-transform: uppercase;
    size:22px;
    text-align: center;
    font-style: normal;
    font-weight: 400;
`;

export const RecommentedWallet = styled.img.attrs({src:Prod1, alt:'produto recomedado'})`
    height:178px;
    width: 138px;
    margin: 2%;
`;

export const RecommentedShoes = styled.img.attrs({src:Prod2, alt:'sapato recomendado'})`
    height:178px;
    width: 138px;
`;

export const Price = styled.figcaption`
    font-family: Montserrat;
    font-size:12px;
`;
