import React,{useContext} from 'react';
import {useQuery} from 'react-query' ;
import { useParams } from 'react-router-dom';
import axios from 'axios';

import { AppContext } from '../App'

export default function ProductPage() 
{
    const {theme} =useContext(AppContext);

    const {id}=useParams();
    const url = "https://api.escuelajs.co/api/v1/products/"+id;
    const{data:product} = useQuery(['product',url],getProducts)
    
    async function getProducts({queryKey})
    {
        const res = await axios.get(queryKey[1])
        return res.data
    }
  
    return (
        <main
          className={`${theme} flex justify-center items-center pt-[2rem] px-[5rem]`}
        >
          <div className="flex w-[95rem] max-w-[100%] my-0 mx-auto">
            <img className="flex-[.8]" src={product?.category?.image} alt="" />
            <section className="flex-1 pl-[2rem] flex-wrap">
              <h1 className="font-bold text-[1.5rem] mb-[2rem]">
                {product?.title}
              </h1>
              <p className="block mb-[2rem]">{product?.description}</p>
              <strong className="block text-[2rem] mb-[2rem]">
                {product?.price}$
              </strong>
              <button className="button py-[.5rem] px-[.9rem] text-[1.5rem]">Comprar</button>
            </section>
          </div>
        </main>
    );
}
