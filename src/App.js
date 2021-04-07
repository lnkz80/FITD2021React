import React from 'react'
import ListMenu from "./components/ListMenu"
import Content from "./components/Content"

// import {mnuHead, mnuList} from "./data"
import DB from "./data.json"

function App() {
  return (
   <div className="app">
     <div className="app__sidebar">        
        <ListMenu items={DB.mnuHead} isHeader />
        <ListMenu items={DB.mnuList} />         
     </div>
     <div className="app__content">
      <Content/>
     </div>
   </div>
  );
}

export default App;
