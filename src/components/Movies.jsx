"use client"
import React from 'react'
import Image from 'next/image'
import { FaStar } from "react-icons/fa";
import { useRouter } from 'next/navigation';

const Movies = ({dt}) => {

    const router = useRouter();
    console.log(dt, "dt");
    
  return (
    <div onClick={() => router.push(`/movie/${dt?.id}`)} className='min-w-[470px] relative imgContainer cursor-pointer'>
      <Image style={{objectFit:'cover'}} width={470} height={300} src={`https://image.tmdb.org/t/p/original/${dt?.backdrop_path || dt?.poster_path}`} alt="Movie Image"/>
      <div className='absolute bottom-0 p-3 w-full h-full flex flex-col justify-end opacity-0 hover:opacity-100 transition-opacity'>
        <div className='text-2xl font-bold'>{dt?.title}</div>
        <div className="flex items-center space-x-1">
        <FaStar />
        <span>{dt?.vote_average}</span>
        </div>
      </div>
    </div>
  )
}

export default Movies
