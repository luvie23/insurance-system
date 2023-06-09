import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'

export default function ResultItem(props) {
    const [policy, setPolicy] = useState({})

    useEffect(() => {
        setPolicy(props.policy)
    }, [])



  return (
        <tr class="bg-neutral-200 border-b dark:bg-gray-800 dark:border-gray-700">
            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {policy.first_name + ' ' + policy.last_name}
            </th>
            <td class="px-6 py-4">
                {policy.policy_number}
            </td>
            <td class="px-6 py-4">
                {policy.own_damage}
            </td>
            <td class="px-6 py-4">
                {policy.issue_date}
            </td>
            <td class="px-6 py-4">
                {policy.inception_date}
            </td>
            <td class="px-6 py-4">
                {policy.expiry_date}
            </td>
            <td class="px-6 py-4">
                {policy.total_premium}
            </td>
            <td class="px-6 py-4">
                <Link to={`/policy/${policy.policy_number}`} class="text-blue-900">Show Policy</Link>
            </td>
        </tr>
  )
}



                
