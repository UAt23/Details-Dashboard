import { createContext, useState } from "react";
import getAllItems from "../api";
import SORTTYPE from "../constants/sort";

const ItemsContext = createContext();

function Provider({ children }) {
   const [appData, setAppData] = useState([]);
   const [displayedData, setDisplayedData] = useState([]);
   // ITEM STATE
   const [selectedItem, setSelectedItem] = useState();
   // FILTER STATES
   const [sort, setSort] = useState(SORTTYPE.oldNew);
   const [brands, setBrands] = useState([]);
   const [models, setModels] = useState([]);
   // CHECKOUT STATES
   const [cart, setCart] = useState([]);
   const [total, setTotal] = useState(0);
   // PAGINATION STATES
   const [paginate, setPaginate] = useState({
      currentPage: 1,
      totalPages: 0,
   });
   // PAGE LOADING STATE
   const [pageLoading, setPageLoading] = useState(true);


   async function fetchData() {
      const res = await getAllItems().finally(() => setPageLoading(false));
      setAppData(res);
      paginateData(res);
      createFilterData(res);
   }

   // PAGINATOR ----------------------------------------------------------------

   function paginateData(items, page = 1, perPage = 12) {
      if (items) {
         const paginatedData = items.slice(perPage * (page - 1), perPage * page);
         const totalPages = Math.ceil(items.length / perPage);
         setPaginate({
            currentPage: page,
            totalPages
         });
         setDisplayedData(paginatedData);
      }
   }

   function updatePaginator(newPage) {
      if (newPage >= 1 && newPage <= paginate.totalPages) {
         paginateData(appData, newPage);
         setPaginate(
            {
               currentPage: newPage,
               totalPages: paginate.totalPages
            }
         )
      }
   }

   // Search ----------------------------------------------------------------

   function search(query) {
      const found = appData && appData.filter(element => {
         const searchFields = ["name"];

         return searchFields.some((field) =>
            element[field].toLowerCase().includes(query.toLowerCase())
         );
      })
      paginateData(found);
   }

   // Filters ----------------------------------------------------------------

   function createFilterData(data) {
      let models
      let brands
      if (data) {
         models = data.map(item => {
            return item.model
         })
         brands = data.map(item => {
            return item.brand
         })
         setModels(models);
         setBrands(brands);
      }
   }

   // Cart --------------------------------

   function updateCart(item) {
      const newItem = {
         id: item.id,
         name: item.name,
         price: item.price,
         amount: 1
      }
      const existingItem = cart && cart.find(element => element.id === item.id);
      if (existingItem) {
         increaseItemAmount(existingItem)
      } else {
         updateTotal(item, 1);
         setCart([...cart, newItem]);
      }
   }

   function increaseItemAmount(item) {
      const existingItem = cart && cart.find(element => element.id === item.id);
      if (existingItem) {
         existingItem.amount++;
         updateTotal(item, 1);
      }
      setCart([...cart]);
   }

   function decreaseItemAmount(item) {
      const existingItem = cart && cart.find(element => element.id === item.id);
      if (existingItem) {
         if (existingItem.amount === 1) {
            const newArray = (cart.filter(element => element.id !== existingItem.id))
            setCart([...newArray]);
         } else {
            existingItem.amount--;
            setCart([...cart]);
         }
         updateTotal(item, 0);
      }
   }

   function updateTotal(item, type) {
      if (type) {
         setTotal(total + Number(item.price));
      } else {
         setTotal(total - Number(item.price));
      }
   }

   const appContext = {
      displayedData,
      fetchData,
      paginate,
      updatePaginator,
      search,
      models,
      brands,
      cart,
      updateCart,
      increaseItemAmount,
      decreaseItemAmount,
      total,
      pageLoading
   }

   return (
      <ItemsContext.Provider value={appContext}>
         {children}
      </ItemsContext.Provider>
   )
}
export { Provider };
export default ItemsContext;