import React, { useContext } from 'react'
import ItemsContext from '../context/items'

function Item({ item }) {
   const { updateCart } = useContext(ItemsContext)

   const addToCart = () => {
      updateCart(item);
   }

   return (
      <div className="flex flex-col w-48 h-[22rem] bg-white border border-gray-200 shadow">
         <a className="flex h-40 m-2.5 bg-[#C4C4C4]" href='#'>
            <img alt="books" src={item.image} />
         </a>
         <div className="flex flex-1 flex-col justify-between p-2.5">
            <div className='flex flex-col '>
               <a href="#">
                  <h5 className="mb-2 text-sm font-medium text-[#2A59FE] dark:text-white">{item.price} ₺</h5>
               </a>
               <p className="mb-3 font-medium text-black text-sm">{item.name}</p>
               <p className="mb-1 font-medium text-black text-xs">{item.brand}</p>
               <p className="mb-1 font-medium text-black text-xs">{item.model}</p>
            </div>
            <p onClick={addToCart} href="#" className="w-full inline-flex items-center justify-center px-1 py-1 rounded-[4px] text-base font-normal text-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
               Add to Cart
            </p>
         </div>
      </div>
   )
}

export default Item