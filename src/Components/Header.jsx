import React from 'react'

export default function Header() {
  return (
    <div>
        <nav className='bg-amber-500 flex justify-start ps-10 p-5 fixed top-0 w-full'>
            <div className='flex'>
                <img className='w-10' src="https://www.svgrepo.com/show/271990/health-care-medicine.svg" alt="" />
                <h1 className='text-4xl font-bold '><span className='text-amber-950'>BMI</span> Calculator</h1>
            </div>
        </nav>
    </div>
  )
}
