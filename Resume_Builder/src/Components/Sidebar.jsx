import React from 'react'
import { useNavigate } from 'react-router-dom'

const Sidebar = () => {
    let details = [ { num: 1, text: 'Personal Details', path: '/personal' },
  { num: 2, text: 'Address', path: '/address' },
  { num: 3, text: 'Education', path: '/education' },
  { num: 4, text: 'Work History', path: '/work' },
  { num: 5, text: 'Projects', path: '/projects' },
  { num: 6, text: 'Skills', path: '/skills' },
  { num: 7, text: 'Profile Photo', path: '/photo' },
  
  { num: 8, text: 'Certifications', path: '/certifications' }
]

    const navigate=useNavigate()
    return (
        <>
            <div className='h-screen w-50 p-2 bg-blue-900 flex flex-col gap-4 fixed top-0 left-0'>
                {details.map((detail, index) => {
                    return (
                        <div className='flex mt-4 hover:cursor-pointer ' onClick={() => navigate(detail.path)} key={index} >
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