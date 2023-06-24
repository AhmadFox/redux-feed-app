import React from 'react'

const Select = ({addStyle, value, action, options = []}) => {

  return (
    <div className={`relative w-full bg-white ${addStyle}`}>
      <select className='outline-none appearance-none w-full invalid:text-gray-400' value={value} onChange={action}>
        {options.map((option, idx) => (
            <option key={idx} value={option.value} disabled={option.disabled}>{option.label}</option>
          ))}
      </select>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 absolute top-1/2 -translate-y-1/2 right-3">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
      </svg>
    </div>
  )
}

export default Select
