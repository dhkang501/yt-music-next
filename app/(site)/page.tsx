import { sleep } from '@/lib/utils'
import { error } from 'console'
import React from 'react'
import Category from '@/app/(site)/components/Category'

const home = async () => {
  // await sleep(2000);
  // throw new Error("my error");
  return (
    <div className='min-h-[600px]'>
      <div>
        <Category/>
      </div>
    </div>
  )
}

export default home