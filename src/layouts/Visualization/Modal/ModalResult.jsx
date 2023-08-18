import React from 'react'
import getBoxShadowValue from '../../../utils/getBoxShadowValue'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'

export default function ModalResult({closeModal}) {
  const shadowsValues = useSelector(state => state.shadows)
  const boxProperties = useSelector(state => state.boxProperties)

  useEffect(() => {
    document.body.style.overflow = "hidden"
    return () => document.body.style.overflow = "auto"
  }, []);

  let runningAnimation = false

  function handleCopy(e) {
    if(!runningAnimation) {
      runningAnimation = true
      e.target.textContent = "Copied !"

      setTimeout(() => {
        runningAnimation = false
        e.target.textContent = "Copy"
      }, 1250);
    }

    navigator.clipboard.writeText(`box-shadow: ${getBoxShadowValue(shadowsValues)}`)
  }

  return (
    <div 
    onClick={closeModal}
    className='fixed flex z-10 inset-0 items-center
     justify-center bg-gray-600/75'>
        <div 
        onClick={e => e.stopPropagation()}
        className='max-w-[400px] rounded p-7 bg-gray-50 mb-[10vh]'>
            <div className='flex items-end mb-5'>
                <p className='font-semibold mr-5'>Here is your code 🍬</p>
                <button 
                onClick={handleCopy}
                className='ml-auto mr-2 text-sm bg-blue-600 text-white
                 hover:bg-blue-700 py-1 px-3 rounded'> Copy </button>
                 <button className='text-sm bg-red-600 text-white
                 hover:bg-red-700 py-1 px-3 rounded'
                 onClick={closeModal}> Close </button>
            </div>
            <p className='rounded bg-gray-100 p-5'>              
              <span className='font-semibold'>box-shadow: </span>
              <span>{getBoxShadowValue(shadowsValues)}</span>
              {/* <br />
              <span className='font-semibold'> border-radius: </span>
              <span>{boxProperties[0].value + "px"}</span>
              <br />
              <span className='font-semibold'> height: </span>
              <span>{boxProperties[1].value + "px"}</span>
              <br />
              <span className='font-semibold'> width: </span>
              <span>{boxProperties[2].value + "px"}</span>
              <br />
              <span className='font-semibold'> background-color: </span>
              <span>{boxProperties[3].value}</span> */}
            </p>
        </div>
     </div>
  )
}
