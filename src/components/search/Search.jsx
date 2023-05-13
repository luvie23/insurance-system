import React, {  useState } from 'react'
import { useQuery } from '@tanstack/react-query'

import Results from '../results/Results'

export default function Search() {
    const [searchKey, setSearchKey] = useState('agent_id');
    const [searchInput, setSearchInput] = useState('');

    const { isLoading, error, data: policies, refetch } = useQuery({

        queryKey: ['policies'],
        queryFn: () =>
            fetch(`http://localhost:8080/policies/${searchKey}/${searchInput}`).then(
            (res) => res.json(),
            ),
        enabled: false,
    
        
    })
    




    return (
        
        <div>
            <div className='flex flex-col my-10 w-60 h-36 bg-slate-300 items-center justify-center rounded-lg space-y-2'>
                <p>Search by:</p>
                <select className='w-30 h-10' onChange={(e) => setSearchKey(e.target.value)}>
                    <option value="agent_id">Agent</option>
                    <option value="assured_id">Assured</option>
                    <option value="policy_number">Policy No.</option>
                    <option value="bill_number">Bill No.</option>
                    <option value="plate_number">Plate No.</option>
                    <option value="chassis_number">Chassis No.</option>
                    <option value="engine_number">Engine No.</option>
                </select>
                <input type="text" onChange={(e) => {
                    setSearchInput(e.target.value)
                    setTimeout(function () {
                        refetch()
                    },200)
                    }}/>
            </div>
            <p>{searchInput}</p>
            <Results className="flex flex-col bg-amber-300" policies={policies} searchKey={searchKey}/>
        </div>
    )
}
