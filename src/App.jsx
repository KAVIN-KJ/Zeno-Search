import React, { createContext, useContext, useState, useEffect } from 'react';
import './App.css';
import ContentViewer from './ContentViewer';
export const backGround = createContext()
function App() {

  const [imageurl,seturl] = useState();

  function imageURL(url){
      seturl(url)
      console.log(url + " From App")
  }

  return (
    <div>
          <ContentViewer/>
    </div>
  );
}

export default App;
8