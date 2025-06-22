import Address from "./Address"
import Education from "./Education"
import PersonalDetails from "./PersonalDetails"


const ResumeForm = () => {
    
    return (
        <div className="p-10 bg-gray-200 w-[45%] overflow-auto ml-50">
            <PersonalDetails/>
            <Address/>
            <Education/>
        </div>

    )
}

export default ResumeForm