import React from 'react'

export default function Home() {
  return (
    <div className='flex flex-col items-center'>
        <div className='flex flex-col my-10 w-60 h-24 bg-slate-300 items-center justify-center rounded-lg space-y-2'>
            <div className='flex items-center space-x-2'>
                <p>Search by:</p>
                <select className='w-30 h-10' name="">
                    <option value="agent">Agent</option>
                    <option value="assured">Assured</option>
                    <option value="policyNumber">Policy No.</option>
                    <option value="billNumber">Bill No.</option>
                    <option value="plateNumber">Plate No.</option>
                    <option value="chassisNumber">Chassis No.</option>
                    <option value="engineNumber">Engine No.</option>
                </select>
            </div>
            <input type="text" />
        </div>

    </div>
  )
}
