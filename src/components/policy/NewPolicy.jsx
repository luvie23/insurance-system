import React, {useEffect, useState} from 'react'
import { useQuery } from '@tanstack/react-query';


export default function NewPolicy() {
    const [ownDamagePremium, setOwnDamagePremium] = useState(0)
    const [actsOfNaturePremium, setActsOfNaturePremium] = useState(0)
    const [autoPassengerPremium, setAutoPassengerPremium] = useState(0)
    const [biPremium, setBiPremium] = useState(0)
    const [pdPremium, setPdPremium] = useState(0)

    const [grossPremium, setGrossPremium] = useState(0)


    useEffect(() => {
        let grossPremium = Number(ownDamagePremium) + Number(actsOfNaturePremium) + Number(autoPassengerPremium) + Number(biPremium) + Number(pdPremium)
        setGrossPremium(grossPremium)
      });

    const { isLoading: isLoadingAgents, error, data: agents, refetch: refetchAgents } = useQuery({

        queryKey: ['agents'],
        queryFn: () =>
            fetch(`http://localhost:8080/agents`).then(
            (res) => res.json(),
            ),
    });

  return (
    <div class='flex flex-col items-center h-56 w-full'>
        <div class='flex w-full items-center justify-center mt-10'>
            <form class='flex flex-wrap w-full  space-x-10 mx-10'>
                <div>
                    <label class="block mb-6 text-sm font-medium text-gray-900 dark:text-white">
                        Agent:
                        <select name='agent_id' class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option value="" selected disabled hidden>Select Agent</option>
                            {agents?.map(agent => {
                                return <option key={agent.id} value={agent.id}>{agent.first_name + ' ' + agent.last_name}</option>;
                            })}
                        </select>
                    </label>


                    <label class="block mb-6 text-sm font-medium text-gray-900 dark:text-white">
                        Assured:
                        <input type="text" name="assured" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                    </label>
                    <label class="block mb-6 text-sm font-medium text-gray-900 dark:text-white">
                        Address:
                        <textarea name="address" class="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                    </label>

                    <label class="block mb-6 text-sm font-medium text-gray-900 dark:text-white">
                        Contact Number:
                        <input type="text" id="base-input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                    </label>
                    <label class="block mb-6 text-sm font-medium text-gray-900 dark:text-white">
                        Policy Number:
                        <input type="text" name="policy_number" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                    </label>
                    <label class="block mb-6 text-sm font-medium text-gray-900 dark:text-white">
                        Issue Date:
                        <input type="date" name="issue_date" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                    </label>
                    <label class="block mb-6 text-sm font-medium text-gray-900 dark:text-white">
                        Inception Date:
                        <input type="date" name="inception_date" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                    </label>
                    <label class="block mb-6 text-sm font-medium text-gray-900 dark:text-white">
                        Expiry Date:
                        <input type="date" name="expiry_date" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                    </label>

                </div>
                <div>
                    <label class="block mb-6 text-sm font-medium text-gray-900 dark:text-white">
                        Own Damage:
                        <input type="number" min="1" step="any" name="own_damage" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-4" placeholder='coverage'/>
                        <input type="number" min="1" step="any" name="own_damage_premium" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='premium' onChange={(e) => setOwnDamagePremium(e.target.value)}/>
                    </label>
                    <label class="block mb-6 text-sm font-medium text-gray-900 dark:text-white">
                        Acts of God/Nature:
                        <input type="number" min="1" step="any"name="acts_of_nature" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-4" placeholder='coverage'/>
                        <input type="number" min="1" step="any" name="acts_of_nature_premium" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='premium' onChange={(e) => setActsOfNaturePremium(e.target.value)}/>
                    </label>
                    <label class="block mb-6 text-sm font-medium text-gray-900 dark:text-white">
                        Third Party Bodily Injury and Property Damage:
                        <input type="number" min="1" step="any" name="bi_pd" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-4" placeholder='coverage'/>
                        <input type="number" min="1" step="any" name="bi_premium" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-4" placeholder='BI premium' onChange={(e) => setBiPremium(e.target.value)}/>
                        <input type="number" min="1" step="any" name="pd_premium" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='PD premium' onChange={(e) => setPdPremium(e.target.value)}/>
                    </label>
                    <label class="block mb-6 text-sm font-medium text-gray-900 dark:text-white">
                        Auto Passenger:
                        <input type="number" min="1" step="any" name="auto_passenger" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-4" placeholder='coverage'/>
                        <input type="number" min="1" step="any" name="auto_passenger_premium" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='premium' onChange={(e) => setAutoPassengerPremium(e.target.value)}/>
                    </label>
                </div>
                <div>
                    <label class="block mb-6 text-sm font-medium text-gray-900 dark:text-white">
                        Gross Premium:
                        <input type="number" name="policy_number" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400onChange={} dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={grossPremium}/>
                    </label>
                </div>

            </form>
        </div>

    </div>
  )
}
