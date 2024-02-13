import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Detail from '../pages/Detail'
import Checkout from '../components/Checkout'
import List from './List';

function Layout(props) {
   return (
      <div className='px-10 pt-10 flex gap-7 bg-[#F9F9F9]'>
         <Router>
            <Routes>
               <Route exact path="/" element={<List />} />
               <Route
                  path="/detail"
                  element={<Detail />}
               />
            </Routes>
         </Router>
         <Checkout></Checkout>
      </div>
   )
}

Layout.propTypes = {

}

export default Layout

