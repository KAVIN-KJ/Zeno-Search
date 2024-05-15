import React from 'react';

import TabList from './TabList';
import Toolbar from './Toolbar';
import BookmarksBar from './BookmarksBar';
import App from './App';
import ImageSearch from './ImageSearch'
import Card from './Card';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Dictionary from './Dictionary';
import Weather from './Weather';
import ZenoNews from './ZenoNews';
import { Route,BrowserRouter as  Router, Routes  } from 'react-router-dom';
function ContentViewer() {
  return (
    <Router>
            <div className='toolbarApp'>
              <TabList />
              <Toolbar/>
              <BookmarksBar/>
            </div>
          <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/Card' element={ <Card/>}/>
              <Route path='/Home' element={<Home/>} />
              <Route path='/About' element={<About/>}/>
              <Route path='/Contact' element={<Contact />}/>
              <Route path='/App' element={<App/>}/>
              <Route path='/Dictionary' element={<Dictionary/>}/>
              <Route path='/Weather' element={<Weather/>}/>
              <Route path='/ZenoNews' element={<ZenoNews/>}/>
              <Route path='/ImageSearch' element={<ImageSearch/>}/>

          </Routes>
          </Router>
  );
}

export default ContentViewer;
