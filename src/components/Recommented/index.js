import React from 'react';
import { Price, Recommented, RecommentedShoes, RecommentedWallet } from './styles';

const WrapRecommented = ({children}) => (
     <>
        <Recommented/>
        <RecommentedWallet /> <Price>R$204,00</Price>  
        <RecommentedShoes /> <Price>R$204,00</Price> 
     </> 
)
export default WrapRecommented;