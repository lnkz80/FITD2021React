import React from 'react'

import './ListMenu.scss'

 const ListMenu = ({items, isHeader}) => {
     
    
    return (
        <div className="listmenu">
            <ul>
                <li>
                    <i>
                        { isHeader ? items.icon : 'ico' }
                    </i>
                    <span>
                        {items.text}
                    </span>
                </li>           
            </ul>
        </div>
    )
}

export default ListMenu