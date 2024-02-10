import React from 'react'
import Filters from './Filters'
import ItemGrid from './ItemGrid'
import Checkout from './Checkout'

function Layout(props) {
   return (
      <div className='px-20 pt-10 flex gap-7 bg-[#F9F9F9]'>
         <Filters></Filters>
         <ItemGrid></ItemGrid>
         <Checkout></Checkout>
      </div>
   )
}

Layout.propTypes = {

}

export default Layout

