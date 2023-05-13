import React, {useState, useEffect} from 'react'
import ResultItem from './ResultItem';



export default function Results(props) {
    const [policies, setPolicies] = useState([])

    useEffect(() => {
        setPolicies(props.policies)
    }, )

    return (

        <div class="relative overflow-x-auto">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" class="px-6 py-3">
                            Assured's Name
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Policy Number
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Own Damage Coverage
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Issue Date
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Inception Date
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Expiry Date
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Total Premium
                        </th>
                        <th scope="col" class="px-6 py-3">
                            ADdress
                        </th>
                    </tr>
                </thead>
                <tbody>
                {policies?.map(policy => {
                    return <ResultItem key={policy.policy_number} policy={policy}/>
                })}
                </tbody>
            </table>
        </div>
    )
}
