import React from 'react'
import {GridLoader} from 'react-spinners'

const ErrorMessage = () => {
  return (
    <div className='my-20 flex flex-col items-center justify-center gap-4'>
        <GridLoader color="red"/>
        <div className='text-[50px]'>Opps!</div>
        <div>잠시 후에 확인해 주세요.</div>
    </div>
  )
}

export default ErrorMessage