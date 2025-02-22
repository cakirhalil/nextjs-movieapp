// import React from 'react'

// const Page = async({searchParams}) => {

//   const res = await fetch(`https://api.themoviedb.org/3/${searchParams.genre ? "movie/" + searchParams.genre : "trending/all/day"}api_key=f70c05133604dbc07eaaa5cb4808edfd&language=en-US&page=1`,
//   { next: {revalidate: 10000}})

//   const data = await res.json();

//   console.log(data, "data")
//     // console.log(searchParams.genre, "searchParams")
//   return (
//     <div>
//       veri çekme
//     </div>
//   )
// }

// export default Page

import Movies from '@/components/Movies';
import React from 'react';

const Page = async ({ searchParams }) => {
  const genre = await searchParams.genre ? `movie/${searchParams.genre}` : "trending/all/day";
  
  const res = await fetch(
    `https://api.themoviedb.org/3/${genre}?api_key=f70c05133604dbc07eaaa5cb4808edfd&language=en-US&page=1`, 
    { next: { revalidate: 10000 } }
  );

  if (!res.ok) {
    throw new Error("Veri çekme başarısız!");
  }

  const data = await res.json();

  console.log(data, "data");

  return (
    <div className='flex items-center justify-center flex-wrap gap-3'>
      {
        data?.results?.map((dt,i) => (
          <Movies key={i} dt={dt}/>
        ))
      }
    </div>
  );
};

export default Page;
