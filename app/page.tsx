import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

const page = async () => {
 const memes = await fetch('https://api.imgflip.com/get_memes')
 const response = await memes.json()
 console.log (response.data.memes)

  return (
    <>
    <div className='flex justify-center  gap-2 mt-4'>
     <h1 className='text-center mt-5 text-3xl font-bold animate-bounce '>  <span className="text-3xl">😀</span> Meme Generator App </h1> 
      </div>
    <div className='bg-red-400 text-white align-center justify-center mt-3 flex animate-pulse'>
If you Want To Generate Memes !
      </div>
      <div className='flex flex-wrap justify-center mt-10 gap-5 m-3'>
        {response.data.memes.filter((item : any ) => item.box_count === 2).map((item: any) => (
          <div key={item.id} className='flex flex-col items-centertilt-in-top-1 hover:relative hover:bottom-2 hover:shadow-lg hover:border hover: transition-colors: 150ms border border-black rounded-lg p-3 '>
            <div style={{
              borderTopLeftRadius: '18px',
              borderTopRightRadius: '18px'
            }} className='flex justify-center bg-[#e9e9e9] items-center'>
              <Image className='h-[200px]' src={item.url} width={200} height={200} alt='item.name' /> </div>
            <button className='bg-blue-500 text-white mt-3 text-sm px-4 py-2 rounded '>
  <Link
    href={{
      pathname: '/generate',
      query: { 
        url: item.url,
        id: item.id,
        box: item.box_count,
        name: item.name,

      },
    }}
  >Generate Meme
  </Link>
</button>
 </div>
        ))}
      </div>
       
    </>
  
  )
}

export default page