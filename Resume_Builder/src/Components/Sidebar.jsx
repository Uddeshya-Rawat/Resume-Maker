import React from 'react'

const Sidebar = () => {
    let details = [{
        num: 1,
        text: 'Personal Details'
    },
    {
        num: 2,
        text: "Address"
    },
    {
        num: 3,
        text: "Education"
    },
    {
        num: 4,
        text: "Work History"
    },
    {
        num: 5,
        text: "Projects"
    },
    {
        num: 6,
        text: "Skills"
    },
    {
        num: 7,
        text: "Profile Photo"
    },
    {
        num: 8,
        text: "Languages"
    },
    {
        num: 9,
        text: 'Certifications'

    }
    ]
    return (
        <>
            <div className='h-screen w-[12%] p-2 bg-blue-900 flex flex-col gap-4 '>
                {details.map((detail, index) => {
                    return (
                        <div className='flex mt-4 '  key={index} >
                            <div className='rounded-full bg-black text-white w-6 h-6 text-center p-2 text-sm flex justify-center items-center '>{detail.num}</div>
                            <p className='text-white ml-3' >{detail.text}</p>
                        </div>
                    )
                })}
            </div>





        </>
    )
}

export default Sidebar