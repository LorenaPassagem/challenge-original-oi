import Header from './components/Header';
import IconBag from './components/IconBag';
import IconSearch from './components/IconSearch';
import ImgProd from './components/ImgProd';
import LogoOriginal from './components/LogoOriginal'
import Menu from './components/Menu';
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
   
   <Base />
  </> 
);
}

export default App;
