'use client'
import tw from 'tailwind-styled-components'
import { Totalbill } from './left-comp'
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
    let {bill_state,setBillstate,tip,setTip,persons,setPersons} = useContext(Totalbill)
    tip = tip * bill_state
    tip = Number(tip.toFixed(2))
    let total_tip = (persons != 0)?(tip * persons):tip.toFixed(1)
    let total_amount = Number(bill_state) + Number(total_tip)
    return (
        <>
        <Tipbox>
            <TiptextFlex>
                <Tiptext>
                    <h1>Bill</h1>
                    <Tipprice>${bill_state}</Tipprice>
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
            <Resetbutton>RESET</Resetbutton>
        </Tipbox>
        </>
    )
}