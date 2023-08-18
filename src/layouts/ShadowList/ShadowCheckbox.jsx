import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import shadows, { updateCheckBox } from '../../features/shadows'

export default function ShadowCheckbox({name, shadowID}) {
    const checkBoxShadow = useSelector(state => state.shadows.find(shadow => shadow.id === shadowID))
    const dispatch = useDispatch()
  return (
    <>
        <input
        onChange={() => dispatch(updateCheckBox({name, shadowID}))}
        id={`checkbox-${name}-${shadowID}`}
        checked={checkBoxShadow[name]}
        type="checkbox"
        className='h-4 w-4 mr-2 rounded border-gray-300'/>
        <label 
        className='leading-4 mr-5'
        htmlFor={`checkbox-${name}-${shadowID}`}>
            {name.charAt(0).toUpperCase() + name.slice(1)}
        </label>
    </>
  )
}
