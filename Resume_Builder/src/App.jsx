
import './App.css'
import ResumeForm from './Components/ResumeForm'

import Sidebar from './Components/sidebar'
import Template from './Components/Template'


function App() {
  

  return (
    <>
     <div className='flex'>
      <Sidebar/>
      <ResumeForm/>
      <Template/>
     
     </div>
        
    </>
  )
}

export default App
