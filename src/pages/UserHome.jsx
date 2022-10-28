import React,{useState,useEffect,useContext} from 'react'
import { Link, useParams } from 'react-router-dom'
import {useQuery} from 'react-query' 
import axios from 'axios'
import {useInView} from 'react-intersection-observer'

import { AppContext } from '../App'

export default function UserHome() 
{
  const {theme,contextUser:user}  =useContext(AppContext);

  const url = "https://api.escuelajs.co/api/v1/products";
  const{data:products} = useQuery(['products',url],getProducts)

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
    <main className={`${theme} pt-[2rem] px-[5rem] w-[95rem] max-w-[100%] my-0 mx-auto`}>
      <ProductsList products={products} userName={user} />
    </main>
  );
}

function ProductsList({products,userName})
{
   return(
    <div className='grid grid-cols-[repeat(auto-fill,minmax(15rem,1fr))] gap-[1rem]'>
        {
            products?.map((product,pos)=>
                {
                  return <Product key={pos} {...product} userName={userName} />
                })
        }
    </div>
   )
} 

function Product(props)
{
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
      <div className='flex flex-col'>
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
