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
                <CSSTransitionGroup
                transitionName="mnuFade"
                transitionEnterTimeout={300}
                transitionLeaveTimeout={100}>    
                <li key={item.id} 
                 className = {classNames({active : activeItem === item.id})} 
                 onClick={()=>setActiveItem(item.id)}>
                    <i><svg width={item.icon.width} height={item.icon.height} viewBox={item.icon.viewbox} xmlns="http://www.w3.org/2000/svg"><path d={item.icon.pathD} /></svg></i>
                    <span>{item.text}</span>                                            
                </li>
                {activeItem === item.id && subMnu(item.submnu)}
                </CSSTransitionGroup>
            </React.Fragment>
        )     
         
    return (    
        <ul className={isHeader ? "headmenu" : "listmenu"}> 
            {mnulist}

            {/* <CSSTransitionGroup
                transitionName="mnuFade"
                transitionEnterTimeout={300}
                transitionLeaveTimeout={300}>                 */}
                    {/* {mnulist}                             */}
            {/* </CSSTransitionGroup>                */}
        </ul>   
                 
    )
}

export default ListMenu