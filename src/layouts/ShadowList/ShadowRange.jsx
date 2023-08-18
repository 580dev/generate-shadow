import React from 'react'
import { useDispatch } from 'react-redux'
import {updateShadowValue} from '../../features/shadows'

export default function ShadowRange({inputData, shadowID}) {

  const dispatch = useDispatch()

  function handleChange(e) {
    dispatch(updateShadowValue({
      value: e.target.value,
      inputNumber: inputData.inputNumber,
      shadowID 
    }))
  }

  return (
    <div className='my-4'>
      <div className='flex justify-between items-baseline'>
        <p> {inputData.name} </p>
        <div className='flex items-baseline mb-2'>
          <input
          value={inputData.value}
          onChange={handleChange}
          className='w-14 h-8 mr-2 border border-gray-200 text-center'
          type='number'
          />
          <p>px</p>
        </div>
      </div>
      <div className='relative w-full z-0 flex items-center'>
        <input
        value={inputData.value}
        onChange={handleChange}
        min={inputData.minMax[0]}
        max={inputData.minMax[1]}
        type='range'
        className='w-full h-[2px] bg-gray-300 rounded-lg appearance-none cursor-pointer'
        />
        <div className='absolute -z-10 top-1/2 left-1/2 -translate-y-1/2 translate-x-1/2
        w-0.5 h-10 bg-gray-300 rounded'>
        </div>
      </div>
    </div>
  )
}
