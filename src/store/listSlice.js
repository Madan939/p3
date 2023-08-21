const {createSlice}=require("@reduxjs/toolkit")

const cardlist=createSlice({
    name:"card",
    initialState:{
        cartlist:[],
        Task:{}
    },
    reducers:{
        add(state,action){
           // console.log(action.payload)
            const updatedlist=state.cartlist.concat(action.payload)
            return {...state,cartlist:updatedlist}

        },
        remove(state,action){
           // console.log(action.payload)
            const updatelist=state.cartlist.filter(list=>list.id!==action.payload.id)
           return {...state,cartlist:updatelist}
        },
        edit(state,action){
          console.log(state.cartlist.find(item=>item.id===action.payload.id))
            
        },
    },
})
export const {add,remove,edit,update}=cardlist.actions
export const cardReducer=cardlist.reducer
