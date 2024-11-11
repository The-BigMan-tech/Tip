'use client'
import tw from 'tailwind-styled-components'

const Left = tw.div`
    flex flex-col absolute left-10 top-5 text-lg
`
const Styledinput = tw.input`
    bg-[#d9e5ec] mt-3 h-10 w-[21rem] text-end font-bold
`
const Styledtip = tw.div`
    flex flex-col relative top-9 text-lg mb-7
`
const Tips = tw.div`
    flex w-96 flex-wrap mt-4 gap-x-7 gap-y-4
`
const Tipbutton = tw.div`
    bg-[#00474b] text-white w-24 h-16 flex items-center justify-center border-2 border-transparent rounded-lg
`
const Custombutton = tw(Tipbutton)`
    bg-[#f0f7f9] text-[#697f7f]
`
export default function LeftComponent() {
    return(
        <>
            <Left>
                <h1>Bill</h1>
                <Styledinput type="text" />
                <Styledtip>
                    <h1>Select tip</h1>
                    <Tips>
                        <Tipbutton>5%</Tipbutton>
                        <Tipbutton>10%</Tipbutton>
                        <Tipbutton>15%</Tipbutton>
                        <Tipbutton>25%</Tipbutton>
                        <Tipbutton>30%</Tipbutton>
                        <Custombutton>Custom</Custombutton>
                    </Tips>
                </Styledtip>
                <Styledtip>
                    <h1>Number of people</h1>
                    <Styledinput type="text"/>
                </Styledtip>
            </Left>
        </>
    )
}