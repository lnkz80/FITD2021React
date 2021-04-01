import React from 'react'
import classNames from 'classnames'

import './ListMenu.scss'

const ListMenu = ({items, isHeader}) => {
    
    const subMnu  = (items) => {
        return (
        <ul className="submenu">
        {items.map(item =>            
            <li><a href="">{item.text}</a></li>
        )}
        </ul>
        )
    }

    const mnulist  = items.map(item =>
            <>                
                <li key={item.id} className = {classNames({active:item.active})}>
                    <i>{item.icon}</i>
                    <span>{item.text}</span>                                            
                </li>  
                {item.active && subMnu(item.submnu)}          
            </>
        )       
    
         
    return (    
            <ul className={isHeader ? "headmenu" : "listmenu"}>                
                {mnulist}            
            </ul>        
    )
}

export default ListMenu