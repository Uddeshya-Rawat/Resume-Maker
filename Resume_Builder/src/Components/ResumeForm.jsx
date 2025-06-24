import Address from "./FormComponents/Address"
import Education from "./FormComponents/Education"
import Experience from "./FormComponents/Experience"
import PersonalDetails from "./FormComponents/PersonalDetails"


const ResumeForm = () => {
    
    return (
        <div className="p-5 bg-gray-200 w-full ml-50">
            <PersonalDetails/>
            <Address/>
            <Education/>
            <Experience/>
        </div>

    )
}

export default ResumeForm