import React from 'react';
import { Circles, LabelColor } from '../../Objects/Cor';

   const WrapColor = ({color}) => (
   <>     
     <LabelColor>Cor:</LabelColor>
     <Circles color="secondary"/>
     <Circles color="primary"/>
     <Circles color="action"/>
     <Circles />
  </>   
);

export default WrapColor;
   