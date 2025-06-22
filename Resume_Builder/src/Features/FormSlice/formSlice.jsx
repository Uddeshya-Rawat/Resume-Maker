// create slice for form 
import { createSlice } from "@reduxjs/toolkit";


// create intial state
const initialState = {
    firstName: 'John',
    lastName: 'Doe',
    email: "JohnDoe@gmail.com",
    contactNumber: 999999999,
    address: 'xyz street, California , USA',
    education:[
        {
        college:"xyz college",
        collegeAddress:"xyc",
        from: "0000000",
        to:"000000"
       }
    ]

}


// export slice 
export const formSlice = createSlice({
    name: 'form',  // slice name 
    initialState,  // intial state
    reducers: {   // reducers function to change the state
        setFirstName: (state, action) => {  // state is the previous state and action.payload has current value
            state.firstName = action.payload
        },
        setLastName: (state, action) => {
            state.lastName = action.payload
        },
        setEmail: (state, action) => {
            state.email = action.payload
        },
        setAddress: (state, action) => {
             state.address=action.payload
        },
        setNumber:(state,action)=>{
            state.contactNumber=action.payload
        },
        setEducation:(state)=>{
             state.education.push({
                college:"",
                collegeAddress:"",
                from:"",
                to:""

             })
        },
        setCollege:(state,action)=>{
             const { index, value } = action.payload;
             state.education[index].college=value
        },
        setCollegeAddress:(state,action)=>{
            const { index,value } = action.payload;
             state.education[index].collegeAddress=value
        },
        setFromDate:(state,action)=>{
            const { index, value } = action.payload;
             state.education[index].from=value
        },
        setToDate:(state,action)=>{
            const { index, value } = action.payload;
             state.education[index].to=value
        }
        
    }

})

export const { setAddress,setFirstName,setLastName,setEmail,setNumber,setCollege,setCollegeAddress,setFromDate,setToDate,setEducation } = formSlice.actions;


export default formSlice.reducer





