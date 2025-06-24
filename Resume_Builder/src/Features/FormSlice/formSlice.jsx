// create slice for form 
import { createSlice } from "@reduxjs/toolkit";
import Experience from "../../Components/FormComponents/Experience";


// create intial state
const initialState = {
    firstName: 'John',
    lastName: 'Doe',
    email: "JohnDoe@gmail.com",
    contactNumber: 999999999,
    address: 'xyz street, California , USA',
    education: [
        {
            college: "xyz college",
           
            from: "0000",
            to: "0000",
            stream:"B.tech in computer scienece engineering"
        }
    ],
    experience: [
        {
            companyName: "xyz",
            from: "0000",
            to: '0000',
            workDescription: "Developed responsive and dynamic web applications using React.js and Tailwind CSS. Focused on building reusable components, implementing REST APIs, and ensuring cross-browser compatibility. Collaborated with teams to translate UI/UX designs into clean, performant code with a focus on user experience."
        }
    ],
    projects: [

        {
            title: "",
            description: "",
            techStack: ""
        }

    ],
    skills: [],
    certifications: [],
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
            state.address = action.payload
        },
        setNumber: (state, action) => {
            state.contactNumber = action.payload
        },
        setEducation: (state) => {
            state.education.push({
                college: "",
                collegeAddress: "",
                from: "",
                to: ""

            })
        },
        setCollege: (state, action) => {
            const { index, value } = action.payload;
            state.education[index].college = value
        },
        
        setFromDate: (state, action) => {
            const { index, value } = action.payload;
            state.education[index].from = value
        },
        setToDate: (state, action) => {
            const { index, value } = action.payload;
            state.education[index].to = value
        },
        setStream: (state, action) => {
            const { index, value } = action.payload;
            state.education[index].stream = value
        },


        setExperience: (state) => {
            state.experience.push({
                companyName: "",
                from: "",
                to: '',
                workDescription: ""
            })
        },
        setCompanyName: (state, action) => {
            const { index, value } = action.payload
            state.experience[index].companyName = value
        },
        setFromCompany: (state, action) => {
            const { index, value } = action.payload
            state.experience[index].from = value
        },
        setToCompany: (state, action) => {
            const { index, value } = action.payload
            state.experience[index].to = value
        },
        setdescriptionCompany: (state, action) => {
            const { index, value } = action.payload
            state.experience[index].workDescription = value
        },


    }

})

export const { setAddress, setFirstName, setLastName, setEmail, setStream, setNumber, setCollege, setFromDate, setToDate, setEducation, setCompanyName, setExperience, setFromCompany, setToCompany, setdescriptionCompany } = formSlice.actions;


export default formSlice.reducer





