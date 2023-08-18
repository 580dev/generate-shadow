import React from 'react'
import { useDispatch } from 'react-redux'
import {updateShadowValue} from '../../features/shadows'

export default function ShadowColorPicker({inputData, shadowID}) {

    const dispatch = useDispatch()

    function handleChange(e) {
      dispatch(updateShadowValue({
        value: e.target.value,
        inputNumber: inputData.inputNumber,
        shadowID 
      }))
    }

  return (
    <div className='mt-3'>
      <p>{inputData.name}</p>
      <div className='flex mt-2'>
        <input className='flex-grow border py-1 px-2 focus:outline-1 outline-gray-400'
        type="text"
        value={inputData.value}
        onChange={handleChange}
        />
        <input type="color"
        className='cursor-pointer h-[40px]'
        value={inputData.value}
        onChange={handleChange}
        />
      </div>
    </div>
  )
}
