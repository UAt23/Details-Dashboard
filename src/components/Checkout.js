import React from 'react'
import PropTypes from 'prop-types'

function Checkout(props) {
   return (
      <div>
         <div class='flex flex-col gap-1 h-36 mb-6'>
            <h3 class="font-400 text-[#333333b3] text-xs">Cart</h3>
            <ul class="w-56 h-36 text-sm font-medium text-gray-900 bg-white border border-gray-200 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]">
               <li class="w-full border-gray-200 rounded-t-lg p-2.5">
                  <form class="max-w-xs mx-auto flex justify-between">
                     <div className='flex flex-col'>
                        <label for="quantity-input" class="block text-xs font-medium text-black">Samsung s22</label>
                        <span className='text-[10px] font-medium text-[#2A59FE]'>12.000₺</span>
                     </div>
                     <div class="relative flex items-center max-w-[8rem]">
                        <button type="button" id="decrement-button" data-input-counter-decrement="quantity-input" class="bg-[#F3F4F6] hover:bg-gray-200  rounded-s-lg p-2 h-7 focus:ring-gray-100 focus:ring-2 focus:outline-none">
                           <svg class="w-3 h-3 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16" />
                           </svg>
                        </button>
                        <input type="text" id="quantity-input" data-input-counter aria-describedby="helper-text-explanation" class="bg-[#2A59FE] border-x-0 border-gray-300 h-7 text-center text-white text-sm focus:ring-blue-500 focus:border-blue-500 block w-8 py-1" placeholder="1" required>
                        </input>
                        <button type="button" id="increment-button" data-input-counter-increment="quantity-input" class="bg-[#F3F4F6] hover:bg-gray-200 rounded-e-lg p-2 h-7 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
                           <svg class="w-3 h-3 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16" />
                           </svg>
                        </button>
                     </div>
                  </form>
               </li>
            </ul>
         </div>
         <div class='flex flex-col gap-1 h-auto w-56 p-2.5 text-sm font-medium text-gray-900 bg-white border border-gray-200 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]'>
            <h3 class="font-400 text-[#000] text-sm">Total Price: <span className='font-bold text-[#2A59FE] text-sm'>{113.5}₺</span></h3>
            <a href="#" class="w-full inline-flex items-center justify-center px-1 py-1 rounded-[4px] text-sm font-normal text-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
               Checkout
            </a>
         </div>
      </div>
   )
}

Checkout.propTypes = {

}

export default Checkout

