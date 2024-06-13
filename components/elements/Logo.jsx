"use client";

import React from 'react'
import Image from 'next/image'
import { RxHamburgerMenu } from "react-icons/rx";
import { useRouter } from 'next/navigation';
import IconButton from '@/components/elements/IconButton'

const Logo = () => {
    const {push} = useRouter();

    const onClickMenu = () => {
    };

    const onClickLogo = () => {
        //home으로 이동
        push("/");
    };

  return (
    <section className='flex items-center gap-3'>
        <IconButton onClickIcon={onClickMenu} icon={<RxHamburgerMenu size={24}/>}/>
        <div onClick={onClickLogo} className='cursor-pointer'>
           <Image width={100} height={30} src={"/main-logo.svg"}></Image>
        </div>
    </section>
  )
}

export default Logo