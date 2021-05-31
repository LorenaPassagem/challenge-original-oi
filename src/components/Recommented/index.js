import React from 'react';
import { Price, Recommented, RecommentedShoes, RecommentedWallet } from './styles';

const WrapRecommented = () => (
    <>
    <Recommented/>
    <RecommentedWallet /> 
    <RecommentedShoes/>
    <Price>R$204,00</Price>
    </> 
)
export default WrapRecommented;