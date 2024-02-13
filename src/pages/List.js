import React, { useContext } from 'react'
import Filters from '../components/Filters'
import ItemGrid from '../components/ItemGrid'
import ItemsContext from '../context/items'
import Spinner from '../components/Spinner';

function List() {
   const { pageLoading } = useContext(ItemsContext);

   return (
      <div className='flex flex-1 flex-row gap-7'>
         <Filters></Filters>
         {
            pageLoading
               ? <Spinner></Spinner>
               : <ItemGrid></ItemGrid>
         }
      </div>
   )
}

export default List

