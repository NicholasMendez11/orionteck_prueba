import { createSlice } from "@reduxjs/toolkit";

const initialState = [
]

const customerSlice = createSlice({
    name:"customers",
    initialState,
    reducers:{
        addCustomer:(state,action)=>{
            state.push(action.payload)
            console.log(state)
        },
        removeCustomer: (state, action) => {
            console.log('RemoveCusotmerState', state)
            console.log('RemoveCustomerAction', action)
            return state.filter((customer) => customer.id !== action.payload) 
            

        },
    }
})

export const {addCustomer,removeCustomer} = customerSlice.actions;
export default customerSlice.reducer;
