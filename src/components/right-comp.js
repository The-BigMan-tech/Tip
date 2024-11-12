'use client'
import tw from 'tailwind-styled-components'
import { Context } from './left-comp'
import {useContext} from 'react'

const Tipbox = tw.div`
    relative left-96 bottom-[25rem] bg-[#00474b] h-[26rem] text-white w-[22rem] border-2 border-transparent rounded-xl flex flex-col
`
const TiptextFlex = tw.div`
    flex flex-col absolute top-7 left-5 gap-y-10
`
const Tiptext = tw.div`
    flex items-center w-96
`
const Tipprice = tw.div`
    text-4xl font-bold text-[#35bfb0] absolute right-16
`
const Resetbutton = tw.button`
    bg-[#0d686d] flex items-center justify-center relative top-[22rem] h-12 w-80 left-4 border-2 border-transparent rounded-lg text-[#144f53] hover:bg-[#9fe8df] hover:text-[#004846]
`
const Fade = tw.div`
    text-[#669a9d] text-sm
`
export default function RightComponent() {
    let {bill,setBill,tip,setTip,people,setPeople} = useContext(Context)
    bill = Number(Number(bill).toFixed(2))
    tip = Number(((tip/100) * bill).toFixed(2))
    let total_tip = Number(((people != 0)?(tip * people):tip).toFixed(2))//The condition check is to ensure that the total tip doesnt display zero just because the number of people is zero
    let total_amount = Number((bill + total_tip).toFixed(2))

    function reset() {
        setBill(0)
        setTip(0)
    }
    return (
        <>
        <Tipbox>
            <TiptextFlex>
                <Tiptext>
                    <h1>Bill</h1>
                    <Tipprice>${bill}</Tipprice>
                </Tiptext>
                <Tiptext>
                    <div>
                        <h1>Tip Amount</h1>
                        <Fade>/person</Fade>
                    </div>
                    <Tipprice>${tip}</Tipprice>
                </Tiptext>
                <Tiptext>
                    <h1>Total Tip Amount</h1>
                    <Tipprice>${total_tip}</Tipprice>
                </Tiptext>
                <Tiptext>
                    <h1>Total</h1>
                    <Tipprice>${total_amount}</Tipprice>
                </Tiptext>
            </TiptextFlex>
            <Resetbutton onClick={reset}>RESET</Resetbutton>
        </Tipbox>
        </>
    )
}