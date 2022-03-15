import React from 'react';
import './custom-button.css';

const CustomButton =({children,largeBtn,...buttonprops}) => {
   return(
  
        <button className={`${largeBtn?  'largeBtn': ''} custom-button`}{...buttonprops}>
         {children}
         </button>

  )
}

export default CustomButton