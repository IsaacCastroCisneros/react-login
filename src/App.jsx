import React ,{ useState,useContext, useEffect } from 'react'
import {Route,Routes} from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import ProductPage from './pages/ProductPage'
import UserHome from './pages/UserHome'
import Layout from './components/Layout'
import NotFound from './components/NotFound'

export const AppContext =React.createContext()

function App() 
{
  const[theme,setTheme]=useState(true);
  const[user, setUser]=useState(false)

  const contextValues=
  {
    setUser,
    user,
    theme:theme ? 'dark': 'ligth'
  }

  useEffect(()=>
  {
    const user = localStorage.getItem('user')
    if(user!==null)setUser(JSON.parse(user))
    return
  },[])

  useEffect(()=>
  {
    localStorage.setItem('user',JSON.stringify(user))
  },[user])

  useEffect(()=>
  {
     const body = document.querySelector('body');

     if(contextValues.theme==='dark')
     {
        body.classList.remove('ligth');
        body.classList.add('dark');
        
        return
     }

     body.classList.remove('dark');
     body.classList.add('ligth');
  })

  return (
    <AppContext.Provider value={contextValues}>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="user" element={<Layout setTheme={setTheme} themeColor={theme}/>} >
            <Route path=":id">
              <Route index element={user ? <UserHome />:<NotFound/>}/>
              <Route path=":id" element={user ? <ProductPage />:<NotFound/>} />
            </Route>
          </Route>
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
     </AppContext.Provider>
  );
}



export default App
