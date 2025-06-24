import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { Provider } from 'react-redux';
import { store } from './Redux/store.js'
import PersonalDetails from './Components/FormComponents/PersonalDetails.jsx'
import Address from './Components/FormComponents/Address.jsx'
import Education from './Components/FormComponents/Education.jsx'
import Experience from './Components/FormComponents/Experience.jsx'
import Projects from './Components/FormComponents/Projects.jsx'
import Skills from './Components/FormComponents/Skills.jsx'
import Profilephoto from './Components/FormComponents/Profilephoto.jsx'
import { Certifications } from './Components/FormComponents/Certifications.jsx'

const router = createBrowserRouter([
  {
    path: '',
    element: <App />,
    children: [
      {
        path: '/personal',
        element: <PersonalDetails />
      },
      { path:'/address',
        element:<Address/>

      },
      {
        path:"/education",
        element:<Education/>
      },
      {
        path:"/work",
        element:<Experience/>
      },
      {
        path:"/projects",
        element:<Projects/>
      },
      {
        path:"/skills",
        element:<Skills/>
      },
      {
        path:"/photo",
        element:<Profilephoto/>
      },
      {
        path:"/certifications",
        element:<Certifications/>
      }
    ]
  }
])



createRoot(document.getElementById('root')).render(
  <StrictMode>


    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>


  </StrictMode>,
)
