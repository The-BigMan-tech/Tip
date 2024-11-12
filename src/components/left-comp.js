'use client'
import tw from 'tailwind-styled-components'
import {useState,createContext} from 'react'
import RightComponent from './right-comp'

//Dont forget about component did mount 
const LeftContainer = tw.div`
    flex flex-col absolute left-10 top-5 text-lg
`
const StyledInput = tw.input`
    bg-[#d9e5ec] mt-3 h-10 w-[21rem] text-end font-bold text-[#2f676b] text-2xl focus:bg-white focus:outline focus:outline-2 focus:outline-[#befff8]
`
const TipFlex = tw.div`
    flex flex-col relative top-9 text-lg mb-7 focus:border-green-200
`
const Tips = tw.div`
    flex w-96 flex-wrap mt-4 gap-x-7 gap-y-4
`
const Tipbutton = tw.button`
    bg-[#00474b] text-white w-24 h-16 flex items-center justify-center border-2 border-transparent rounded-lg hover:bg-[#a1e7df] hover:text-[#09524f] ${(props)=>(props.$isSelected == true)?'text-[#09524f] bg-[#a1e7df]':'text-white bg-[#00474b]'}
`
const CustomTip = tw(StyledInput)`
    bg-[#f0f7f9] text-[#697f7f] hover:border-2 hover:border-[#5aa79d] hover:bg-white w-24 h-16 border-2 border-transparent rounded-lg relative bottom-3 text-lg text-center
`


export const Totalbill = createContext('')
export default function LeftComponent() {
    let [bill,setBill] = useState('')
    let [tip,setTip] = useState('')
    let [custom_tip,setCustomtip] = useState('')
    let [persons,setPersons] = useState('')
    let [percents,setPercents] = useState({5:false,10:false,15:false,25:false,30:false})

    function watchbill(event) {
        setBill(Number(event.target.value))
        console.log("PER:",percents)
    }
    function submitTip(event) {
        let num = event.target.textContent.slice(0,-1)
        setTip((num/100))
        for (let i in percents){
            percents[i] = false
        }
        percents[num] = true
        console.log("PER:",percents)
        setPercents(percents)
    }
    function customTip(event) {
        setCustomtip(event.target.value);
    }
    function submitCustomtip(event){
        ((event.key == 'Enter') && (bill>0))?setTip((custom_tip/100)):null
    }
    function watchpersons(event) {
        setPersons(event.target.value)
    }
    function deselect() {
        setPercents({})
    }
    return(
        <>
            <LeftContainer>
                <h1>Bill</h1>
                <StyledInput onChange={watchbill} type="text" value={bill}/>
                <TipFlex>
                    <h1>Select tip</h1>
                    <Tips>
                        <Tipbutton $isSelected={percents[5]} onClick={submitTip}>5%</Tipbutton>
                        <Tipbutton $isSelected={percents[10]} onClick={submitTip}>10%</Tipbutton>
                        <Tipbutton $isSelected={percents[15]} onClick={submitTip}>15%</Tipbutton>
                        <Tipbutton $isSelected={percents[25]} onClick={submitTip}>25%</Tipbutton>
                        <Tipbutton $isSelected={percents[30]} onClick={submitTip}>30%</Tipbutton>
                        <CustomTip onFocus={deselect} onChange={customTip} onKeyDown={submitCustomtip} placeholder='Custom' type="text" value={custom_tip}/>
                    </Tips>
                </TipFlex>
                <TipFlex>
                    <h1>Number of people</h1>
                    <StyledInput onChange={watchpersons} type="text" value={persons}/>
                </TipFlex>
                <Totalbill.Provider value={{bill,setBill,tip,setTip,persons,setPersons}}>
                    <RightComponent/>
                </Totalbill.Provider>
            </LeftContainer>
        </>
    )
}