import React from 'react';
import {WIDItems} from './WhatIDoItems';
import './whatIDoStyle.css';

export const WhatIDo = () => {
  console.log(WhatIDo.detail)
  return (
    <>
    <div className="container">
        <div className="whatIDo">
            <div className="heading">
               <h1>What I Do?</h1>
            </div>
            <div className='WID-details'>
            { WIDItems.map((item, index)=>{
                  return(
                    <p className='detail' key={index}>{item.detail}</p>
                  )
                })}
            </div>
        </div>
    </div>
    </>
  )
}
