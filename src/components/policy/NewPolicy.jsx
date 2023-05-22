import React, {useEffect, useState} from 'react'
import { useQuery } from '@tanstack/react-query';

const URI = 'http://localhost:8080';

export default function NewPolicy() {
    const [ownDamagePremium, setOwnDamagePremium] = useState(0)
    const [actsOfNaturePremium, setActsOfNaturePremium] = useState(0)
    const [autoPassengerPremium, setAutoPassengerPremium] = useState(0)
    const [biPremium, setBiPremium] = useState(0)
    const [pdPremium, setPdPremium] = useState(0)
    const [grossPremium, setGrossPremium] = useState(0)
    const [taxes, setTaxes] = useState(0)
    const [totalPremium, setTotalPremium] = useState(0)
    const [paidPremium, setPaidPremium] = useState(0)
    const [balance, setBalance] = useState(0)

    const [ownDamage, setOwnDamage] = useState(0)
    const [actsOfNature, setActsOfNature] = useState(0)
    const [autoPassenger, setAutoPassenger] = useState(0)
    const [biPd, setBiPd] = useState(0)

    const [plateNumber, setPlateNumber] = useState('')
    const [engineNumber, setEngineNumber] = useState('')
    const [chassisNumber, setChassisNumber] = useState('')

    const [agentId, setAgentId] = useState(0)
    const [assuredFirstName, setAssuredFirstName] = useState('')
    const [assuredLastName, setAssuredLastName] = useState('')
    const [address, setAddress] = useState('')
    const [contactNumber, setContactNumber] = useState('')
    const [policyNumber, setPolicyNumber] = useState('')
    const [billNumber, setBillNumber] = useState('')
    const [issueDate, setIssueDate] = useState('')
    const [inceptionDate, setInceptionDate] = useState('')
    const [expiryDate, setExpiryDate] = useState('')





    useEffect(() => {
        let grossPremium = Number(ownDamagePremium) + Number(actsOfNaturePremium) + Number(autoPassengerPremium) + Number(biPremium) + Number(pdPremium)
        setGrossPremium(grossPremium)
        let taxes = grossPremium * .247
        setTaxes(taxes)
        let totalPremium = taxes + grossPremium
        setTotalPremium(totalPremium)
        let balance = totalPremium - paidPremium
        setBalance(balance)
    });

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await fetch(`${URI}/create_policy`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    first_name: assuredFirstName,
                    last_name: assuredLastName,
                    address: address,
                    contact_number: contactNumber,
                    agent_id: agentId,
                    policy_number: policyNumber,
                    bill_number: billNumber,
                    plate_number: plateNumber,
                    engine_number: engineNumber,
                    chassis_number: chassisNumber,
                    issue_date: issueDate,
                    inception_date: inceptionDate,
                    expiry_date: expiryDate,
                    own_damage: ownDamage,
                    acts_of_nature: actsOfNature,
                    bi_pd: biPd,
                    auto_passenger: autoPassenger,
                    acts_of_nature_premium: actsOfNaturePremium,
                    own_damage_premium: ownDamagePremium,
                    auto_passenger_premium: autoPassengerPremium,
                    bi_premium: biPremium,
                    pd_premium: pdPremium,
                    gross_premium: grossPremium,
                    taxes: taxes,
                    total_premium: totalPremium,
                    paid_premium: paidPremium,
                    balance: balance
                })
            })

            if (response.ok) {
                const result = await response.json();
                alert(`Success: ${policyNumber} added!`);
            } else{
                const result = await response.json();
                alert(result.error)
            }
            
        } catch (error) {
            alert(`Please complete the fields`);
            console.error("Error:", error);
          }
    }

    const { isLoading: isLoadingAgents, error, data: agents, refetch: refetchAgents } = useQuery({
        queryKey: ['agents'],
        queryFn: () =>
            fetch(`${URI}/agents`).then(
            (res) => res.json(),
            ),
    });

  return (
    <div class='flex flex-col items-center h-56 w-full'>
        <div class='flex w-full items-center justify-center mt-10'>
            <form class='flex flex-wrap w-full  space-x-10 mx-10' onSubmit={e => handleSubmit(e)}>
                <div>
                    <label class="block mb-6 text-sm font-medium text-gray-900 dark:text-white">
                        Agent:
                        <select onChange={(e) => setAgentId(e.target.value)} name='agent_id' class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option value="" selected disabled hidden>Select Agent</option>
                            {agents?.map(agent => {
                                return <option key={agent.id} value={agent.id}>{agent.first_name + ' ' + agent.last_name}</option>;
                            })}
                        </select>
                    </label>


                    <label class="block mb-6 text-sm font-medium text-gray-900 dark:text-white">
                        Assured:
                        <input type="text" name="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-4" placeholder='first name' onChange={(e) => setAssuredFirstName(e.target.value)}/>
                        <input type="text" name="last_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='last name' onChange={(e) => setAssuredLastName(e.target.value)}/>
                    </label>
                    <label class="block mb-6 text-sm font-medium text-gray-900 dark:text-white">
                        Address:
                        <textarea name="address" class="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={(e) => setAddress(e.target.value)}/>
                    </label>

                    <label class="block mb-6 text-sm font-medium text-gray-900 dark:text-white">
                        Contact Number:
                        <input type="text" id="base-input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={(e) => setContactNumber(e.target.value)}/>
                    </label>
                    <label class="block mb-6 text-sm font-medium text-gray-900 dark:text-white">
                        Policy Number:
                        <input type="text" name="policy_number" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={(e) => setPolicyNumber(e.target.value)}/>
                    </label>
                    <label class="block mb-6 text-sm font-medium text-gray-900 dark:text-white">
                        Bill Number:
                        <input type="text" name="policy_number" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={(e) => setBillNumber(e.target.value)}/>
                    </label>
                    <label class="block mb-6 text-sm font-medium text-gray-900 dark:text-white">
                        Issue Date:
                        <input type="date" name="issue_date" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={(e) => setIssueDate(e.target.value)}/>
                    </label>
                    <label class="block mb-6 text-sm font-medium text-gray-900 dark:text-white">
                        Inception Date:
                        <input type="date" name="inception_date" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={(e) => setInceptionDate(e.target.value)}/>
                    </label>
                    <label class="block mb-6 text-sm font-medium text-gray-900 dark:text-white">
                        Expiry Date:
                        <input type="date" name="expiry_date" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={(e) => setExpiryDate(e.target.value)}/>
                    </label>

                </div>
                <div>
                    <label class="block mb-6 text-sm font-medium text-gray-900 dark:text-white">
                        Own Damage:
                        <input type="number" min="0" step="any" name="own_damage" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-4" placeholder='coverage' onChange={(e) => setOwnDamage(e.target.value)}/>
                        <input type="number" min="0" step='0.01' name="own_damage_premium" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='premium' onChange={(e) => setOwnDamagePremium(Number(e.target.value))}/>
                    </label>
                    <label class="block mb-6 text-sm font-medium text-gray-900 dark:text-white">
                        Acts of God/Nature:
                        <input type="number" min="0" step="any" name="acts_of_nature" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-4" placeholder='coverage' onChange={(e) => setActsOfNature(e.target.value)}/>
                        <input type="number" min="0" step="any" name="acts_of_nature_premium" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='premium' onChange={(e) => setActsOfNaturePremium(Number(e.target.value))}/>
                    </label>
                    <label class="block mb-6 text-sm font-medium text-gray-900 dark:text-white">
                        Bodily Injury and Property Damage:
                        <input type="number" min="0" step="any" name="bi_pd" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-4" placeholder='coverage' onChange={(e) => setBiPd(e.target.value)}/>
                        <input type="number" min="0" step="any" name="bi_premium" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-4" placeholder='BI premium' onChange={(e) => setBiPremium(Number(e.target.value))}/>
                        <input type="number" min="0" step="any" name="pd_premium" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='PD premium' onChange={(e) => setPdPremium(Number(e.target.value))}/>
                    </label>
                    <label class="block mb-6 text-sm font-medium text-gray-900 dark:text-white">
                        Auto Passenger:
                        <input type="number" min="0" step="any" name="auto_passenger" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-4" placeholder='coverage' onChange={(e) => setAutoPassenger(e.target.value)} />
                        <input type="number" min="0" step="any" name="auto_passenger_premium" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='premium' onChange={(e) => setAutoPassengerPremium(Number(e.target.value))}/>
                    </label>
                </div>
                <div>

                    <label class="block mb-6 text-sm font-medium text-gray-900 dark:text-white">
                        Plate Number:
                        <input type="text" name="plateNumber" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-4"  onChange={(e) => setPlateNumber(e.target.value)}/>
                    </label>
                    <label class="block mb-6 text-sm font-medium text-gray-900 dark:text-white">
                        Engine Number:
                        <input type="text" name="engineNumber" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-4"  onChange={(e) => setEngineNumber(e.target.value)}/>
                    </label>
                    <label class="block mb-6 text-sm font-medium text-gray-900 dark:text-white">
                        Chassis Number:
                        <input type="text" name="chassisNumber" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-4"  onChange={(e) => setChassisNumber(e.target.value)}/>
                    </label>
                </div>
                <div>
                    <label class="block mb-6 text-sm font-medium text-gray-900 dark:text-white">
                        Gross Premium:
                        <input type="number" min="0" step="any" name="gross_premium" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400onChange={} dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={grossPremium}/>
                    </label>
                    <label class="block mb-6 text-sm font-medium text-gray-900 dark:text-white">
                        Taxes:
                        <input type="number" min="0" step="any" name="taxes" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400onChange={} dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={taxes} />
                    </label>
                    <label class="block mb-6 text-sm font-medium text-gray-900 dark:text-white">
                        Total Premium:
                        <input type="number" min="0" step="any" name="total_premium" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400onChange={} dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={totalPremium} />
                    </label>
                    <label class="block mb-6 text-sm font-medium text-gray-900 dark:text-white">
                        Paid Premium:
                        <input type="number" min="0" step="any" name="paid_premium" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400onChange={} dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={(e) => setPaidPremium(e.target.value)}/>
                    </label>
                    <label class="block mb-6 text-sm font-medium text-gray-900 dark:text-white">
                        Balance:
                        <input type="number" min="0" step="any" name="balance" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400onChange={} dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={balance}/>
                    </label>
                    <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit Policy</button>
                </div>
                

            </form>
        </div>

    </div>
  )
}
