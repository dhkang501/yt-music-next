import { sleep } from '@/lib/utils'
import { error } from 'console'
import React from 'react'

const home = async () => {
  // await sleep(2000);
  // throw new Error("my error");
  return (
    <div className='min-h-[600px]'>
      <div className='bg-gray-500 w-full h-[500px]'>HomePage</div>
      <div className='bg-gray-500 w-full h-[500px]'>HomePage</div>
      <div className='bg-gray-500 w-full h-[500px]'>HomePage</div>
      <div className='bg-gray-500 w-full h-[500px]'>HomePage</div>

    </div>
  )
}

export default home