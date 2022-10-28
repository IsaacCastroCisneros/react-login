import React ,{ useState,useContext, useEffect } from 'react'
import {Route,Routes} from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import ProductPage from './pages/ProductPage'
import UserHome from './pages/UserHome'

export const ThemeContext =React.createContext()

function App() 
{
  const[theme,setTheme]=useState(true);

  useEffect(()=>
  {
    localStorage.getItem('')
  },[])

  return (
   <>
    <button className='fixed text-[2rem] py-[.5rem] px-[1rem] right-[3rem] bottom-[3rem] bg-blue-600 rounded-[.5rem]'
     onClick={()=>setTheme(!theme)}
    >
       {
         theme ? 'ligth mode' : 'dark mode' 
       }
    </button>
    <ThemeContext.Provider value={theme ? 'dark': 'ligth mode'}>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="user">
            <Route path=":id">
              <Route index element={true ? <UserHome />:<h1>not found</h1>} />
              <Route path=":id" element={<ProductPage />} />
            </Route>
          </Route>
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
     </ThemeContext.Provider>
   </>
  );
}



export default App
