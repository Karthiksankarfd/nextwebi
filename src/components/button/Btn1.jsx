import React from 'react'

const Btn1 = ({children}) => {
  return (<button  className='py-2 px-5  text-white rounded-[var(--button-radius)] bg-[var(--bg-btn-color)]  text-[14px] md:text-[16px]'>{children}</button>)
}

export default Btn1
