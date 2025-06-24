
import { Outlet } from 'react-router-dom'

import Sidebar from './Components/sidebar'
import Template from './Components/Template'


function App() {
  
  

  return (
    <>
     <div className='flex h-full overflow-y-auto'>
      <Sidebar/>
      <Outlet/>
      <Template/>
     
  
      
   
   
      
     
     </div>
        
    </>
  )
}

export default App
