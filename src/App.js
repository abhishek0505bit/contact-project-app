//we have used semantic  ui for  styling, refer index.html for more [line: 17] used cdn link to link semantic ui


import React from 'react';
import './App.css';
import Header from "./component/Header";
import AddContact from "./component/AddContact";
import ContactList  from "./component/ContactList";


function App() {
  return (
    <>
    {/* THis is how we show the components in the react */}
    <Header/> 
    <AddContact/>
    {/* <ContactList/> */}

  </>
  );
}

export default App;
