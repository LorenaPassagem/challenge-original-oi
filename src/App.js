import React, {useState} from 'react';
import ButtonAddBags from './components/ButtonAddBags';
import { DescritionTitle, DescritionText } from './components/Descrition';
import Header from './components/Header';
import IconBag from './components/IconBag';
import IconSearch from './components/IconSearch';
import ImgProd from './components/ImgProd';
import { Institucional, Informaticoes,Conheca } from './components/About';
import LogoOriginal from './components/LogoOriginal'
import Menu from './components/Menu';
import { PagesNumer, Page } from './components/PagesNumber';
import WrapRecommented from './components/Recommented';
import WrapSize from './components/SizeProd'; 
import {TitleProduct, Info} from './components/TitleProduct';
import WrapColor from './components/WrapColor';
import Base from './styles/settings/Base';
import WrapIcon from './components/SocialMedia';
import Footer from './components/Footer';
import Modal from './components/Modal';

function App() {
  const [ModalVisible, setModalVisible] = useState(false);

return (
  <>
   <Header> 
     <Menu />
     <LogoOriginal />         
     <IconSearch />
     <IconBag /> 
   </Header>
   
   <TitleProduct> Rasteira tira dedo</TitleProduct>
   <Info> RT 0568 | 03.07.0653 </Info>
   <ImgProd />

   <WrapColor color />
   <WrapSize />
   <ButtonAddBags onClick={() => setModalVisible(true)}>Adicionar à sacola</ ButtonAddBags>
    {ModalVisible ? <Modal />:null}
    
   <DescritionTitle> Descrição </ DescritionTitle>
   <DescritionText>
    Rasteira em atanado soft com tira no dedo e fechamento de fivela. 
    Possui sola sempre na cor do cabedal.
   </DescritionText>
   <WrapRecommented />
   <PagesNumer/><Page >1 de 2</Page> <PagesNumer/>   

   <Institucional>institucional </Institucional>
   <Informaticoes>Informações</Informaticoes>
   <Conheca>Conheça</Conheca>

   <WrapIcon />
   <Footer>
      Via Mia | V. Milano Centro Comercio de Bolsas Eireli - EPP.
      Av.das Américas, 500 - bloco 20, loja 126 - Barra da Tijuca - Rio de Janeiro - RJ - CEP: 22640-100
      CNPJ: 05.292.288/0002-10 - I.E: 86.732.548 - E-mail: ecommerce@viamia.com.br
   </Footer>
   
   <Base />
  </> 
);
}

export default App;
