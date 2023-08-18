import React from 'react'
import { useDispatch } from 'react-redux'
import { updateBoxValue } from '../../features/boxProperties'

export default function BoxColorPicker({inputData}) {

  const dispatch = useDispatch()

  function handleChange(e) {
    dispatch(updateBoxValue({value: e.target.value, inputNumber: inputData.inputNumber}))
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
