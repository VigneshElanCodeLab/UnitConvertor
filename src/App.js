import React from 'react';
import Aux from '../src/hoc/aux';
import ConversionTabs from './Components/ConversionTabs/ConversionTabs';
import Footer from './Components/Footer/Footer';
import Header from '../src/Header/header';
  function App(){
  return (   
    <Aux > 
      <Header/> 
      <ConversionTabs/>
  <Footer/>
 </Aux>
 
    );
    };


export default App;