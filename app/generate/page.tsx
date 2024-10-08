"use client"
import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image';


const Generate = ({ searchParams }: { searchParams: { id: string, url: string, box: number } }) => {
  console.log(searchParams);

  const [hello, setHello] = useState(searchParams.box)
  const [meme,setImage] = useState<string | null>(null)
 
  const input2 = useRef<HTMLInputElement| null>(null);
  const input1 = useRef<HTMLInputElement| null>(null);

  const postMeme = async (event: any ) =>{
   event.preventDefault();
   const data = await fetch(`https://api.imgflip.com/caption_image?template_id=${searchParams.id}&username=zohaibjs123&password=123456Aa@&text0=${input1.current?.value}&text1=${input2.current?.value}`); 
  const respone = await data.json()
   console.log(respone);
   setImage(respone.data.url)
   input1.current.value=''
   input2.current.value=''
 }

  useEffect(() => {
    setHello(searchParams.box);
  }, []);

  return (
    <>
      <div className='flex justify-center '>
        <Image src={searchParams.url} width={300} height={300} alt='no-image ' className='border border-black rounded' />
      </div>
      {
        hello ==2 ? (
          <div className='flex justify-center gap-5 mt-5 flex-wrap '>
       <form onSubmit={postMeme} >
       <input
              type="text"
              placeholder="Type here"
              className="input input-bordered bg-blue-100 text-black w-full max-w-xs rounded-md p-2 border-2 border-black"ref={input1} /> <br /> <br />
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered bg-blue-100 text-black w-full max-w-xs rounded-md p-2 border-2 border-black"ref={input2}  /> <br /> <br />
            <div className= ' flex justify-center'><button className= '  bg-blue-500 text-white mt-3 text-sm px-4 py-2 rounded' type='submit'>Generate Meme</button></div>
       </form>
          </div>
        ) : (
          <div>Loading...</div>
        )
      }
      <div className='flex justify-center mt-3 '>
{meme ? <Image src={meme} width={300} height={300} alt="loading" className='border rounded border-black' /> :null}
      </div>
    </>
  )
} 

export default Generate