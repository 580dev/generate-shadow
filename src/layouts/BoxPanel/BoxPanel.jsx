import React from 'react'
import { useSelector } from 'react-redux';
import BoxRange from './BoxRange';
import BoxColorPicker from './BoxColorPicker';

export default function BoxPanel() {
    const boxPorperties = useSelector(state => state.boxProperties)

    const boxInput = boxPorperties.map((boxPorperty, index) => {
        if(boxPorperty.type === 'range') {
            return <BoxRange key={index} inputData={boxPorperty} />
        } else if(boxPorperty.type === 'color') {
            return <BoxColorPicker key={index} inputData={boxPorperty} />
        }
    })

    return (
        <div className='bg-gray-50 px-6 py-4 border-b border-gray-300'>
            <p className='font-bold text-lg my-2'> Box properties </p>
            {boxInput}
        </div>
    )
}
