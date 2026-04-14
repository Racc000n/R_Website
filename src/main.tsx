import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import ArtPage from './ArtPage/ArtPage'
import ArtInfo from './ArtPage/ArtInfo.tsx'
import NotFound from './NotFoundPage.tsx'

import { createBrowserRouter, RouterProvider} from 'react-router-dom'; 

const router = createBrowserRouter([
  {path: "/", element: <App/>,}, 
  {path: "/artpage", element: <ArtPage/>},
  {path: "/artpage/:artId", element: <ArtInfo/>}, 
  {path: "*", element: <NotFound/>}
    
]); 

createRoot(document.getElementById('root')!).render(
  <StrictMode>

    <RouterProvider router={router}/>
    {/*}<App /> {*/}
    
  </StrictMode>,
)
