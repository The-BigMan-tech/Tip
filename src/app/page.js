'use client'
import tw from 'tailwind-styled-components'
import LeftComponent from '@/components/left-comp'
import { space_mono } from './layout'


const TipCalculator = tw.div`
  flex bg-white w-[50rem] absolute top-14 text-black h-[30rem] border-2 border-transparent rounded-3xl shadow-2xl
`
export default function Main({}) {
  return (
    <div className={`${space_mono.className}`} >
    <TipCalculator>
        <LeftComponent/>
    </TipCalculator>
    </div >
  )
}