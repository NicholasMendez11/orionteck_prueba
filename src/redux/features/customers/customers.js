import { createSlice } from "@reduxjs/toolkit";

const initialState = [{
    fullName:"Roberto Antonio Mendez",
    gender:"Hombre",
    age:"53",
    phone:"809-873-6034",
    email:"roberto@email.com",
    id:"1"
},
{
    fullName:"Tatiana Bertrand",
    gender:"Mujer",
    age:"49",
    phone:"809-457-5534",
    email:"tatiana@bertrand.com",
    id:"2"
}
]

const customerSlice = createSlice({
    name:"customers",
    initialState,
    reducers:{
        addCustomer:(state,action)=>{
            state.push(action.payload)
            console.log(state)
        }
    }
})

export const {addCustomer} = customerSlice.actions;
export default customerSlice.reducer;
