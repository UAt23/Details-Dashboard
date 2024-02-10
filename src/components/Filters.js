import React from 'react'
import PropTypes from 'prop-types'

function Filters(props) {
   return (
      <div class=''>
         <div class='flex flex-col gap-1 h-36 pb-48'>
            <h3 class="font-400 text-[#333333b3] text-xs">Sort by</h3>
            <ul class="w-48 text-sm font-medium text-gray-900 bg-white border border-gray-200 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25);] dark:bg-gray-700 dark:border-gray-600 dark:text-white">
               <li class="w-full border-gray-200 rounded-t-lg dark:border-gray-600">
                  <div class="flex items-center ps-3">
                     <input id="list-radio-license" type="radio" value="" name="list-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                     </input>
                     <label for="list-radio-license" class="w-full py-2 ms-2 text-sm  font-normal text-gray-900 dark:text-gray-300">Old to new </label>
                  </div>
               </li>
               <li class="w-full border-gray-200 rounded-t-lg dark:border-gray-600">
                  <div class="flex items-center ps-3">
                     <input id="list-radio-id" type="radio" value="" name="list-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                     </input>
                     <label for="list-radio-id" class="w-full py-2 ms-2 text-sm  font-normal text-gray-900 dark:text-gray-300">New to old</label>
                  </div>
               </li>
               <li class="w-full border-gray-200 rounded-t-lg dark:border-gray-600">
                  <div class="flex items-center ps-3">
                     <input id="list-radio-military" type="radio" value="" name="list-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                     </input>
                     <label for="list-radio-military" class="w-full py-2 ms-2 text-sm  font-normal text-gray-900 dark:text-gray-300">Price hight to low</label>
                  </div>
               </li>
               <li class="w-full border-gray-200 rounded-t-lg dark:border-gray-600">
                  <div class="flex items-center ps-3">
                     <input id="list-radio-passport" type="radio" value="" name="list-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                     </input>
                     <label for="list-radio-passport" class="w-full py-2 ms-2 text-sm  font-normal text-gray-900 dark:text-gray-300">Price low to High</label>
                  </div>
               </li>
            </ul>
         </div>
         <div class='flex flex-col gap-1 pb-6'>
            <h3 class="font-400 text-[#333333b3] text-xs">Brands</h3>
            <ul class="w-48 text-sm font-medium text-gray-900 bg-white border border-gray-200 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25);] dark:bg-gray-700 dark:border-gray-600 dark:text-white">

               <form class='pt-4'>
                  <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                  <div class="relative flex justify-center">
                     <div class="absolute inset-y-0 start-6 flex items-center ps-3 pointer-events-none">
                        <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                           <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg>
                     </div>
                     <input type="search" id="default-search" class="block w-3/4 p-2 ps-10 text-sm text-gray-900 border-0 shadow-[0px_4px_4px_0px_rgba(0, 0, 0, 0.25);] bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required>
                     </input>
                  </div>
               </form>
               <div class='h-32 overflow-y-auto'>
                  <li class="w-full border-gray-200 rounded-t-lg dark:border-gray-600">
                     <div class="flex items-center ps-3 pb-2">
                        <input id="vue-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                        </input>
                        <label for="vue-checkbox" class="w-full py-2 ms-2 text-sm font-normal text-gray-900 dark:text-gray-300">Apple</label>
                     </div>
                  </li>
                  <li class="w-full border-gray-200 rounded-t-lg dark:border-gray-600">
                     <div class="flex items-center ps-3 pb-2">
                        <input id="react-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                        </input>
                        <label for="react-checkbox" class="w-full py-2 ms-2 text-sm font-normal text-gray-900 dark:text-gray-300">Samsung</label>
                     </div>
                  </li>
                  <li class="w-full border-gray-200 rounded-t-lg dark:border-gray-600">
                     <div class="flex items-center ps-3 pb-2">
                        <input id="angular-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                        </input>
                        <label for="angular-checkbox" class="w-full py-2 ms-2 text-sm font-normal text-gray-900 dark:text-gray-300">Huawei</label>
                     </div>
                  </li>
                  <li class="w-full border-gray-200 rounded-t-lg dark:border-gray-600">
                     <div class="flex items-center ps-3 pb-2">
                        <input id="laravel-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                        </input>
                        <label for="laravel-checkbox" class="w-full py-2 ms-2 text-sm font-normal text-gray-900 dark:text-gray-300">Oppo</label>
                     </div>
                  </li>
               </div>
            </ul>
         </div>
         <div class='flex flex-col gap-1 pb-5'>
            <h3 class="font-400 text-[#333333b3] text-xs">Model</h3>
            <ul class="w-48 text-sm font-medium text-gray-900 bg-white border border-gray-200 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] dark:bg-gray-700 dark:border-gray-600 dark:text-white">

               <form class='pt-4'>
                  <label for="default-search" class="mb-2 text-sm font-normal text-gray-900 sr-only dark:text-white">Search</label>
                  <div class="relative flex justify-center">
                     <div class="absolute inset-y-0 start-6 flex items-center ps-3 pointer-events-none">
                        <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                           <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg>
                     </div>
                     <input type="search" id="default-search" class="block w-3/4 p-2 ps-10 text-sm text-gray-900 border-0 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required>
                     </input>
                  </div>
               </form>

               <div class='h-32 overflow-y-auto'>

                  <li class="w-full border-gray-200 rounded-t-lg dark:border-gray-600">
                     <div class="flex items-center ps-3">
                        <input id="vue-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                        </input>
                        <label for="vue-checkbox" class="w-full py-2 ms-2 text-sm font-normal text-gray-900 dark:text-gray-300">11</label>
                     </div>
                  </li>
                  <li class="w-full border-gray-200 rounded-t-lg dark:border-gray-600">
                     <div class="flex items-center ps-3">
                        <input id="react-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                        </input>
                        <label for="react-checkbox" class="w-full py-2 ms-2 text-sm font-normal text-gray-900 dark:text-gray-300">12 Pro</label>
                     </div>
                  </li>
                  <li class="w-full border-gray-200 rounded-t-lg dark:border-gray-600">
                     <div class="flex items-center ps-3">
                        <input id="angular-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                        </input>
                        <label for="angular-checkbox" class="w-full py-2 ms-2 text-sm font-normal text-gray-900 dark:text-gray-300">13 Pro Max</label>
                     </div>
                  </li>
                  <li class="w-full border-gray-200 rounded-t-lg dark:border-gray-600">
                     <div class="flex items-center ps-3">
                        <input id="laravel-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                        </input>
                        <label for="laravel-checkbox" class="w-full py-2 ms-2 text-sm font-normal text-gray-900 dark:text-gray-300">Laravel</label>
                     </div>
                  </li>
               </div>
            </ul>
         </div>
      </div>
   )
}

Filters.propTypes = {

}

export default Filters

