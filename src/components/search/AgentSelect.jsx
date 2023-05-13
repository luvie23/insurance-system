import React from 'react'

export default function AgentSelect(props) {
    const agents = props.agents

    return (
        
        <select>
            {agents?.map(agent => {
                return <option value={agent.id}>{agent.first_name + ' ' + agent.last_name}</option>
            })}
        </select>
    )
}
