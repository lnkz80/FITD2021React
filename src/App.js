import React from 'react'
import ListMenu from "./components/ListMenu"

import {mnuHead, mnuList} from "./data"

function App() {
  return (
   <div className="app">
     <div className="app__sidebar">        
        <ListMenu items={mnuHead} isHeader />
        <ListMenu items={mnuList} />         
     </div>
     <div className="app__content">
      <h3>Content</h3>
     </div>
   </div>
  );
}

export default App;
