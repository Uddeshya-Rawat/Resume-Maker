// create slice for form 
import { createSlice } from "@reduxjs/toolkit";


// create intial state
const initialState = {
    firstName: 'John',
    lastName: 'Doe',
    email: "JohnDoe@gmail.com",
    contactNumber: 999999999,
    address: 'xyz street, California , USA'

}


// export slice 
export const formSlice = createSlice({
    name: 'form',  // slice name 
    initialState,  // intial state
    reducers: {   // reducers function to change the state
        changeFirstName: (state, action) => {  // state is the previous state and action.payload has current value
            state.firstName = action.payload
        },
        changeLastName: (state, action) => {
            state.lastName = action.payload
        },
        changeEmail: (state, action) => {
            state.email = action.payload
        },
        changeAddress: (state, action) => {
             state.contactNumber=action.payload
        }
    }

})

export const { changeFirstName, changeLastName, changeEmail, changeAddress ,changeNumber } = formSlice.actions;


export default formSlice.reducer





