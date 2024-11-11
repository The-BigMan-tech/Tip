'use client'
import tw from 'tailwind-styled-components'
import styled from 'styled-components'
import {useState,useEffect,createContext} from 'react'
import RightComponent from './right-comp'

//Dont forget about component did mount 
const Left = tw.div`
    flex flex-col absolute left-10 top-5 text-lg
`
const Styledinput = tw.input`
    bg-[#d9e5ec] mt-3 h-10 w-[21rem] text-end font-bold text-[#2f676b] text-2xl focus:bg-white focus:outline focus:outline-2 focus:outline-[#befff8]
`
const Styledtip = tw.div`
    flex flex-col relative top-9 text-lg mb-7 focus:border-green-200
`
const Tips = tw.div`
    flex w-96 flex-wrap mt-4 gap-x-7 gap-y-4
`
const Tipbutton = tw.button`
    bg-[#00474b] text-white w-24 h-16 flex items-center justify-center border-2 border-transparent rounded-lg hover:bg-[#a1e7df] hover:text-[#09524f]
`
const Custombutton = tw(Styledinput)`
    bg-[#f0f7f9] text-[#697f7f] hover:border-2 hover:border-[#5aa79d] hover:bg-white w-24 h-16 border-2 border-transparent rounded-lg relative bottom-3 text-lg text-center
`


export const Totalbill = createContext('')
export default function LeftComponent() {
    let [bill_state,setBillstate] = useState('')
    let [bill,setBill] = useState(0.00)
    let [tip,setTip] = useState(0)
    let [custom_tip,setCustomtip] = useState('')
    let [persons,setPersons] = useState('')


    function watchbill(event) {
        setBillstate(Number(event.target.value))
    }
    function submitbill(event) {
        (event.key == 'Enter')?setBill(bill_state):null
    }
    function submitTip(event) {
        let num = event.target.textContent.slice(0,-1)
        setTip((num/100) * bill)
    }
    function customTip(event) {
        setCustomtip(event.target.value)
    }
    function submitCustomtip(event){
        ((event.key == 'Enter') && (bill>0))?setTip((custom_tip/100) * bill):null
    }
    function watchpersons(event) {
        setPersons(event.target.value)
    }
    
    return(
        <>
            <Left>
                <h1>Bill</h1>
                <Styledinput onChange={watchbill} onKeyDown = {submitbill} type="text" value={bill_state}/>
                <Styledtip>
                    <h1>Select tip</h1>
                    <Tips>
                        <Tipbutton onClick={submitTip}>5%</Tipbutton>
                        <Tipbutton onClick={submitTip}>10%</Tipbutton>
                        <Tipbutton onClick={submitTip}>15%</Tipbutton>
                        <Tipbutton onClick={submitTip}>25%</Tipbutton>
                        <Tipbutton onClick={submitTip}>30%</Tipbutton>
                        <Custombutton onChange={customTip} onKeyDown={submitCustomtip} placeholder='Custom' type="text" value={custom_tip}/>
                    </Tips>
                </Styledtip>
                <Styledtip>
                    <h1>Number of people</h1>
                    <Styledinput onChange={watchpersons} type="text" value={persons}/>
                </Styledtip>
                <Totalbill.Provider value={{bill,setBill,tip,setTip,persons,setPersons}}>
                    <RightComponent/>
                </Totalbill.Provider>
            </Left>
        </>
    )
}