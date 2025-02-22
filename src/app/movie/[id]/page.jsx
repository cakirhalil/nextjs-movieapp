import React from 'react'
import Image from 'next/image'
import { FaStar } from "react-icons/fa";

const getMovie = async(id) => {
    const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=f70c05133604dbc07eaaa5cb4808edfd`)
    return await res.json();
}

const Page = async({params}) => {
    const id = params.id;
    const movieDetail = await getMovie(id)

    console.log(movieDetail, "movieDetail");
    
  return (
    <div className='relative p-7 min-h-screen'>
      <Image style={{objectFit:'cover'}} fill src={`https://image.tmdb.org/t/p/original/${movieDetail?.backdrop_path || movieDetail?.poster_path}`} alt="Movie Image"/>
        <div className='absolute'>
            <div className='text-4xl font-bold my-3'>{movieDetail?.title}</div>
            <div className='w-1/2'>{movieDetail?.overview}</div>
            <div className="flex items-center space-x-1 my-3"><FaStar />
                <span>{movieDetail?.vote_average}</span>
            </div>
            <div className='my-2 border w-32 hover:bg-white hover:text-black p-2 rounded-md text-center text-lg cursor-pointer'>Trail</div>
        </div>
    </div>
  )
}

export default Page
