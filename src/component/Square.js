import React from 'react';
import '../style/squer.css';
import Cross from './Cross'
import Circle from './Circle';

const Square=({position,value,taketurn},)=>{

    function handleClick(){
        if(value==="EMPTY"){
            taketurn(position);
        }

    }
    return(
<div className="squer" onClick={handleClick}>
    
    {value==="CIRCLE" && <Circle/>}
    {value==="CROSS" && <Cross/>}
 
</div>
    );
}
export default Square;