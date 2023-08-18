import React from 'react'
import ModalBtn from './Modal/ModalBtn'
import getBoxShadowValue from '../../utils/getBoxShadowValue'
import { useSelector } from 'react-redux'

export default function Visualization() {
    const shadowsValues = useSelector(state => state.shadows)
    const boxProperties = useSelector(state => state.boxProperties)
    return (
        <div className='flex flex-col p-5 m-10 lg:ml-28'>
            <ModalBtn/>
            <div className='w-[250px] h-[250px] bg-white rounded-xl mb-20 lg:mb-40'
            style={{
                boxShadow: `${getBoxShadowValue(shadowsValues).slice(0, -1)}`,
                borderRadius: `${boxProperties[0].value}px`,
                height: `${boxProperties[1].value}px`,
                width: `${boxProperties[2].value}px`,
                backgroundColor: `${boxProperties[3].value}`,
            }}
            >
            </div>
        </div>
    )
}