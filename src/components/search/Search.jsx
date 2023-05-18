import React, {  useState } from 'react';
import { useQuery } from '@tanstack/react-query';

import Results from '../results/Results';


export default function Search() {
    const [searchKey, setSearchKey] = useState('agent_id');
    const [searchInput, setSearchInput] = useState('');

    const { isLoading: isLoadingPolicies, error: errorPolicies, data: policies, refetch: refetchPolicies } = useQuery({

        queryKey: ['policies'],
        queryFn: () =>
            fetch(`http://localhost:8080/policies/${searchKey}=${searchInput}`).then(
            (res) => res.json(),
            ),
        enabled: false,
    });
    

    const { isLoading: isLoadingAgents, error, data: agents, refetch: refetchAgents } = useQuery({

        queryKey: ['agents'],
        queryFn: () =>
            fetch(`http://localhost:8080/agents`).then(
            (res) => res.json(),
            ),
    });

    const handleSearchKeyChange = (e) => {
        setSearchKey(e.target.value);
    }

    const handleInputChange = async (e) => {
        await setSearchInput(e.target.value);
        refetchPolicies();
        
    }

    return (
        
        <div className='flex flex-col w-full items-center '>
            <div className='flex flex-col my-10 w-60 h-36 bg-neutral-400 items-center justify-center rounded-lg space-y-2'>
                <p>Search by:</p>
                <select className='w-30 h-10' onChange={(e) => handleSearchKeyChange(e)}>
                    <option value="agent_id">Agent</option>
                    <option value="assured_name">Assured</option>
                    <option value="policy_number">Policy No.</option>
                    <option value="plate_number">Plate No.</option>
                    <option value="chassis_number">Chassis No.</option>
                    <option value="engine_number">Engine No.</option>
                </select>
                


                {(searchKey == 'agent_id') ? 
                <select onChange={e => handleInputChange(e)}>
                    <option value="" selected disabled hidden>Select Agent</option>
                    {agents?.map(agent => {
                        return <option key={agent.id} value={agent.id}>{agent.first_name + ' ' + agent.last_name}</option>;
                    })}
                </select>
                : 
                <input type="text" onChange={e => handleInputChange(e)}/>}
            </div>
            <Results className="flex bg-amber-300 w-full" policies={policies} searchKey={searchKey}/>
        </div>
    )
}
