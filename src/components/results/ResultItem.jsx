import React, {useState, useEffect} from 'react'

export default function ResultItem(props) {
    const [policy, setPolicy] = useState({})

    useEffect(() => {
        setPolicy(props.policy)
    }, [])



  return (
    <div>
        <p>{policy.policy_number}</p>
    </div>
  )
}
