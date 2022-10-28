import React,{useEffect,useContext} from 'react'
import { Outlet } from 'react-router-dom';
import { AppContext } from '../App';
import { useNavigate } from 'react-router-dom';

export default function Layout({setTheme,themeColor}) 
{
  const navigate = useNavigate();
  const{user,theme,setUser}=useContext(AppContext)

  function logout()
  {
    setUser(false)
    navigate('/login');
  }

  return (
    <header className={`${theme}`}>
      <nav
        className={`flex justify-between pt-[1rem] px-[5rem] w-[95rem] max-w-[100%] my-0 mx-auto`}
      >
        <h1 className="text-[3rem]">Welcome '{user}'</h1>
        <div className='flex gap-[2rem] items-center'>
        <button
          className="button py-[.5rem] px-[.8rem]"
          onClick={() => setTheme(!themeColor)}
        >
          {themeColor ? "ligth mode" : "dark mode"}
        </button>
        <button className=' hover:underline hover:text-[#ea377a]'
         onClick={logout}
        >
             Logout
        </button>
        </div>
      </nav>
      <Outlet />
    </header>
  );
}
