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
            stream: "B.tech in computer scienece engineering"
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
            title: "TODO app",
            description: "create to do app",
            techStack: 'html css javascript '
        }

    ],
    skills: ["react.js"],
    certifications: [{
        title: "react.js Course",
        link: "https//localhostAJjiasf"
    }],
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
        setProjectTitle: (state, action) => {
            const { index, value } = action.payload
            state.projects[index].title = value
        },
        setProjectDescription: (state, action) => {
            const { index, value } = action.payload
            state.projects[index].description = value
        },
        setProjectTechStack: (state, action) => {
            const { index, value } = action.payload
            state.projects[index].techStack = value
        },
        addProject: (state) => {
            state.projects.push({
                title: "",
                description: "",
                techStack: ''

            })
        },
        addSkill: (state, action) => {
            state.skills.push(action.payload)
        },
        setSkill: (state, action) => {
            const { index, value } = action.payload
            state.skills[index] = value
        },
        addCertification: (state) => {
            state.certifications.push({
                title: "react.js Course",
                link: "https//localhostAJjiasf"
            });
        },
        setCertificationTitle: (state, action) => {
            const { index, value } = action.payload;
            state.certifications[index].title = value;
        },
        setCertificationLink: (state, action) => {
            const { index, value } = action.payload;
            state.certifications[index].link = value;
        }

    }

})

export const { setAddress, setFirstName, setLastName, setEmail,
    setStream, setNumber,
    setCollege, setFromDate, setToDate, setEducation,
    setCompanyName, setExperience, setFromCompany, setToCompany, setdescriptionCompany,
    setProjectTitle, setProjectDescription, setProjectTechStack,
    addProject, addSkill, setSkill,
    setCertificationLink, setCertificationTitle ,
    addCertification } = formSlice.actions;


export default formSlice.reducer





