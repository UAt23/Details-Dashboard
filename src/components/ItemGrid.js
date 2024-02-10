import React from 'react'
import PropTypes from 'prop-types'

function ItemGrid(props) {
   return (
      <div className='flex flex-col gap-2.5'>
         <div className='flex flex-wrap gap-6 h-[80vh] overflow-auto'>
            <div class="max-w-44 max-h-96 mb- bg-white border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700">
               <a class="flex h-40 m-2.5 bg-[#C4C4C4]" href="#">
               </a>
               <div class="p-2.5">
                  <a href="#">
                     <h5 class="mb-2 text-sm font-medium text-[#2A59FE] dark:text-white">15.000 ₺</h5>
                  </a>
                  <p class="mb-3 font-medium text-black text-sm">iPhone 13 Pro Max 256Gb</p>
                  <a href="#" class="w-full inline-flex items-center justify-center px-1 py-1 rounded-[4px] text-base font-normal text-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                     Add to Cart
                  </a>
               </div>
            </div>
            <div class="max-w-44 max-h-96 bg-white border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700">
               <a class="flex h-40 m-2.5 bg-[#C4C4C4]" href="#">
               </a>
               <div class="p-2.5">
                  <a href="#">
                     <h5 class="mb-2 text-sm font-medium text-[#2A59FE] dark:text-white">15.000 ₺</h5>
                  </a>
                  <p class="mb-3 font-medium text-black text-sm">iPhone 13 Pro Max 256Gb</p>
                  <a href="#" class="w-full inline-flex items-center justify-center px-1 py-1 rounded-[4px] text-base font-normal text-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                     Add to Cart
                  </a>
               </div>
            </div>
            <div class="max-w-44 max-h-96 bg-white border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700">
               <a class="flex h-40 m-2.5 bg-[#C4C4C4]" href="#">
               </a>
               <div class="p-2.5">
                  <a href="#">
                     <h5 class="mb-2 text-sm font-medium text-[#2A59FE] dark:text-white">15.000 ₺</h5>
                  </a>
                  <p class="mb-3 font-medium text-black text-sm">iPhone 13 Pro Max 256Gb</p>
                  <a href="#" class="w-full inline-flex items-center justify-center px-1 py-1 rounded-[4px] text-base font-normal text-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                     Add to Cart
                  </a>
               </div>
            </div>
            <div class="max-w-44 max-h-96 bg-white border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700">
               <a class="flex h-40 m-2.5 bg-[#C4C4C4]" href="#">
               </a>
               <div class="p-2.5">
                  <a href="#">
                     <h5 class="mb-2 text-sm font-medium text-[#2A59FE] dark:text-white">15.000 ₺</h5>
                  </a>
                  <p class="mb-3 font-medium text-black text-sm">iPhone 13 Pro Max 256Gb</p>
                  <a href="#" class="w-full inline-flex items-center justify-center px-1 py-1 rounded-[4px] text-base font-normal text-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                     Add to Cart
                  </a>
               </div>
            </div>
            <div class="max-w-44 max-h-96 bg-white border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700">
               <a class="flex h-40 m-2.5 bg-[#C4C4C4]" href="#">
               </a>
               <div class="p-2.5">
                  <a href="#">
                     <h5 class="mb-2 text-sm font-medium text-[#2A59FE] dark:text-white">15.000 ₺</h5>
                  </a>
                  <p class="mb-3 font-medium text-black text-sm">iPhone 13 Pro Max 256Gb</p>
                  <a href="#" class="w-full inline-flex items-center justify-center px-1 py-1 rounded-[4px] text-base font-normal text-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                     Add to Cart
                  </a>
               </div>
            </div>
            <div class="max-w-44 max-h-96 bg-white border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700">
               <a class="flex h-40 m-2.5 bg-[#C4C4C4]" href="#">
               </a>
               <div class="p-2.5">
                  <a href="#">
                     <h5 class="mb-2 text-sm font-medium text-[#2A59FE] dark:text-white">15.000 ₺</h5>
                  </a>
                  <p class="mb-3 font-medium text-black text-sm">iPhone 13 Pro Max 256Gb</p>
                  <a href="#" class="w-full inline-flex items-center justify-center px-1 py-1 rounded-[4px] text-base font-normal text-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                     Add to Cart
                  </a>
               </div>
            </div>
         </div>
         <nav aria-label="Pagination" className='flex justify-center'>
            <ul class="flex items-center gap-1 -space-x-px h-6 text-sm">
               <li>
                  <a href="#" class="flex items-center justify-center px-2 h-6 ms-0 leading-tight text-[#00000050] rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                     <span class="sr-only">Previous</span>
                     <svg class="w-2.5 h-2.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4" />
                     </svg>
                  </a>
               </li>
               <li>
                  <a href="#" class="flex items-center justify-center px-2 h-6 leading-tight text-[#00000050]  hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</a>
               </li>
               <li>
                  <a href="#" class="flex items-center justify-center px-2 h-6 leading-tight text-[#00000050]  hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</a>
               </li>
               <li>
                  <a href="#" aria-current="page" class="z-10 flex items-center justify-center px-2 h-6 leading-tight text-[#2A59FE] bg-white rounded-md shadow-[0px_0px_10px_0px_rgba(162,170,180,0.25)]">3</a>
               </li>
               <li>
                  <a href="#" class="flex items-center justify-center px-2 h-6 leading-tight text-[#00000050]  hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">4</a>
               </li>
               <li>
                  <a href="#" class="flex items-center justify-center px-2 h-6 leading-tight text-[#00000050]  hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">5</a>
               </li>
               <li>
                  <a href="#" class="flex items-center justify-center px-2 h-6 leading-tight text-[#00000050]  rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                     <span class="sr-only">Next</span>
                     <svg class="w-2.5 h-2.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                     </svg>
                  </a>
               </li>
            </ul>
         </nav>
      </div>

   )
}

ItemGrid.propTypes = {

}

export default ItemGrid

