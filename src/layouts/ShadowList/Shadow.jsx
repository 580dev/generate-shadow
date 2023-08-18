import React from 'react'
import { useState, useEffect } from 'react'
import chevron from '../../assets/chevron.svg'
import ShadowRange from './ShadowRange'
import ShadowColorPicker from './ShadowColorPicker'
import ShadowCheckbox from './ShadowCheckbox'
import { useDispatch } from 'react-redux'
import { removeShadow } from '../../features/shadows'

export default function Shadow({panelNumber, shadow}) {

    const [toggleShadow, setToggleShadow] = useState(false)
    const dispatch = useDispatch()

    useEffect(()=> {
        if(panelNumber === 1) {
            setToggleShadow(true)
        }
    }, [])

    const shadowInputs = shadow.inputs.map((shadowInput, index) => {
        if(shadowInput.type === 'range') {
            return <ShadowRange key={index} inputData={shadowInput} shadowID={shadow.id} />
        } else if(shadowInput.type === 'color') {
            return <ShadowColorPicker key={index} inputData={shadowInput} shadowID={shadow.id} />
        }
    })

    return (
        <li className='bg-gray-50 border-b border-gray-300'>
            <button 
            className='px-6 py-4 flex justify-between w-full items-center hover:bg-gray-100'
            onClick={() => setToggleShadow(!toggleShadow)}>
                <span>Shadow {panelNumber}</span>
                <img 
                src={chevron} 
                className='font-bold w-5'
                style={{
                    transform: `${toggleShadow ? "rotate(90deg)" : "rotate(0deg)"}`
                }}
                alt=""/>
            </button>
            {toggleShadow && <>
                <div className='flex items-end pt-4 px-6'>
                    <ShadowCheckbox name={"active"} shadowID={shadow.id}/>
                    <ShadowCheckbox name={"inset"} shadowID={shadow.id}/>
                    <button
                    onClick={() => dispatch(removeShadow(shadow.id))}
                    className='ml-auto text-sm bg-red-600 text-white
                    hover:bg-red-700 py-1 px-3 rounded'
                    >Remove</button>
                </div>
                <div className='py-4 px-6'>
                    {shadowInputs}
                </div>
            </>}
        </li>
    )
}
