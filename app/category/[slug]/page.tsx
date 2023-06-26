import React from 'react'
import { NewsArticle } from '@/types/NewsArticle';
import NewsGrid from '@/components/common/NewsGrid';


export default async function Page({params}:any) {
    const {slug} = params;
    const api = process.env.Api_key

    const url =`https://newsapi.org/v2/top-headlines?country=us&category=${slug}&apiKey=${api}`;

    const response: NewsArticle[] =await fetch(url).then(res => res.json()).then(res => res.articles);
    console.log(response)
  return (
    <div> 
        <h2 className='text-center text-red-600 font-bold text-xl pb-5 mt-20'>{slug}</h2>
        <NewsGrid articles={response}/>
    </div>
  )
}
