import React, {useState, useEffect} from 'react'
import ResultItem from './ResultItem';



export default function Results(props) {
    const [policies, setPolicies] = useState([])

    useEffect(() => {
        setPolicies(props.policies)
    }, )

    return (
        <div>
            {policies?.map(policy => {
                return <ResultItem key={policy.policy_number} policy={policy}/>
            })}
        </div>
    )
}
