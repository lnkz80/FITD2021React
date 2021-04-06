import React, {useState} from 'react'
import classNames from 'classnames'
import { CSSTransitionGroup } from 'react-transition-group' 

import './ListMenu.scss'

const ListMenu = ({items, isHeader}) => {

    const [activeItem, setActiveItem] = useState(false)
        
    const subMnu  = (items) => {
        return (
        <ul className="submenu">
        {items.map(item =>            
            <li key={item.id}>                
                <a href="index.html">{item.text}</a>
            </li>            
        )}        
        </ul>
        )
    }    

    const mnulist = items.map((item, index) =>
            <React.Fragment key={`fr` + index}>
                <li key={item.id} 
                 className = {classNames({active : activeItem === item.id})} 
                 onClick={()=>setActiveItem(item.id)}>
                    <i>{item.icon}</i>
                    <span>{item.text}</span>                                            
                </li>  
                {activeItem === item.id && subMnu(item.submnu)}
            </React.Fragment>
        )     
         
    return (    
        <ul className={isHeader ? "headmenu" : "listmenu"}> 
            <CSSTransitionGroup
                transitionName="fade"
                transitionEnterTimeout={300}
                transitionLeaveTimeout={300}>                
                    {mnulist}                            
            </CSSTransitionGroup>               
        </ul>   
                 
    )
}

export default ListMenu