import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:"cart",
    initialState:[],
    reducers:{
        additem:(state,action)=>{
            let existitem = state.find((item)=>item.id===action.payload.id)
            if(existitem){
                return state.map((item)=>(item.id===action.payload.id?{...item, qty:item.qty+1}:item))
            }else
            {
                state.push(action.payload)
            }  
        },
        removeitem:(state,action)=>{
            return state.filter((item)=>item.id!==action.payload)
        },
        incrementqty:(state,action)=>{
            return state.map((item)=>item.id===action.payload.id?{...item, qty:item.qty+1}:item)
        },
        decrementqty:(state,action)=>{
            return state.map((item)=>item.id===action.payload.id?{...item, qty:item.qty-1}:item)
        }
    }
})

export const {additem,removeitem,incrementqty,decrementqty} = cartSlice.actions;
export default cartSlice.reducer;