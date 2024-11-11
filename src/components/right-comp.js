'use client'
import tw from 'tailwind-styled-components'

const Tipbox = tw.div`
    absolute right-6 top-5 bg-[#00474b] h-[26rem] text-white w-[22rem] border-2 border-transparent rounded-xl flex flex-col
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
const Resetbutton = tw.div`
    bg-[#0d686d] flex items-center justify-center relative top-[22rem] h-12 w-80 left-4 border-2 border-transparent rounded-lg text-[#144f53]
`
export default function RightComponent() {
    return (
        <>
        <Tipbox>
            <TiptextFlex>
                <Tiptext>
                    <h1>Tip Amount</h1>
                    <Tipprice>$0.00</Tipprice>
                </Tiptext>
                <Tiptext>
                    <h1>Total</h1>
                    <Tipprice>$0.00</Tipprice>
                </Tiptext>
            </TiptextFlex>
            <Resetbutton>RESET</Resetbutton>
        </Tipbox>
        </>
    )
}