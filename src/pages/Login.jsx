import React,{useState,useContext,useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../App'

export default function Login() {
    return(
        <Form/>
     )
}

function Form()
{
    const {theme,setUser}  =useContext(AppContext);
    const navigate = useNavigate()

    const[userParams,setUserParams]=useState({
        userName:undefined,
        password:undefined,
    })
    
    useEffect(()=>
    {
       
    },[userParams])

    function loginUser(e)
    {
       e.preventDefault();
       setUser(userParams.userName)
       navigate(`/user/${userParams.userName}`)
    }

  return(
    <main className={`${theme} flex w-[100%] justify-center`}  onSubmit={loginUser} >
      <form method='POST' className="flex flex-col w-[473px] max-w-[100%] gap-[1rem]" >
        <h1 className='title-form'>
           Login
        </h1>
        <Input 
          name={'user-name'}
          max={16}
          min={5}
          type={'text'}
          placeholder={'Username'}
          underText={'Maximum of 16 characters'}
          func={(e)=>setUserParams(prev=>{return {...prev,userName:e.target.value}})}
         />
         <Input 
          name={'password'}
          type={'password'}
          placeholder={'Password'}
          min={6}
          max={50}
          underText={'Minimum of 6 characters'}
          func={(e)=>setUserParams(prev=>{return {...prev,password:e.target.value}})}
         />
          <button className='button py-[.3rem]' type='submit'
           style={{}}
          >register</button>
      </form>
    </main>
  )
}

function Input(props)
{
  const{
    name,
    max=null,
    min=null,
    func,
    type,
    placeholder,
    className='',
    underText='',
    errorMsg
  }=props
  
  return (
    <div className='block'>
      <input
        className={`bg-secondary border-[1px] border-secondary text-white focus:border-[1px] focus:inset-0 outline-none focus:border-focus transition-all duration-[220] px-[.4rem] py-[.2rem] rounded-[.3rem] w-[100%] ${className}`}
        type={type}
        name={name}
        placeholder={placeholder}
        min={min}
        maxLength={max}
        onChange={func}
        required
      />
      {
        !errorMsg&&
        <label htmlFor="" className='text-[#8f9ca7] text-[.8rem]'>
          {underText}
        </label>
      }
      {
        errorMsg&&
        <label htmlFor="" className='p-[.2rem] block rounded-[.3rem] mt-[.5rem] text-[.9rem] text-white bg-red-500'>
          {errorMsg}
        </label>
      }
    </div>
  );
}

