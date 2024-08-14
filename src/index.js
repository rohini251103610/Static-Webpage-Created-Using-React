import React from 'react';
import ReactDOM from 'react-dom';
import Header from './component/header.js'
import Content from './component/content.js';
import Footer from './component/footer.js';
import './index.css';

function Welcome(){
  return(
    <div>
    <Header/>
    <Content/>
    <Footer/>
  </div>

  )
}
ReactDOM.render(<Welcome/>,document.getElementById("root"));
