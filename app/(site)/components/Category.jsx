"use client"
import React from 'react'
import useUIState from '@/hook/useUIState'
import {homeCategoryList} from '@/lib/dummyData'
import { cn } from '@/lib/utils'


const Category = () => {
    const {homeCategory, setHomeCategory, setHeaderImageSrc} = useUIState();

    const onClickCatagory = (item) => {
        if (homeCategory === item) {
            setHomeCategory("");
            setHeaderImageSrc("");
        } else {
            setHomeCategory(item.label);
            setHeaderImageSrc(item.src);
        }
    }

  return (
    <ul className='max-w-full overflow-x-auto flex flex-row gap-4'>
        {homeCategoryList.map((item) => {
            return(
                <li onClick={() => onClickCatagory(item)} key={item.label} className={cn('h-[38px] min-w-fit px-3 flex justify-center items-center border border-transparent rounded-lg bg-[rgba(144,144,144,0.2)] hover:bg-[rgba(144,144,144,0.45)] cursor-pointer', item.label === homeCategory && 'bg-white text-black hover:bg-white')}>{item.label}</li>
            )
        })}
    </ul>
  )
}

export default Category