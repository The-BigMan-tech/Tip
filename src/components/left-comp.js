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
//This one in particular has a styled prop to style it based on whether it is selected
const TipButton = tw.button`
    bg-[#00474b] text-white w-24 h-16 flex items-center justify-center border-2 border-transparent rounded-lg hover:bg-[#a1e7df] hover:text-[#09524f] ${(props)=>(props.$isSelected == true)?'text-[#09524f] bg-[#a1e7df]':'text-white bg-[#00474b]'}
`
const CustomTip = tw(StyledInput)`
    bg-[#f0f7f9] text-[#697f7f] hover:border-2 hover:border-[#5aa79d] hover:bg-white w-24 h-16 border-2 border-transparent rounded-lg relative bottom-3 text-lg text-center
`


export const Context = createContext('')
export default function LeftComponent() {
    let [bill,setBill] = useState('')
    let [tip,setTip] = useState('')
    let [custom_tip,setCustomtip] = useState('')
    let [selected_tips,setSelectedtips] = useState({5:false,10:false,15:false,25:false,30:false})
    let [people,setPeople] = useState('')

    function typeBill(event) {
        setBill(event.target.value)
    }
    function submitTip(event) {
        let num = event.target.textContent.slice(0,-1)//To only get the tip number and not with the % sign
        for (let i in selected_tips){
            selected_tips[i] = false
        }
        selected_tips[num] = true
        setTip(num),setSelectedtips(selected_tips)
    }
    function typeCustomtip(event) {
        setCustomtip(event.target.value);
    }
    function submitCustomtip(event){
        ((event.key == 'Enter') && (bill>0))?setTip((custom_tip)):null
    }
    function typePeople(event) {
        setPeople(event.target.value)
    }
    function deselect() {
        setSelectedtips({})
    }
    return(
        <>
            <LeftContainer>
                <h1>Bill</h1>
                <StyledInput onChange={typeBill} type="text" value={bill}/>
                <TipFlex>
                    <h1>Select tip</h1>
                    <Tips>
                        <TipButton $isSelected={selected_tips[5]} onClick={submitTip}>5%</TipButton>
                        <TipButton $isSelected={selected_tips[10]} onClick={submitTip}>10%</TipButton>
                        <TipButton $isSelected={selected_tips[15]} onClick={submitTip}>15%</TipButton>
                        <TipButton $isSelected={selected_tips[25]} onClick={submitTip}>25%</TipButton>
                        <TipButton $isSelected={selected_tips[30]} onClick={submitTip}>30%</TipButton>
                        <CustomTip onFocus={deselect} onChange={typeCustomtip} onKeyDown={submitCustomtip} placeholder='Custom' type="text" value={custom_tip}/>
                    </Tips>
                </TipFlex>
                <TipFlex>
                    <h1>Number of people</h1>
                    <StyledInput onChange={typePeople} type="text" value={people}/>
                </TipFlex>
                <Context.Provider value={{bill,setBill,tip,setTip,people,setPeople}}>
                    <RightComponent/>
                </Context.Provider>
            </LeftContainer>
        </>
    )
}