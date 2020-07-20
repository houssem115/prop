import React from 'react';
import './App.css';
import Profil from './profile/Profil';
function App() {
  const fon = (full_name) => {
    alert(full_name)
  }


  const mystyle={
    color:"green" ,
    padding:"20px"
    
  }
  return (
    <div>
      <Profil full_name={"  Houssem  "}bio ={" heloo  "}profession={" javascript "} mystyle={mystyle} fon={fon} />
        <center><img src="img1.jpg" border="7px" /></center>
    </div>
  );
}

export default App;
