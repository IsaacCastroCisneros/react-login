import React,{useState,useEffect,useContext} from 'react'
import { Link, useParams } from 'react-router-dom'
import {useQuery} from 'react-query' 
import axios from 'axios'
import {useInView} from 'react-intersection-observer'
import {ScaleLoader} from 'react-spinners'

import { AppContext } from '../App'

export default function UserHome() 
{
  const {theme,user}  =useContext(AppContext);

  const url = "https://api.escuelajs.co/api/v1/products";
  const{data:products,isFetching} = useQuery(['products',url],getProducts)

  const{ref,inView}= useInView();

  useEffect(()=>
  {
    /* const body = document.querySelector('body');
    body.classList.remove(`${theme}`)
    body.classList.add(`${theme}`) */
  },[])

  useEffect(()=>
  {
    
  },[inView])

  async function getProducts({queryKey})
  {
     const res = await axios.get(queryKey[1])
     return res.data
  }

  return (
    <main className={`pt-[2rem] px-[5rem] w-[95rem] max-w-[100%] my-0 mx-auto`}>
      <ProductsList products={products} 
                    userName={user} 
                    isFetching={isFetching} 
                    Spinner={<ScaleLoader color="#ea377a" height={80} width={10} />}
      />
    </main>
  );
}

function ProductsList(props)
{
  const
  {
    products,
    userName,
    isFetching,
    Spinner
  }=props

   return (
     <>
       {isFetching && (
         <div className="text-center mt-[3rem]">
           {Spinner}
         </div>
       )}
       <div className="grid grid-cols-[repeat(auto-fill,minmax(15rem,1fr))] gap-[1rem]">
         {products?.map((product, pos) => {
           return <Product key={pos} {...product} userName={userName} />;
         })}
       </div>
     </>
   );
} 

function Product(props)
{
  const {theme}=useContext(AppContext);
  
   const
   {
     category,
     id,
     title,
     price,
     userName
   }=props

   return(
    <>
      <div className='flex flex-col gap-[.8rem] p-[1rem] bg-slate-700 rounded-[.5rem]'
       style={theme==='ligth'?{backgroundColor:'rgb(158, 158, 250)'}:{}}
       >
          <img src={category.image} alt="" />
          <strong>
            {title}
          </strong>
          <span>
             {price}$
          </span>
          <Link to={`/user/${userName}/${id}`} className='button'>
             ver
          </Link>
      </div>
    </>
   )
}
