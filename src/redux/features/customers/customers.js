import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const customerSlice = createSlice({
  name: "customers",
  initialState,
  reducers: {
    addCustomer: (state, action) => {
      state.push(action.payload);
      console.log(state);
    },
    removeCustomer: (state, action) => {
      console.log("RemoveCusotmerState", state);
      console.log("RemoveCustomerAction", action);
      return state.filter((customer) => customer.id !== action.payload);
    },
    editContact: (state, action) => {
      console.log("Editing:", action.payload);
      const { age, birthday, data, email, fullName, gender, id, phone } =
        action.payload;

      const foundContact = state.find((contact) => contact.id === id);

      if (foundContact) {
        foundContact.fullName = fullName;
        foundContact.age = age;
        foundContact.birthday = birthday;
        foundContact.email = email;
        foundContact.gender = gender;
        foundContact.phone = phone;
        foundContact.age = age;
        foundContact.data = data;
      }
    },
  },
});

export const { addCustomer, removeCustomer, editContact } =
  customerSlice.actions;
export default customerSlice.reducer;
