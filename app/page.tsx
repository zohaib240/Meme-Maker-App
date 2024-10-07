import React from 'react'
import Image from 'next/image';
import Link from 'next/link';



const page = async () => {
 const memes = await fetch('https://api.imgflip.com/get_memes')
 const response = await memes.json()
 console.log (response.data.memes)

  return (
    <>
    <div className='flex justify-center gap-2 mt-4'>
      <div className='animate-bounce bg-white'>
      <Image className="object-contain bg-white" key={1} src={'http://w7.pngwing.com/pngs/761/310/png-transparent-internet-troll-internet-meme-trollface-laughing-face-meme-sticker-miscellaneous-face-food-thumbnail.png'} width={60} height={60}  alt='no-img'/>
     </div>
      <div>
        <h1 className='text-center mt-5 text-3xl font-bold '>Meme Generater App </h1> 
      </div>
      </div>
    <div className='bg-red-400 text-white align-center justify-center mt-3 flex animate-pulse'>
If you Want To Generate Memes !
      </div>
      <div className='flex flex-wrap justify-center mt-10 gap-3 m-3'>
        {response.data.memes.map((item: any) => (
          <div key={item.id} className='flex flex-col items-center border-2 border-black rounded-lg '>
            <Image src={item.url} width={200} height={200} alt='no-img' />
            <button className='bg-blue-500 text-white mt-3 text-sm px-4 py-2 rounded'>
  <Link
    href={{
      pathname: '/generate',
      query: { 
        url: item.url,
        id: item.id,
        box: item.box_count,
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