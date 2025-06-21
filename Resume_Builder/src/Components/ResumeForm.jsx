import Address from "./Address"
import PersonalDetails from "./PersonalDetails"


const ResumeForm = () => {
    
    return (
        <div className="p-10 bg-gray-200 w-[50%]">
            <PersonalDetails/>
            <Address/>
        </div>

    )
}

export default ResumeForm