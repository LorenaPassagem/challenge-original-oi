import ButtonAddBags from './components/ButtonAddBags';
import { DescritionTitle, DescritionText } from './components/Descrition';
import Header from './components/Header';
import IconBag from './components/IconBag';
import IconSearch from './components/IconSearch';
import ImgProd from './components/ImgProd';
import LogoOriginal from './components/LogoOriginal'
import Menu from './components/Menu';
import { PagesNumer, Page } from './components/PagesNumber';
import WrapRecommented from './components/Recommented';
import WrapSize from './components/SizeProd'; 
import {TitleProduct, Info} from './components/TitleProduct';
import WrapColor from './components/WrapColor';
import Base from './styles/settings/Base';

function App() {
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
   <ButtonAddBags>Adicionar à sacola</ButtonAddBags>
   <DescritionTitle> Descrição </ DescritionTitle>
   <DescritionText>
    Rasteira em atanado soft com tira no dedo e fechamento de fivela. 
    Possui sola sempre na cor do cabedal.
   </DescritionText>
   <WrapRecommented />
   <PagesNumer/><Page >1 de 2</Page> <PagesNumer/>
   

   <Base />
  </> 
);
}

export default App;
