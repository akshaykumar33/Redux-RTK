import {configureStore} from '@reduxjs/toolkit'
import counterReducer from './features/counter/counterSlice'
import {setupListeners} from '@reduxjs/toolkit/query';//for caching
import { productsApi } from './service/dummyData';

export const store=configureStore({
    reducer:{
        counter:counterReducer,
        [productsApi.reducerPath]:productsApi.reducer,//RTKQuery
    },
    middleware:(getDefaultMiddleware)=>
    getDefaultMiddleware().concat(productsApi.middleware),

})
setupListeners(store.dispatch) 