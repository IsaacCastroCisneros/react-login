import React ,{ useState,useContext, useEffect } from 'react'
import {Route,Routes} from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import ProductPage from './pages/ProductPage'
import UserHome from './pages/UserHome'
import Layout from './components/Layout'

export const AppContext =React.createContext()

function App() 
{
  const[theme,setTheme]=useState(true);
  const[user, setUser]=useState(false)

  const contextValues=
  {
    theme:theme ? 'dark': 'ligth mode',
    setUser,
    contextUser:user
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

  return (
   <>
    <AppContext.Provider value={contextValues}>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="user" element={<Layout setTheme={setTheme} themeColor={theme}/>} >
            <Route path=":id">
              <Route index element={user ? <UserHome />:<h1>not found</h1>}/>
              <Route path=":id" element={user ? <ProductPage />:<h1>not found</h1>} />
            </Route>
          </Route>
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
     </AppContext.Provider>
   </>
  );
}



export default App
