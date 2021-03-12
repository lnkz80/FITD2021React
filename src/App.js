import React from 'react'

import logo from './assets/img/logo.jpg'

function App() {
  return (
   <div className="app">
     <div className="app__sidebar">
       {/* <img src={logo} alt="logo" /> */}
        <h3>SideBar</h3>        
     </div>
     <div className="app__content">
      <h3>Content</h3>
     </div>
   </div>
  );
}

export default App;
