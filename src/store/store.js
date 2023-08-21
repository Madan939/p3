import { configureStore } from "@reduxjs/toolkit";
import { cardReducer } from "./listSlice";
const store= configureStore({
    reducer:{
        cardState:cardReducer
    }
})
export default store