'use client'
import tw from 'tailwind-styled-components'
import LeftComponent from '@/components/left-comp'
import RightComponent from '@/components/right-comp'
import { space_mono } from './layout'

const Tipflex = tw.div`
  flex bg-white w-[50rem] absolute top-14 text-black h-[30rem] border-2 border-transparent rounded-3xl
`
export default function Main({}) {
  return (
    <div className={`${space_mono.className}`} >
    <Tipflex >
        <LeftComponent/>
        <RightComponent/>
    </Tipflex>
    </div >
  )
}